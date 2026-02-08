const API_URL = "http://127.0.0.1:8000";

export async function signup(data: {username:string, email:string, password:string}) {
    const res = await fetch(`${API_URL}/signup`, {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(data)});
    return res.json();
}

export async function login(data: {email:string, password:string}) {
    const res = await fetch(`${API_URL}/login`, {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(data)});
    return res.json();
}

export async function getTasks(userId:string){
    const res = await fetch(`${API_URL}/tasks/${userId}`);
    return res.json();
}

export async function addTask(userId:string, task:any){
    const res = await fetch(`${API_URL}/tasks/${userId}`, {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(task)});
    return res.json();
}

export async function updateTask(userId:string, taskId:string, updates:any){
    const res = await fetch(`${API_URL}/tasks/${userId}/${taskId}`, {method:"PUT", headers:{"Content-Type":"application/json"}, body:JSON.stringify(updates)});
    return res.json();
}

export async function deleteTask(userId:string, taskId:string){
    const res = await fetch(`${API_URL}/tasks/${userId}/${taskId}`, {method:"DELETE"});
    return res.json();
}