"""
db/repositories/court_opinion.py - Repository for CourtOpinion model using Supabase
"""
from db.models.product import ProductInDB
from db.repositories.base_repo import BaseRepository
from db.supabasemanager import DatabaseManager

class ProductRepository(BaseRepository[ProductInDB]):
    def __init__(self, manager: DatabaseManager):
        super().__init__(manager, "products", ProductInDB)
