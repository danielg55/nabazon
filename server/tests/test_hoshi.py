from fastapi.testclient import TestClient
from hoshi.main import app


class TestHoshi:
    client = TestClient(app)

    def test_read_main(self):
        response = self.client.get("/health")
        assert response.status_code == 200
        assert response.json() == {"Hello": "World"}
