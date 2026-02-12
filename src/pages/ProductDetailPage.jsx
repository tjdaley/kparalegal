import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { SEO } from '../components/SEO'
import { apiService } from '../services/apiService'

const ProductDetailPage = () => {
  const { slug } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await apiService.getProductBySlug(slug)
        setProduct(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [slug])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-800 mb-4">{error || 'Product not found'}</p>
            <Link
              to="/services"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              ← Back to Services
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Create dynamic structured data for this product
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "sameAs": "https://en.wikipedia.org/wiki/Paralegal",
    "name": product.title,
    "description": product.description.substring(0, 200),
    "provider": {
      "@type": "Organization",
      "name": "K-Paralegal, LLC",
      "url": "https://kparalegal.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Texas"
    },
    "serviceType": "Paralegal Services",
    ...(product.image_path && {
      "image": `https://kparalegal.com${product.image_path}`
    }),
    ...(product.order_link && {
      "url": product.order_link
    }),
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${window.location.origin}`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": `${window.location.origin}/services`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": product.title,
          "item": `${window.location.origin}/services/${product.slug}`
        }
      ]
    },
  }

  return (
    <div className="w-full">
      <SEO
        title={`${product.title} | K-Paralegal, LLC`}
        description={product.description.substring(0, 160)}
        url={`/product/${product.slug}`}
        image={product.image_path || '/images/ogimage.png'}
        type="article"
        structuredData={structuredData}
      />
      {/* Hero Section with Image */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link
                to="/services"
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Services
              </Link>
            </div>

            {/* Product Header */}
            <div className="flex items-start space-x-4 mb-6">
              {product.icon && (
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center">
                  <i className={`${product.icon} text-3xl text-primary-600`}></i>
                </div>
              )}
              <div className="flex-grow">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Image (if available) */}
      {product.image_path && (
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={product.image_path}
                  alt={product.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Product Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
              {/* Markdown Description */}
              <div className="prose prose-lg max-w-none mb-8">
                <ReactMarkdown
                  components={{
                    h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8" {...props} />,
                    h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-6" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-gray-900 mb-2 mt-4" {...props} />,
                    p: ({ node, ...props }) => <p className="text-gray-700 mb-4 leading-relaxed" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700" {...props} />,
                    ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700" {...props} />,
                    li: ({ node, ...props }) => <li className="text-gray-700" {...props} />,
                    strong: ({ node, ...props }) => <strong className="font-semibold text-gray-900" {...props} />,
                    em: ({ node, ...props }) => <em className="italic" {...props} />,
                    a: ({ node, ...props }) => <a className="text-primary-600 hover:text-primary-700 underline" {...props} />,
                    blockquote: ({ node, ...props }) => (
                      <blockquote className="border-l-4 border-primary-600 pl-4 italic text-gray-600 my-4" {...props} />
                    ),
                    code: ({ node, inline, ...props }) =>
                      inline ? (
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono" {...props} />
                      ) : (
                        <code className="block bg-gray-100 p-4 rounded-lg text-sm font-mono overflow-x-auto" {...props} />
                      ),
                  }}
                >
                  {product.description}
                </ReactMarkdown>
              </div>

              {/* Order Button */}
              {product.order_link && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        Ready to Get Started?
                      </h3>
                      <p className="text-gray-600">
                        Order this service and we'll get to work right away.
                      </p>
                    </div>
                    <a
                      href={product.order_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap"
                    >
                      Order Now
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Questions About This Service?
            </h2>
            <p className="text-xl mb-8 text-primary-50">
              We're here to help. Reach out and let's discuss how we can support your practice.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetailPage
