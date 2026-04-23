from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

from app.database import Base


class Planta(Base):
    __tablename__ = "plantas"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    ubicacion = Column(String, nullable=False)

    ordenes = relationship("Orden", back_populates="planta")


class Centro(Base):
    __tablename__ = "centros"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    ubicacion = Column(String, nullable=False)

    ordenes = relationship("Orden", back_populates="centro")


class Orden(Base):
    __tablename__ = "ordenes"

    id = Column(Integer, primary_key=True, index=True)
    planta_id = Column(Integer, ForeignKey("plantas.id"), nullable=False)
    centro_id = Column(Integer, ForeignKey("centros.id"), nullable=False)
    producto = Column(String, nullable=False)
    cantidad = Column(Integer, nullable=False)
    estado = Column(String, nullable=False)
    fecha_creacion = Column(DateTime, default=datetime.utcnow)
    fecha_actualizacion = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    planta = relationship("Planta", back_populates="ordenes")
    centro = relationship("Centro", back_populates="ordenes")