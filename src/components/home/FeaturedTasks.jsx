// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function FeaturedTasks() {
//   const tasks = [
//     {
//       id: 1,
//       title: "Landing Page Design",
//       client: "John Doe",
//       category: "UI/UX Design",
//       budget: 150,
//       deadline: "25 June 2026",
//     },
//     {
//       id: 2,
//       title: "Blog Article Writing",
//       client: "Sarah Smith",
//       category: "Content Writing",
//       budget: 80,
//       deadline: "30 June 2026",
//     },
//     {
//       id: 3,
//       title: "Fix React Bug",
//       client: "Alex Johnson",
//       category: "Web Development",
//       budget: 120,
//       deadline: "28 June 2026",
//     },
//   ];

//   return (
//     <section className="relative py-24 overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-10 left-10 h-72 w-72 bg-primary/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 right-10 h-72 w-72 bg-secondary/10 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-5">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: .6 }}
//           viewport={{ once: true }}
//           className="text-center mb-14"
//         >
//           <span className="inline-block px-4 py-2 rounded-full border text-sm font-medium mb-4">
//             Featured Opportunities
//           </span>

//           <h2 className="text-4xl md:text-5xl font-black">
//             Latest Freelance Tasks
//           </h2>

//           <p className="text-default-500 mt-4 max-w-2xl mx-auto">
//             Discover high-quality projects posted by clients and start earning today.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

//           {tasks.map((task, index) => (
//             <motion.div
//               key={task.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.1,
//               }}
//               viewport={{ once: true }}
//               className="group relative overflow-hidden rounded-3xl border bg-white/70 backdrop-blur-xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300"
//             >
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/5 to-secondary/5"></div>

//               <div className="relative">

//                 <div className="flex items-center justify-between mb-5">
//                   <span className="badge badge-primary">
//                     {task.category}
//                   </span>

//                   <span className="text-green-600 font-bold">
//                     ${task.budget}
//                   </span>
//                 </div>

//                 <h3 className="text-2xl font-bold mb-3">
//                   {task.title}
//                 </h3>

//                 <div className="space-y-2 text-sm text-default-500">
//                   <p>
//                     👤 Client: {task.client}
//                   </p>

//                   <p>
//                     📅 Deadline: {task.deadline}
//                   </p>
//                 </div>

//                 <div className="mt-6 flex gap-3">
//                   <Link
//                     href="/browse-tasks"
//                     className="btn btn-primary flex-1"
//                   >
//                     View Task
//                   </Link>

//                   <button className="btn btn-outline">
//                     Save
//                   </button>
//                 </div>

//               </div>
//             </motion.div>
//           ))}

//         </div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: .3 }}
//           viewport={{ once: true }}
//           className="text-center mt-14"
//         >
//           <Link
//             href="/browse-tasks"
//             className="btn btn-primary btn-lg"
//           >
//             Browse All Tasks
//           </Link>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturedTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/featured-tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-24">
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute -top-20 left-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"></div>

      </div>

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-16"
        >

          <span className="inline-flex items-center px-5 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold border border-blue-100">

            Latest Opportunities

          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black">

            Featured Tasks

          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto leading-7">

            Browse the newest freelance jobs posted by clients and start earning today.

          </p>

        </motion.div>

        {tasks.length === 0 ? (

          <div className="bg-white rounded-3xl border p-16 text-center shadow-sm">

            <h3 className="text-2xl font-bold">

              No Open Tasks Available

            </h3>

            <p className="mt-3 text-slate-500">

              Clients haven't posted any tasks yet.

            </p>

          </div>

        ) : (

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {tasks.map((task, index) => (

              <motion.div
                key={task._id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .1,
                }}
                className="group rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 duration-300 overflow-hidden"
              >

                {/* Top */}

                <div className="h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-500"></div>

                <div className="p-7">

                  <div className="flex justify-between items-center mb-5">

                    <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">

                      {task.category}

                    </span>

                    <span className="text-green-600 font-extrabold text-xl">

                      ${task.budget}

                    </span>

                  </div>

                  <h3 className="text-2xl font-bold line-clamp-2 mb-6">

                    {task.title}

                  </h3>

                  <div className="space-y-4">

                    <div className="flex justify-between">

                      <span className="text-slate-500">

                        Client

                      </span>

                      <span className="font-semibold">

                        {task.clientName}

                      </span>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-slate-500">

                        Category

                      </span>

                      <span className="font-semibold">

                        {task.category}

                      </span>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-slate-500">

                        Budget

                      </span>

                      <span className="font-bold text-green-600">

                        ${task.budget}

                      </span>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-slate-500">

                        Deadline

                      </span>

                      <span className="font-semibold">

                        {new Date(task.deadline).toLocaleDateString()}

                      </span>

                    </div>

                  </div>

                  <Link
                    href={`/dashboard/freelancer/tasks/${task._id}`}
                    className="mt-8 w-full inline-flex justify-center items-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3 hover:scale-[1.02] transition-all"
                  >

                    View Details →

                  </Link>

                </div>

              </motion.div>

            ))}

          </div>

        )}

        <div className="text-center mt-14">

          <Link
            href="/browse-tasks"
            className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 bg-slate-900 text-white font-semibold hover:bg-blue-600 duration-300"
          >

            Browse All Tasks →

          </Link>

        </div>

      </div>

    </section>
  );
}