
export default function FeaturedTasks() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-24">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-black">
          Latest Featured Tasks
        </h2>

        <p className="text-default-500 mt-3">
          Browse the latest opportunities posted by clients.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <Card key={task.id} className="hover:scale-[1.02] transition-all">
            <CardBody>
              <h3 className="text-xl font-bold">
                {task.title}
              </h3>

              <p className="mt-3">
                Client: {task.client}
              </p>

              <p>
                Category: {task.category}
              </p>

              <p>
                Budget: ${task.budget}
              </p>

              <p>
                Deadline: {task.deadline}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}