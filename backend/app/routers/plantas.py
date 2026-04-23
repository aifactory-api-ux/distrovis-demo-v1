from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.database import get_db
from app.schemas import Planta, PlantaCreate
from app.crud import get_plantas, create_planta

router = APIRouter(prefix="/api/plantas", tags=["plantas"])


@router.get("", response_model=List[Planta])
def read_plantas(db: Session = Depends(get_db)):
    plantas = get_plantas(db)
    return plantas


@router.post("", response_model=Planta)
def create_planta_endpoint(planta: PlantaCreate, db: Session = Depends(get_db)):
    return create_planta(db, planta)