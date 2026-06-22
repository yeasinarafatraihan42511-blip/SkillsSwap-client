"use client";

export default function ManageTasksPage() {
  const tasks = [
    {
      id: 1,
      title: "React Website",
      status: "Open",
      client: "Yeasin",
    },
    {
      id: 2,
      title: "Mobile App Design",
      status: "In Progress",
      client: "John",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Manage Tasks
      </h1>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">
                Task
              </th>

              <th className="p-4 text-left">
                Client
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
              <tr key={task.id} className="border-t">
                <td className="p-4">
                  {task.title}
                </td>

                <td className="p-4">
                  {task.client}
                </td>

                <td className="p-4">
                  {task.status}
                </td>

                <td className="p-4">
                  <button className="px-3 py-1 rounded bg-red-600 text-white">
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