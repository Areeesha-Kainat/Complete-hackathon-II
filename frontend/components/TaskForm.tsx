"use client";
import { useState } from "react";
import { addTask } from "@/lib/api";

interface TaskFormProps {
  userId: string;
  onTaskAdded?: () => void;
}

export default function TaskForm({ userId, onTaskAdded }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");

  const handleAdd = async () => {
    if (!title) return alert("Enter a task");
    await addTask(userId, { title, priority, category });
    setTitle("");
    setPriority("Medium");
    setCategory("General");
    if (onTaskAdded) onTaskAdded(); // Safely call callback
  };

  return (
    <div className="flex flex-col gap-2 mb-4">
      <input
        className="border p-2 rounded"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="flex gap-2">
        <select
          className="border p-2 rounded"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <input
          className="border p-2 rounded"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleAdd}
      >
        Add Task
      </button>
    </div>
  );
}