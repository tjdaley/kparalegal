"""
settings.py - Configuration settings for the application.

Rf. https://docs.pydantic.dev/latest/concepts/pydantic_settings/
"""
from typing import Optional
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    version: str = "1.0.0"
    host: str = "0.0.0.0"
    host_url: str = "http://localhost:8092"
    port: int = 8093
    is_development: bool = False

     # Logging settings
    log_format: str = "%(asctime)s - %(name)-15s - %(levelname)-8s - %(message)s"
    log_level: str = "WARNING"  # Default log level for API

    # Database Settings
    supabase_url: str = ""
    supabase_service_role_key: str = ""
    supabase_password: str = ""
    
    class Config:
        env_file = ".env"
        # extra = "forbid"  # Pydantic will throw an error if unexpected env vars are present

    def getattr(self, item: str, default: Optional[str] = None):
        """Get an attribute from the settings"""
        return getattr(self, item, default)

settings = Settings()
