import os
import logging
from contextlib import asynccontextmanager
from datetime import datetime

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import engine, Base, SessionLocal
from app.models import Planta as PlantaModel, Centro as CentroModel, Orden as OrdenModel
from app.routers.plantas import router as plantas_router
from app.routers.centros import router as centros_router
from app.routers.ordenes import router as ordenes_router
from app.routers.kpis import router as kpis_router

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

VERSION = "1.0.0"


def seed_data():
    db = SessionLocal()
    try:
        if db.query(PlantaModel).count() == 0:
            plantas = [
                PlantaModel(nombre="Planta Norte", ubicacion="Ciudad de Mexico"),
                PlantaModel(nombre="Planta Sur", ubicacion="Guadalajara"),
                PlantaModel(nombre="Planta Este", ubicacion="Monterrey"),
            ]
            db.add_all(plantas)
            db.commit()
            logger.info("Seeded plantas")

        if db.query(CentroModel).count() == 0:
            centros = [
                CentroModel(nombre="Centro Distribucion Norte", ubicacion="Ciudad de Mexico"),
                CentroModel(nombre="Centro Distribucion Sur", ubicacion="Guadalajara"),
                CentroModel(nombre="Centro Distribucion Este", ubicacion="Monterrey"),
            ]
            db.add_all(centros)
            db.commit()
            logger.info("Seeded centros")

        if db.query(OrdenModel).count() == 0:
            plantas = db.query(PlantaModel).all()
            centros = db.query(CentroModel).all()
            if plantas and centros:
                ordenes = [
                    OrdenModel(
                        planta_id=plantas[0].id,
                        centro_id=centros[0].id,
                        producto="Producto A",
                        cantidad=100,
                        estado="completada",
                        fecha_creacion=datetime.utcnow(),
                        fecha_actualizacion=datetime.utcnow()
                    ),
                    OrdenModel(
                        planta_id=plantas[1].id,
                        centro_id=centros[1].id,
                        producto="Producto B",
                        cantidad=200,
                        estado="pendiente",
                        fecha_creacion=datetime.utcnow(),
                        fecha_actualizacion=datetime.utcnow()
                    ),
                    OrdenModel(
                        planta_id=plantas[2].id,
                        centro_id=centros[2].id,
                        producto="Producto C",
                        cantidad=150,
                        estado="completada",
                        fecha_creacion=datetime.utcnow(),
                        fecha_actualizacion=datetime.utcnow()
                    ),
                ]
                db.add_all(ordenes)
                db.commit()
                logger.info("Seeded ordenes")
    finally:
        db.close()


@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Starting Distrovis API...")
    Base.metadata.create_all(bind=engine)
    logger.info("Database tables created")
    seed_data()
    logger.info("Application startup complete")
    yield
    logger.info("Shutting down Distrovis API...")


app = FastAPI(
    title="Distrovis API",
    description="API for Distrovis distribution management system",
    version=VERSION,
    lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(plantas_router)
app.include_router(centros_router)
app.include_router(ordenes_router)
app.include_router(kpis_router)


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "distrovis-api",
        "version": VERSION
    }


@app.get("/")
def root():
    return {"message": "Distrovis API", "version": VERSION, "docs": "/docs"}