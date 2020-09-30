import uvicorn
from fastapi import FastAPI
from starlette_prometheus import metrics, PrometheusMiddleware

from nabazon_server.config_reader import load_yml_from_file
from nabazon_server.core.location_data import Location

config = load_yml_from_file()

app = FastAPI()
app.add_middleware(PrometheusMiddleware)
app.add_route("/metrics", metrics)


@app.get("/health")
def read_root():
    return {"Hello": "World"}

@app.get("/config")
def read_root():
    return config

@app.post("/psychic")
async def psychic(location: Location):
    return location


def main():
    uvicorn.run(app, host=config["dev-server"]["ip"], port=config["dev-server"]["port"])


if __name__ == '__main__':
    main()
