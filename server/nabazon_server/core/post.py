from pydantic import BaseModel
from datetime import datetime
from typing import Optional


# BaseModel is kind of dataclass decorator which creates (almost) vanilla python dataclasses with input data parsing
# and validation
class Post(BaseModel):
    id: str
    title: str
    description: str
    insertion: Optional[datetime]
    last_update: Optional[datetime]