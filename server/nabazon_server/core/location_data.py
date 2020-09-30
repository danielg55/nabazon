from pydantic import BaseModel


# BaseModel is kind of dataclass decorator which creates (almost) vanilla python dataclasses with input data parsing
# and validation
# Reminds lombok library
class Post(BaseModel):
    id: str
    title: str
    description: str
