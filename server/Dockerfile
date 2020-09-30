FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

ENV POETRY_VERSION=1.0.5

WORKDIR /app/hoshi

COPY poetry.lock pyproject.toml ./

COPY ./hoshi ./

RUN pip install "poetry==$POETRY_VERSION"

RUN poetry config virtualenvs.create false && \
    poetry install --no-dev
