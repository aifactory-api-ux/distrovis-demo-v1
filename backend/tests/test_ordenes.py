from app.routers.ordenes import router as ordenes_router


def test_read_ordenes_empty(client):
    response = client.get("/api/ordenes")
    assert response.status_code == 200
    assert isinstance(response.json(), list)


def test_create_orden_endpoint(client):
    planta_response = client.post("/api/plantas", json={
        "nombre": "Planta Orden",
        "ubicacion": "Orden City"
    })
    planta_id = planta_response.json()["id"]

    centro_response = client.post("/api/centros", json={
        "nombre": "Centro Orden",
        "ubicacion": "Orden City"
    })
    centro_id = centro_response.json()["id"]

    response = client.post("/api/ordenes", json={
        "planta_id": planta_id,
        "centro_id": centro_id,
        "producto": "Producto Orden",
        "cantidad": 100,
        "estado": "pendiente"
    })
    assert response.status_code == 200
    data = response.json()
    assert data["producto"] == "Producto Orden"
    assert data["cantidad"] == 100
    assert data["estado"] == "pendiente"