# db.py
from typing import List
from uuid import uuid4

# In-memory storage
users = []  # Each user: {id, username, email, password}
tasks = []  # Each task: {id, title, completed, priority, category, owner_id}

# ------------------------------
# User Functions
# ------------------------------
def create_user(username, email, password):
    # Check if email exists
    for u in users:
        if u["email"] == email:
            return None
    user = {"id": str(uuid4()), "username": username, "email": email, "password": password}
    users.append(user)
    return user

def authenticate_user(email, password):
    for u in users:
        if u["email"] == email and u["password"] == password:
            return u
    return None

# ------------------------------
# Task Functions
# ------------------------------
def get_tasks_for_user(user_id):
    return [t for t in tasks if t["owner_id"] == user_id]

def add_task(title, priority, category, owner_id):
    task = {
        "id": str(uuid4()),
        "title": title,
        "priority": priority,
        "category": category,
        "completed": False,
        "owner_id": owner_id
    }
    tasks.append(task)
    return task

def update_task(task_id, owner_id, title=None, completed=None, priority=None, category=None):
    for t in tasks:
        if t["id"] == task_id and t["owner_id"] == owner_id:
            if title is not None:
                t["title"] = title
            if completed is not None:
                t["completed"] = completed
            if priority is not None:
                t["priority"] = priority
            if category is not None:
                t["category"] = category
            return t
    return None

def delete_task(task_id, owner_id):
    global tasks
    tasks = [t for t in tasks if not (t["id"] == task_id and t["owner_id"] == owner_id)]