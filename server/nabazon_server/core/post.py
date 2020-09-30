from pydantic import BaseModel
from datetime import datetime


# BaseModel is kind of dataclass decorator which creates (almost) vanilla python dataclasses with input data parsing
# and validation
# Reminds lombok library
class Post(BaseModel):
    id: str
    title: str
    description: str
    insertion: datetime
    last_update: datetime