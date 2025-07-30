from pydantic import BaseModel

class LegalQuery(BaseModel):
    query: str
    jurisdiction: str
