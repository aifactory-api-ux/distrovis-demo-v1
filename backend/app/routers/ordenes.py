from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.database import get_db
from app.schemas import Orden, OrdenCreate
from app.crud import get_ordenes, create_orden

router = APIRouter(prefix="/api/ordenes", tags=["ordenes"])


@router.get("", response_model=List[Orden])
def read_ordenes(db: Session = Depends(get_db)):
    ordenes = get_ordenes(db)
    return ordenes


@router.post("", response_model=Orden)
def create_orden_endpoint(orden: OrdenCreate, db: Session = Depends(get_db)):
    return create_orden(db, orden)