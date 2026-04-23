from app.routers.centros import router as centros_router


def test_read_centros_empty(client):
    response = client.get("/api/centros")
    assert response.status_code == 200
    assert isinstance(response.json(), list)


def test_create_centro_endpoint(client):
    response = client.post("/api/centros", json={
        "nombre": "Centro Endpoint",
        "ubicacion": "Endpoint City"
    })
    assert response.status_code == 200
    data = response.json()
    assert data["nombre"] == "Centro Endpoint"
    assert data["ubicacion"] == "Endpoint City"
    assert "id" in data