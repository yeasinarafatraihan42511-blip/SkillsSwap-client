"use client";

export default function BrowseTasksPage() {
  const tasks = [
    {
      id: 1,
      title: "Build React Website",
      category: "Web Development",
      budget: 500,
      deadline: "30 Jun 2026",
      client: "Yeasin",
    },
    {
      id: 2,
      title: "UI Design",
      category: "Design",
      budget: 250,
      deadline: "5 Jul 2026",
      client: "John",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Browse Tasks
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white border rounded-xl p-5"
          >
            <h2 className="text-xl font-semibold">
              {task.title}
            </h2>

            <div className="mt-4 space-y-2 text-sm">
              <p>
                <strong>Category:</strong> {task.category}
              </p>

              <p>
                <strong>Budget:</strong> ${task.budget}
              </p>

              <p>
                <strong>Deadline:</strong> {task.deadline}
              </p>

              <p>
                <strong>Client:</strong> {task.client}
              </p>
            </div>

            <button className="mt-5 px-4 py-2 rounded-lg bg-blue-600 text-white">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}