"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BrowseTasksPage() {
const [tasks, setTasks] = useState([]);
const [filteredTasks, setFilteredTasks] =
useState([]);

const [loading, setLoading] =
useState(true);

const [search, setSearch] =
useState("");

const [category, setCategory] =
useState("All");

const [page, setPage] =
useState(1);

const [totalPages, setTotalPages] =
useState(1);

useEffect(() => {
setLoading(true);


fetch(
  `http://localhost:5000/tasks?page=${page}&limit=6`
)
  .then((res) => res.json())
  .then((data) => {
    const taskData =
      data.tasks || [];

    setTasks(taskData);
    setFilteredTasks(taskData);

    setTotalPages(
      data.totalPages || 1
    );

    setLoading(false);
  })
  .catch((error) => {
    console.log(error);
    setLoading(false);
  });


}, [page]);

useEffect(() => {
let result = [...tasks];


if (search) {
  result = result.filter((task) =>
    task.title
      ?.toLowerCase()
      .includes(
        search.toLowerCase()
      )
  );
}

if (category !== "All") {
  result = result.filter(
    (task) =>
      task.category === category
  );
}

setFilteredTasks(result);


}, [search, category, tasks]);

if (loading) {
return ( <div className="flex justify-center py-20"> <span className="loading loading-spinner loading-lg"></span> </div>
);
}

return ( <div className="max-w-7xl mx-auto px-4">


  <div className="mb-10">
    <h1 className="text-4xl md:text-5xl font-bold">
      Browse Tasks
    </h1>

    <p className="text-slate-500 mt-3">
      Discover freelance jobs and
      submit winning proposals.
    </p>
  </div>

  {/* Search & Filter */}

  <div className="bg-white rounded-3xl border p-5 shadow-sm mb-8">

    <div className="grid md:grid-cols-3 gap-4">

      <input
        type="text"
        placeholder="Search task title..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        className="input input-bordered w-full"
      />

      <select
        value={category}
        onChange={(e) =>
          setCategory(
            e.target.value
          )
        }
        className="select select-bordered w-full"
      >
        <option value="All">
          All Categories
        </option>

        <option value="Web Development">
          Web Development
        </option>

        <option value="Graphic Design">
          Graphic Design
        </option>

        <option value="UI/UX Design">
          UI/UX Design
        </option>

        <option value="Content Writing">
          Content Writing
        </option>

        <option value="Mobile App">
          Mobile App
        </option>
      </select>

      <div className="flex items-center justify-center rounded-2xl bg-slate-100 font-semibold">
        {filteredTasks.length} Tasks
      </div>

    </div>

  </div>

  {filteredTasks.length === 0 ? (
    <div className="bg-white rounded-3xl border p-12 text-center">
      <h2 className="text-2xl font-semibold">
        No Tasks Found
      </h2>

      <p className="text-gray-500 mt-2">
        Try changing search or
        category.
      </p>
    </div>
  ) : (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {filteredTasks.map(
          (task) => (
            <div
              key={task._id}
              className="bg-white border rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              <div className="flex justify-between items-start gap-3">

                <h2 className="text-xl font-bold">
                  {task.title}
                </h2>

                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  {task.status}
                </span>

              </div>

              <div className="grid grid-cols-2 gap-3 mt-5">

                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500">
                    Budget
                  </p>

                  <h3 className="font-bold text-green-600">
                    $
                    {task.budget}
                  </h3>
                </div>

                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500">
                    Category
                  </p>

                  <h3 className="font-medium text-sm">
                    {task.category}
                  </h3>
                </div>

                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500">
                    Deadline
                  </p>

                  <h3 className="font-medium text-sm">
                    {task.deadline}
                  </h3>
                </div>

                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500">
                    Client
                  </p>

                  <h3 className="font-medium text-sm">
                    {task.clientName}
                  </h3>
                </div>

              </div>

              <Link
                href={`/dashboard/freelancer/tasks/${task._id}`}
                className="mt-6 inline-flex justify-center items-center w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-3 font-semibold transition"
              >
                View Details →
              </Link>

            </div>
          )
        )}

      </div>

      {/* Pagination */}

      <div className="flex justify-center gap-2 mt-12 flex-wrap">

        <button
          disabled={page === 1}
          onClick={() =>
            setPage(page - 1)
          }
          className="btn btn-outline rounded-xl"
        >
          Previous
        </button>

        {[...Array(totalPages)].map(
          (_, index) => (
            <button
              key={index}
              onClick={() =>
                setPage(
                  index + 1
                )
              }
              className={`btn rounded-xl ${
                page ===
                index + 1
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
          className="btn btn-outline rounded-xl"
        >
          Next
        </button>

      </div>
    </>
  )}
</div>


);
}
