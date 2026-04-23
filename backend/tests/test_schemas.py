from app.schemas import PlantaCreate, CentroCreate, OrdenCreate, KPIResponse


def test_planta_create_schema():
    planta = PlantaCreate(nombre="Planta Test", ubicacion="Test City")
    assert planta.nombre == "Planta Test"
    assert planta.ubicacion == "Test City"
    assert planta.dict() == {"nombre": "Planta Test", "ubicacion": "Test City"}


def test_centro_create_schema():
    centro = CentroCreate(nombre="Centro Test", ubicacion="Test City")
    assert centro.nombre == "Centro Test"
    assert centro.ubicacion == "Test City"
    assert centro.dict() == {"nombre": "Centro Test", "ubicacion": "Test City"}


def test_orden_create_schema():
    orden = OrdenCreate(
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


def test_kpi_response_schema():
    kpi = KPIResponse(
        total_ordenes=10,
        total_productos=500,
        ordenes_pendientes=3,
        ordenes_completadas=7
    )
    assert kpi.total_ordenes == 10
    assert kpi.total_productos == 500
    assert kpi.ordenes_pendientes == 3
    assert kpi.ordenes_completadas == 7