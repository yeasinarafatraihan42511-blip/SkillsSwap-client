"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FeaturedTasks() {
  const tasks = [
    {
      id: 1,
      title: "Landing Page Design",
      client: "John Doe",
      category: "UI/UX Design",
      budget: 150,
      deadline: "25 June 2026",
    },
    {
      id: 2,
      title: "Blog Article Writing",
      client: "Sarah Smith",
      category: "Content Writing",
      budget: 80,
      deadline: "30 June 2026",
    },
    {
      id: 3,
      title: "Fix React Bug",
      client: "Alex Johnson",
      category: "Web Development",
      budget: 120,
      deadline: "28 June 2026",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 h-72 w-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-72 w-72 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full border text-sm font-medium mb-4">
            Featured Opportunities
          </span>

          <h2 className="text-4xl md:text-5xl font-black">
            Latest Freelance Tasks
          </h2>

          <p className="text-default-500 mt-4 max-w-2xl mx-auto">
            Discover high-quality projects posted by clients and start earning today.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {tasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border bg-white/70 backdrop-blur-xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/5 to-secondary/5"></div>

              <div className="relative">

                <div className="flex items-center justify-between mb-5">
                  <span className="badge badge-primary">
                    {task.category}
                  </span>

                  <span className="text-green-600 font-bold">
                    ${task.budget}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {task.title}
                </h3>

                <div className="space-y-2 text-sm text-default-500">
                  <p>
                    👤 Client: {task.client}
                  </p>

                  <p>
                    📅 Deadline: {task.deadline}
                  </p>
                </div>

                <div className="mt-6 flex gap-3">
                  <Link
                    href="/browse-tasks"
                    className="btn btn-primary flex-1"
                  >
                    View Task
                  </Link>

                  <button className="btn btn-outline">
                    Save
                  </button>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link
            href="/browse-tasks"
            className="btn btn-primary btn-lg"
          >
            Browse All Tasks
          </Link>
        </motion.div>

      </div>
    </section>
  );
}