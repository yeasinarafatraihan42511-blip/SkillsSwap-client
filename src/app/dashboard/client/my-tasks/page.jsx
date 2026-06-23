"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function MyTasksPage() {
  const [tasks, setTasks] = useState([]);

  const { data: session } = authClient.useSession();

  useEffect(() => {
    if (!session?.user?.email) return;

    fetch(
      `http://localhost:5000/my-tasks?email=${session.user.email}`
    )
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [session]);

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Are you sure?"
    );

    if (!confirmDelete) return;

    const res = await fetch(
      `http://localhost:5000/tasks/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();

    if (data.deletedCount > 0) {
      setTasks(
        tasks.filter(
          (task) => task._id !== id
        )
      );

      alert("Task deleted");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        My Tasks
      </h1>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">
                Title
              </th>

              <th className="p-4 text-left">
                Budget
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr
                key={task._id}
                className="border-t"
              >
                <td className="p-4">
                  {task.title}
                </td>

                <td className="p-4">
                  ${task.budget}
                </td>

                <td className="p-4 capitalize">
                  {task.status}
                </td>

                <td className="p-4">
                  <button
                    onClick={() =>
                      handleDelete(task._id)
                    }
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}