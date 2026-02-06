import datetime
from typing import Optional
from pydantic import BaseModel, ConfigDict, Field

class Product(BaseModel):
    title: str = Field(description="Title header for the product card")
    description: str = Field(description="Markdown narative description of the product")
    order_link: str = Field(description="URL to COgnito Forms order form")
    image_path: str = Field(description="Path/URL to the background image for the product card")
    icon: str = Field(description="Font Awesome code for product icon")
    slug: str = Field(description="URL Slug for this product")


class ProductInDB(Product):
    id: int
    created_at: datetime.datetime
    updated_at: Optional[datetime.datetime] = None
    model_config = ConfigDict(from_attributes=True)
