from pydantic import BaseModel
from datetime import datetime
from typing import List


class Planta(BaseModel):
    id: int
    nombre: str
    ubicacion: str


class PlantaCreate(BaseModel):
    nombre: str
    ubicacion: str


class Centro(BaseModel):
    id: int
    nombre: str
    ubicacion: str


class CentroCreate(BaseModel):
    nombre: str
    ubicacion: str


class Orden(BaseModel):
    id: int
    planta_id: int
    centro_id: int
    producto: str
    cantidad: int
    estado: str
    fecha_creacion: datetime
    fecha_actualizacion: datetime


class OrdenCreate(BaseModel):
    planta_id: int
    centro_id: int
    producto: str
    cantidad: int
    estado: str


class KPIResponse(BaseModel):
    total_ordenes: int
    total_productos: int
    ordenes_pendientes: int
    ordenes_completadas: int