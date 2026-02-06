import os
from typing import Dict, List

from fastapi import FastAPI, Request, HTTPException, Response
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from db.models.product import ProductInDB

from util.loggerfactory import LoggerFactory
from db.supabasemanager import SupabaseManager
from db.repositories.product import ProductRepository
from util.settings import settings

LOGGER = LoggerFactory.create_logger(__name__)

app = FastAPI(
    title="K-Paralegal API",
    version=settings.version,
    docs_url="/api/docs",
    redoc_url="/api/redoc",
    openapi_url="/api/openapi.json",
    description="API for Texas Law Brand Engine - Strategic Litigation Roadmap Generator"
)

# --- DATA MODELS (For response_model in endpoints) ---
DB_MANAGER = SupabaseManager()
PRODUCTS = ProductRepository(DB_MANAGER)

# --- HELPER FUNCTIONS & CLASSES ---


# --- Crawler Information Route ---
@app.get('/robots.txt')
async def robots_txt() -> Response:
    """
    Serves the robots.txt file to instruct web crawlers.

    :return: Plain text response containing robots.txt directives.
    :rtype: Response
    """
    content = "User-agent: *\nAllow: *\n\nSitemap: {}/sitemap.xml".format(settings.host_url)
    return Response(content=content, media_type="text/plain")

def products_sitemap_urls() -> List[Dict[str, str]]:
    """
    Generate sitemap URLs for court opinions.

    :return: List of URLs for court opinions.
    :rtype: List[Dict[str, str]]
    """
    products: List[ProductInDB]
    products, _ = PRODUCTS.select_many(condition={})
    urls: List[Dict[str, str]] = [{"loc": f"{settings.host_url}/products/{product.slug}", "lastmod": (product.updated_at or product.created_at).strftime("%Y-%m-%d")} for product in products]  # type: ignore
    return urls

@app.get('/sitemap.xml')
async def sitemap_xml():
    """
    Serves the sitemap.xml file for SEO purposes.

    :return: XML response containing the sitemap.
    :rtype: Response
    """
    product_urls = products_sitemap_urls()
    all_urls = product_urls
    url_entries = ""
    for url in all_urls:
        url_entries += f"""   <url>
        <loc>{url['loc']}</loc>
        <lastmod>{url['lastmod']}</lastmod>
        <changefreq>monthly</changefreq>
    </url>
"""
    content = f'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{url_entries}</urlset>'
    return Response(content=content, media_type="application/xml")


# --- TEST ENDPOINT ---

@app.get("/api/healthcheck")
async def healthcheck():
    return {"status": "ok", "message": "Texas Law Brand Engine API is running."}

# --- PRODUCT ENDPOINTS ---

@app.get("/api/products", response_model=List[ProductInDB])
async def get_products():
    """
    Get all products ordered by their id field.

    :return: List of products
    :rtype: List[ProductInDB]
    """
    products, _ = PRODUCTS.select_many(condition={}, sort_by="id", sort_direction="asc")
    return products

@app.get("/api/products/{slug}", response_model=ProductInDB)
async def get_product_by_slug(slug: str):
    """
    Get a single product by its slug.

    :param slug: The product slug
    :type slug: str
    :return: Product details
    :rtype: ProductInDB
    :raises HTTPException: 404 if product not found
    """
    products, _ = PRODUCTS.select_many(condition={"slug": slug})
    if not products:
        raise HTTPException(status_code=404, detail=f"Product with slug '{slug}' not found")
    return products[0]

# --- STATIC FILES & SPA ROUTING ---

# Images directory
if os.path.exists("images"):
    LOGGER.debug("Mounting 'images' directory for static files.")
    app.mount("/images", StaticFiles(directory="images"), name="images")

# Other public static resources
if os.path.exists("public"):
    LOGGER.debug("Mounting 'public' directory for static files.")
    app.mount("/public", StaticFiles(directory="public"), name="public")

# Mount the 'dist' directory created by 'npm run build'
if os.path.exists("dist"):
    LOGGER.debug("Mounting 'dist' directory for static files.")
    app.mount("/", StaticFiles(directory="dist", html=True), name="static")

@app.exception_handler(404)
async def not_found_exception_handler(request: Request, exc: HTTPException):
    """
    Ensures React Router handles paths on refresh for non-API routes.
    API routes return proper JSON 404 responses.

    Args:
        request (Request): The incoming request.
        exc: The exception that was raised.

    Returns:
        FileResponse: The index.html file to let React Router handle the route (for non-API paths only).
    """
    # If this is an API request, return the proper JSON 404 error
    if request.url.path.startswith("/api/"):
        from fastapi.responses import JSONResponse
        return JSONResponse(
            status_code=404,
            content={"detail": str(exc.detail) if hasattr(exc, 'detail') else "Not found"}
        )

    # For all other paths, serve index.html for SPA client-side routing
    LOGGER.debug(f"404 Not Found: {request.url.path}. Serving index.html for SPA routing.")
    return FileResponse("dist/index.html")

if __name__ == "__main__":
    import uvicorn

    # Define the full logging schema
    logging_setup = {  # type: ignore
        "version": 1,
        "disable_existing_loggers": False,
        "formatters": {
            "default": {
                "format": settings.log_format,
                "style": "{",
            },
            "access": {
                "format": settings.log_format,
                "style": "{",
            },
        },
        "handlers": {
            "default": {
                "formatter": "default",
                "class": "logging.StreamHandler",
                "stream": "ext://sys.stderr",
            },
            "access": {
                "formatter": "access",
                "class": "logging.StreamHandler",
                "stream": "ext://sys.stdout",
            },
        },
        "loggers": {
            "uvicorn": {"handlers": ["default"], "level": settings.log_level.upper()},
            "uvicorn.error": {"level": settings.log_level.upper()},
            "uvicorn.access": {"handlers": ["access"], "level": settings.log_level.upper(), "propagate": False},
        },
    }

    uvicorn.run(
        'main:app',
        host=settings.host,
        port=settings.port,
        workers=8,
        reload=settings.is_development,
        log_level=settings.log_level.lower(),
        log_config=logging_setup  # type: ignore
    )
