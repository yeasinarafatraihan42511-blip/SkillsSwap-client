"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BrowseTasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  fetch("http://localhost:5000/tasks")
    .then((res) => res.json())
    .then((data) => {
      console.log("Tasks:", data);
      setTasks(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Fetch Error:", error);
      setLoading(false);
    });
}, []);
  if (loading) {
    return (
      <div className="text-center py-20">
        Loading tasks...
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Browse Tasks
        </h1>

        <p className="text-gray-500 mt-2">
          Explore available freelance jobs.
        </p>
      </div>

      {tasks.length === 0 ? (
        <div className="bg-white border rounded-xl p-10 text-center">
          No open tasks found.
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-bold">
                {task.title}
              </h2>

              <div className="mt-4 space-y-2 text-sm">
                <p>
                  <span className="font-semibold">
                    Category:
                  </span>{" "}
                  {task.category}
                </p>

                <p>
                  <span className="font-semibold">
                    Budget:
                  </span>{" "}
                  ${task.budget}
                </p>

                <p>
                  <span className="font-semibold">
                    Deadline:
                  </span>{" "}
                  {task.deadline}
                </p>

                <p>
                  <span className="font-semibold">
                    Client:
                  </span>{" "}
                  {task.clientName}
                </p>

                <p>
                  <span className="font-semibold">
                    Status:
                  </span>{" "}
                  <span className="capitalize text-green-600">
                    {task.status}
                  </span>
                </p>
              </div>

              <Link
                href={`/dashboard/freelancer/tasks/${task._id}`}
                className="inline-block mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}