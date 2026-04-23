from datetime import datetime
from app.models import Planta as PlantaModel, Centro as CentroModel, Orden as OrdenModel


def test_planta_model_fields():
    planta = PlantaModel(nombre="Planta Test", ubicacion="Test City")
    assert planta.nombre == "Planta Test"
    assert planta.ubicacion == "Test City"
    assert planta.id is None


def test_centro_model_fields():
    centro = CentroModel(nombre="Centro Test", ubicacion="Test City")
    assert centro.nombre == "Centro Test"
    assert centro.ubicacion == "Test City"
    assert centro.id is None


def test_orden_model_fields():
    orden = OrdenModel(
        planta_id=1,
        centro_id=2,
        producto="Producto Test",
        cantidad=100,
        estado="pendiente"
    )
    assert orden.planta_id == 1
    assert orden.centro_id == 2
    assert orden.producto == "Producto Test"
    assert orden.cantidad == 100
    assert orden.estado == "pendiente"
    assert orden.id is None


def test_orden_model_with_dates():
    now = datetime.utcnow()
    orden = OrdenModel(
        planta_id=1,
        centro_id=2,
        producto="Producto Test",
        cantidad=100,
        estado="completada",
        fecha_creacion=now,
        fecha_actualizacion=now
    )
    assert orden.fecha_creacion == now
    assert orden.fecha_actualizacion == now