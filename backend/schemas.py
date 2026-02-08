# schemas.py
from pydantic import BaseModel

# User
class UserCreate(BaseModel):
    username: str
    email: str
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

# Task
class TaskCreate(BaseModel):
    title: str
    priority: str = "Medium"
    category: str = "General"

class TaskUpdate(BaseModel):
    title: str | None = None
    completed: bool | None = None
    priority: str | None = None
    category: str | None = None