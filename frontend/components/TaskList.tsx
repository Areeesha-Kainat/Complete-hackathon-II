"use client";
import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { getTasks } from "@/lib/api";

interface TaskListProps {
  userId: string;
}

export default function TaskList({ userId }: TaskListProps) {
  const [tasks, setTasks] = useState<any[]>([]);

  const fetchTasks = async () => {
    const data = await getTasks(userId);
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            userId={userId}
            onTaskUpdated={fetchTasks}
          />
        ))
      )}
    </div>
  );
}