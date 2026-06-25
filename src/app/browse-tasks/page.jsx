"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BrowseTasksPage() {
const [tasks, setTasks] = useState([]);
const [loading, setLoading] = useState(true);

const [page, setPage] = useState(1);
const [totalPages, setTotalPages] =
useState(1);

useEffect(() => {
setLoading(true);


fetch(
  `http://localhost:5000/tasks?page=${page}&limit=6`
)
  .then((res) => res.json())
  .then((data) => {
    setTasks(data.tasks);
    setTotalPages(data.totalPages);
    setLoading(false);
  })
  .catch(() => {
    setLoading(false);
  });


}, [page]);

if (loading) {
return ( <div className="flex justify-center py-20"> <span className="loading loading-spinner loading-lg"></span> </div>
);
}

return ( <div className="max-w-7xl mx-auto">


  <div className="mb-8">
    <h1 className="text-4xl font-bold">
      Browse Tasks
    </h1>

    <p className="text-gray-500 mt-2">
      Find freelance opportunities.
    </p>
  </div>

  {tasks.length === 0 ? (
    <div className="bg-white border rounded-2xl p-10 text-center">
      No tasks found.
    </div>
  ) : (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-white border rounded-3xl p-6 shadow-sm hover:shadow-lg transition"
          >

            <div className="flex justify-between items-center">

              <h2 className="text-xl font-bold">
                {task.title}
              </h2>

              <span className="badge badge-success">
                {task.status}
              </span>

            </div>

            <div className="mt-4 space-y-2 text-sm">

              <p>
                <strong>Category:</strong>{" "}
                {task.category}
              </p>

              <p>
                <strong>Budget:</strong> $
                {task.budget}
              </p>

              <p>
                <strong>Deadline:</strong>{" "}
                {task.deadline}
              </p>

              <p>
                <strong>Client:</strong>{" "}
                {task.clientName}
              </p>

            </div>

            <Link
              href={`/dashboard/freelancer/tasks/${task._id}`}
              className="btn btn-primary w-full mt-6"
            >
              View Details
            </Link>

          </div>
        ))}

      </div>

      <div className="flex justify-center gap-2 mt-10 flex-wrap">

        <button
          disabled={page === 1}
          onClick={() =>
            setPage(page - 1)
          }
          className="btn btn-outline"
        >
          Previous
        </button>

        {[...Array(totalPages)].map(
          (_, index) => (
            <button
              key={index}
              onClick={() =>
                setPage(index + 1)
              }
              className={`btn ${
                page === index + 1
                  ? "btn-primary"
                  : "btn-outline"
              }`}
            >
              {index + 1}
            </button>
          )
        )}

        <button
          disabled={
            page === totalPages
          }
          onClick={() =>
            setPage(page + 1)
          }
          className="btn btn-outline"
        >
          Next
        </button>

      </div>
    </>
  )}
</div>


);
}
