"use client";
import { updateTask, deleteTask } from "@/lib/api";
import { useState } from "react";

interface TaskItemProps {
  userId: string;
  task: any;
  onTaskUpdated?: () => void;
}

export default function TaskItem({ userId, task, onTaskUpdated }: TaskItemProps) {
  const [completed, setCompleted] = useState(task.completed);

  const toggleComplete = async () => {
    await updateTask(userId, task.id, { completed: !completed });
    setCompleted(!completed);
    if (onTaskUpdated) onTaskUpdated();
  };

  const handleDelete = async () => {
    await deleteTask(userId, task.id);
    if (onTaskUpdated) onTaskUpdated();
  };

  return (
    <div className="flex justify-between items-center p-2 border-b">
      <div>
        <p className={`font-semibold ${completed ? "line-through text-gray-400" : ""}`}>
          {task.title}
        </p>
        <p className="text-sm text-gray-500">{task.category} - {task.priority}</p>
      </div>
      <div className="flex gap-2">
        <button
          className={`px-2 py-1 rounded ${completed ? "bg-yellow-500" : "bg-green-500"} text-white`}
          onClick={toggleComplete}
        >
          {completed ? "Undo" : "Done"}
        </button>
        <button
          className="px-2 py-1 rounded bg-red-500 text-white"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}