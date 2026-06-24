"use client";

import { useEffect, useState } from "react";

export default function AdminTasksPage() {
const [tasks, setTasks] = useState([]);

useEffect(() => {
fetch("http://localhost:5000/tasks")
.then((res) => res.json())
.then((data) => setTasks(data));
}, []);

return ( <div> <h1 className="text-3xl font-bold mb-8">
Manage Tasks </h1>


  <div className="grid gap-6">
    {tasks.map((task) => (
      <div
        key={task._id}
        className="bg-white border rounded-3xl p-6"
      >
        <h2 className="font-bold text-xl">
          {task.title}
        </h2>

        <p className="mt-2">
          {task.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-4">
          <span>
            Budget: ${task.budget}
          </span>

          <span>
            Status: {task.status}
          </span>

          <span>
            {task.category}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>


);
}
