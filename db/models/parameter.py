import datetime
from typing import Optional
from pydantic import BaseModel, ConfigDict, Field

class Parameter(BaseModel):
    key: str = Field(description="Key for the parameter")
    value: str = Field(description="Value of the parameter")
    environment: str = Field(description="Environment for the parameter (e.g., 'production', 'staging')")

class ParameterInDB(Parameter):
    id: int
    created_at: datetime.datetime
    updated_at: Optional[datetime.datetime] = None
    model_config = ConfigDict(from_attributes=True)
