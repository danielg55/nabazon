from fastapi import FastAPI
from uvicorn import run

app = FastAPI()

@app.get("/")
def hello():
    return {"hello": "world"}

def main():
    run(app, host='0.0.0.0', port=8080)