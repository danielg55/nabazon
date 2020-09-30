FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

ENV POETRY_VERSION=1.0.5

WORKDIR /app/nabazon_server

COPY poetry.lock pyproject.toml ./

COPY ./nabazon_server ./

RUN pip install "poetry==$POETRY_VERSION"

RUN poetry config virtualenvs.create false && \
    poetry install --no-dev
