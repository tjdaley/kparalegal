"""
db/repositories/parameter.py - Repository for Parameter model using Supabase
"""
from db.models.parameter import ParameterInDB
from db.repositories.base_repo import BaseRepository
from db.supabasemanager import DatabaseManager

class ParameterRepository(BaseRepository[ParameterInDB]):
    def __init__(self, manager: DatabaseManager):
        super().__init__(manager, "parameters", ParameterInDB)
