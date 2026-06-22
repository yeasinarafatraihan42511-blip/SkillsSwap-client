"use client";

export default function MyTasksPage() {
  const tasks = [
    {
      _id: "1",
      title: "Build React Website",
      category: "Web Development",
      budget: 500,
      status: "Open",
    },
    {
      _id: "2",
      title: "Mobile App UI Design",
      category: "UI/UX Design",
      budget: 300,
      status: "In Progress",
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">My Tasks</h1>
        <p className="text-gray-500 mt-2">
          View and manage all your posted tasks.
        </p>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="text-left p-4">Title</th>
              <th className="text-left p-4">Category</th>
              <th className="text-left p-4">Budget</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr key={task._id} className="border-t">
                <td className="p-4">{task.title}</td>
                <td className="p-4">{task.category}</td>
                <td className="p-4">${task.budget}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      task.status === "Open"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {task.status}
                  </span>
                </td>

                <td className="p-4 flex gap-2">
                  <button className="px-3 py-1 rounded bg-blue-500 text-white">
                    Edit
                  </button>

                  <button className="px-3 py-1 rounded bg-red-500 text-white">
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