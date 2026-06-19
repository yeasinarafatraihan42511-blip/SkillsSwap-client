export default function FeaturedTasks() {
  const tasks = [
    {
      id: 1,
      title: "Landing Page Design",
      client: "John Doe",
      category: "Design",
      budget: 150,
      deadline: "25 June 2026",
    },
    {
      id: 2,
      title: "Blog Article Writing",
      client: "Sarah Smith",
      category: "Writing",
      budget: 80,
      deadline: "30 June 2026",
    },
    {
      id: 3,
      title: "Fix React Bug",
      client: "Alex Johnson",
      category: "Development",
      budget: 120,
      deadline: "28 June 2026",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Featured Tasks</h2>
        <p className="text-gray-500 mt-3">
          Latest opportunities posted by clients
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="rounded-2xl border p-6 shadow-sm hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold">{task.title}</h3>

            <div className="mt-4 space-y-2">
              <p>Client: {task.client}</p>
              <p>Category: {task.category}</p>
              <p>Budget: ${task.budget}</p>
              <p>Deadline: {task.deadline}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}