# routes.py
from fastapi import APIRouter, HTTPException
from db import create_user, authenticate_user, get_tasks_for_user, add_task, update_task, delete_task
from schemas import UserCreate, UserLogin, TaskCreate, TaskUpdate

router = APIRouter()

# ------------------------------
# Auth Routes
# ------------------------------
@router.post("/signup")
def signup(user: UserCreate):
    new_user = create_user(user.username, user.email, user.password)
    if not new_user:
        raise HTTPException(status_code=400, detail="Email already exists")
    return {"id": new_user["id"], "username": new_user["username"], "email": new_user["email"]}

@router.post("/login")
def login(user: UserLogin):
    auth_user = authenticate_user(user.email, user.password)
    if not auth_user:
        raise HTTPException(status_code=401, detail="Invalid email or password")
    return {"id": auth_user["id"], "username": auth_user["username"], "email": auth_user["email"]}

# ------------------------------
# Task Routes
# ------------------------------
@router.get("/tasks/{user_id}")
def read_tasks(user_id: str):
    return get_tasks_for_user(user_id)

@router.post("/tasks/{user_id}")
def create_task(user_id: str, task: TaskCreate):
    return add_task(task.title, task.priority, task.category, user_id)

@router.put("/tasks/{user_id}/{task_id}")
def edit_task(user_id: str, task_id: str, updates: TaskUpdate):
    updated = update_task(task_id, user_id, updates.title, updates.completed, updates.priority, updates.category)
    if not updated:
        raise HTTPException(status_code=404, detail="Task not found")
    return updated

@router.delete("/tasks/{user_id}/{task_id}")
def remove_task(user_id: str, task_id: str):
    delete_task(task_id, user_id)
    return {"message": "Task deleted"}