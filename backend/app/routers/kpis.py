from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas import KPIResponse
from app.crud import get_kpis

router = APIRouter(prefix="/api/kpis", tags=["kpis"])


@router.get("", response_model=KPIResponse)
def read_kpis(db: Session = Depends(get_db)):
    return get_kpis(db)