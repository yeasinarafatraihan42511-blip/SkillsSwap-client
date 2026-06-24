"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BrowseTasksPage() {
const [tasks, setTasks] = useState([]);
const [filteredTasks, setFilteredTasks] = useState([]);
const [loading, setLoading] = useState(true);

const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");

useEffect(() => {
fetch("http://localhost:5000/tasks")
.then((res) => res.json())
.then((data) => {
setTasks(data);
setFilteredTasks(data);
setLoading(false);
})
.catch(() => {
setLoading(false);
});
}, []);

useEffect(() => {
let result = tasks;


if (search) {
  result = result.filter((task) =>
    task.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );
}

if (category !== "All") {
  result = result.filter(
    (task) => task.category === category
  );
}

setFilteredTasks(result);


}, [search, category, tasks]);

if (loading) {
return ( <div className="flex justify-center py-20"> <span className="loading loading-spinner loading-lg"></span> </div>
);
}

return ( <div className="max-w-7xl mx-auto"> <div className="mb-8"> <h1 className="text-4xl font-bold">
Browse Tasks </h1>


    <p className="text-gray-500 mt-2">
      Find the perfect freelance opportunity.
    </p>
  </div>

  <div className="bg-white border rounded-2xl p-4 md:p-6 mb-8">
    <div className="grid md:grid-cols-3 gap-4">
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="input input-bordered w-full"
      />

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
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

      <div className="flex items-center justify-center bg-base-200 rounded-xl font-semibold">
        {filteredTasks.length} Tasks Found
      </div>
    </div>
  </div>

  {filteredTasks.length === 0 ? (
    <div className="bg-white border rounded-2xl p-10 text-center">
      No tasks found.
    </div>
  ) : (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {filteredTasks.map((task) => (
        <div
          key={task._id}
          className="bg-white border rounded-3xl p-6 hover:shadow-lg transition"
        >
          <div className="flex justify-between items-start">
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
  )}
</div>


);
}
