from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.database import get_db
from app.schemas import Centro, CentroCreate
from app.crud import get_centros, create_centro

router = APIRouter(prefix="/api/centros", tags=["centros"])


@router.get("", response_model=List[Centro])
def read_centros(db: Session = Depends(get_db)):
    centros = get_centros(db)
    return centros


@router.post("", response_model=Centro)
def create_centro_endpoint(centro: CentroCreate, db: Session = Depends(get_db)):
    return create_centro(db, centro)