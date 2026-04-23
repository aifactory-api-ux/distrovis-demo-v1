from sqlalchemy.orm import Session
from datetime import datetime

from app.models import Planta as PlantaModel, Centro as CentroModel, Orden as OrdenModel
from app.schemas import PlantaCreate, CentroCreate, OrdenCreate


def get_plantas(db: Session):
    return db.query(PlantaModel).all()


def create_planta(db: Session, planta: PlantaCreate):
    db_planta = PlantaModel(**planta.dict())
    db.add(db_planta)
    db.commit()
    db.refresh(db_planta)
    return db_planta


def get_centros(db: Session):
    return db.query(CentroModel).all()


def create_centro(db: Session, centro: CentroCreate):
    db_centro = CentroModel(**centro.dict())
    db.add(db_centro)
    db.commit()
    db.refresh(db_centro)
    return db_centro


def get_ordenes(db: Session):
    return db.query(OrdenModel).all()


def create_orden(db: Session, orden: OrdenCreate):
    db_orden = OrdenModel(**orden.dict())
    db.add(db_orden)
    db.commit()
    db.refresh(db_orden)
    return db_orden


def get_kpis(db: Session):
    total_ordenes = db.query(OrdenModel).count()
    ordenes_pendientes = db.query(OrdenModel).filter(OrdenModel.estado == "pendiente").count()
    ordenes_completadas = db.query(OrdenModel).filter(OrdenModel.estado == "completada").count()

    ordenes = db.query(OrdenModel).all()
    total_productos = sum(o.cantidad for o in ordenes)

    return {
        "total_ordenes": total_ordenes,
        "total_productos": total_productos,
        "ordenes_pendientes": ordenes_pendientes,
        "ordenes_completadas": ordenes_completadas
    }