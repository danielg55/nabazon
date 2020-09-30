from fastapi.testclient import TestClient
from nabazon_server.main import app


class TestNabazonServer:
    client = TestClient(app)

    def test_read_main(self):
        response = self.client.get("/health")
        assert response.status_code == 200
        assert response.json() == {"Hello": "World"}
