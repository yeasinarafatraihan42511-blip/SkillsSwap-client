// // "use client";

// // import { useEffect, useState } from "react";
// // import Link from "next/link";

// // export default function BrowseTasksPage() {
// //   const [tasks, setTasks] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //  useEffect(() => {
// //   fetch("http://localhost:5000/tasks")
// //     .then((res) => res.json())
// //     .then((data) => {
// //       console.log("Tasks:", data);
// //       setTasks(data);
// //       setLoading(false);
// //     })
// //     .catch((error) => {
// //       console.error("Fetch Error:", error);
// //       setLoading(false);
// //     });
// // }, []);
// //   if (loading) {
// //     return (
// //       <div className="text-center py-20">
// //         Loading tasks...
// //       </div>
// //     );
// //   }

// //   return (
// //     <div>
// //       <div className="mb-8">
// //         <h1 className="text-3xl font-bold">
// //           Browse Tasks
// //         </h1>

// //         <p className="text-gray-500 mt-2">
// //           Explore available freelance jobs.
// //         </p>
// //       </div>

// //       {tasks.length === 0 ? (
// //         <div className="bg-white border rounded-xl p-10 text-center">
// //           No open tasks found.
// //         </div>
// //       ) : (
// //         <div className="grid gap-6 lg:grid-cols-2">
// //           {tasks.map((task) => (
// //             <div
// //               key={task._id}
// //               className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
// //             >
// //               <h2 className="text-xl font-bold">
// //                 {task.title}
// //               </h2>

// //               <div className="mt-4 space-y-2 text-sm">
// //                 <p>
// //                   <span className="font-semibold">
// //                     Category:
// //                   </span>{" "}
// //                   {task.category}
// //                 </p>

// //                 <p>
// //                   <span className="font-semibold">
// //                     Budget:
// //                   </span>{" "}
// //                   ${task.budget}
// //                 </p>

// //                 <p>
// //                   <span className="font-semibold">
// //                     Deadline:
// //                   </span>{" "}
// //                   {task.deadline}
// //                 </p>

// //                 <p>
// //                   <span className="font-semibold">
// //                     Client:
// //                   </span>{" "}
// //                   {task.clientName}
// //                 </p>

// //                 <p>
// //                   <span className="font-semibold">
// //                     Status:
// //                   </span>{" "}
// //                   <span className="capitalize text-green-600">
// //                     {task.status}
// //                   </span>
// //                 </p>
// //               </div>

//               // <Link
//               //   href={`/dashboard/freelancer/tasks/${task._id}`}
//               //   className="inline-block mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg"
//               // >
//               //   View Details
//               // </Link>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";

// export default function BrowseTasksPage() {
// const [tasks, setTasks] = useState([]);
// const [filteredTasks, setFilteredTasks] = useState([]);
// const [loading, setLoading] = useState(true);

// const [search, setSearch] = useState("");
// const [category, setCategory] = useState("All");

// useEffect(() => {
// fetch("http://localhost:5000/tasks")
// .then((res) => res.json())
// .then((data) => {
// setTasks(data);
// setFilteredTasks(data);
// setLoading(false);
// })
// .catch(() => {
// setLoading(false);
// });
// }, []);

// useEffect(() => {
// let result = tasks;


// if (search) {
//   result = result.filter((task) =>
//     task.title
//       .toLowerCase()
//       .includes(search.toLowerCase())
//   );
// }

// if (category !== "All") {
//   result = result.filter(
//     (task) => task.category === category
//   );
// }

// setFilteredTasks(result);


// }, [search, category, tasks]);

// if (loading) {
// return ( <div className="flex justify-center py-20"> <span className="loading loading-spinner loading-lg"></span> </div>
// );
// }

// return ( <div className="max-w-7xl mx-auto"> <div className="mb-8"> <h1 className="text-4xl font-bold">
// Browse Tasks </h1>


//     <p className="text-gray-500 mt-2">
//       Find the perfect freelance opportunity.
//     </p>
//   </div>

//   <div className="bg-white border rounded-2xl p-4 md:p-6 mb-8">
//     <div className="grid md:grid-cols-3 gap-4">
//       <input
//         type="text"
//         placeholder="Search tasks..."
//         value={search}
//         onChange={(e) =>
//           setSearch(e.target.value)
//         }
//         className="input input-bordered w-full"
//       />

//       <select
//         value={category}
//         onChange={(e) =>
//           setCategory(e.target.value)
//         }
//         className="select select-bordered w-full"
//       >
//         <option value="All">
//           All Categories
//         </option>

//         <option value="Web Development">
//           Web Development
//         </option>

//         <option value="Graphic Design">
//           Graphic Design
//         </option>

//         <option value="UI/UX Design">
//           UI/UX Design
//         </option>

//         <option value="Content Writing">
//           Content Writing
//         </option>

//         <option value="Mobile App">
//           Mobile App
//         </option>
//       </select>

//       <div className="flex items-center justify-center bg-base-200 rounded-xl font-semibold">
//         {filteredTasks.length} Tasks Found
//       </div>
//     </div>
//   </div>

//   {filteredTasks.length === 0 ? (
//     <div className="bg-white border rounded-2xl p-10 text-center">
//       No tasks found.
//     </div>
//   ) : (
//     <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//       {tasks.map((task) => (
//         <div
//           key={task._id}
//           className="bg-white border rounded-3xl p-6 hover:shadow-lg transition"
//         >
//           <div className="flex justify-between items-start">
//             <h2 className="text-xl font-bold">
//               {task.title}
//             </h2>

//             <span className="badge badge-success">
//               {task.status}
//             </span>
//           </div>

//           <div className="mt-4 space-y-2 text-sm">
//             <p>
//               <strong>Category:</strong>{" "}
//               {task.category}
//             </p>

//             <p>
//               <strong>Budget:</strong> $
//               {task.budget}
//             </p>

//             <p>
//               <strong>Deadline:</strong>{" "}
//               {task.deadline}
//             </p>

//             <p>
//               <strong>Client:</strong>{" "}
//               {task.clientName}
//             </p>
//           </div>

//           <Link
//             href={`/dashboard/freelancer/browse-tasks/${task._id}`}
//             className="btn btn-primary w-full mt-6"
//           >
//             View Details
//           </Link>
//         </div>
//       ))}
//     </div>
//   )}
// </div>


// );
// }





"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BrowseTasksPage() {
const [tasks, setTasks] = useState([]);
const [loading, setLoading] = useState(true);

const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");

const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

useEffect(() => {
setLoading(true);


fetch(
  `http://localhost:5000/tasks?page=${page}&search=${search}&category=${category}`
)
  .then((res) => res.json())
  .then((data) => {
    setTasks(data.tasks || []);
    setTotalPages(data.totalPages || 1);
    setLoading(false);
  })
  .catch(() => {
    setLoading(false);
  });


}, [page, search, category]);

return ( <div className="max-w-7xl mx-auto px-4">


  {/* Hero */}
  <div className="mb-10">
    <h1 className="text-4xl md:text-5xl font-extrabold">
      Browse Tasks
    </h1>

    <p className="text-gray-500 mt-3 text-lg">
      Find freelance projects that match your skills.
    </p>
  </div>

  {/* Filters */}
  <div className="bg-white border border-slate-200 rounded-3xl p-5 md:p-6 shadow-sm mb-10">
    <div className="grid md:grid-cols-3 gap-4">

      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        className="input input-bordered w-full"
      />

      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setPage(1);
        }}
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
        {tasks.length} Tasks Found
      </div>

    </div>
  </div>

  {/* Loading */}
  {loading ? (
    <div className="flex justify-center py-20">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : tasks.length === 0 ? (
    <div className="bg-white border rounded-3xl p-12 text-center">
      <h3 className="text-2xl font-bold">
        No Tasks Found
      </h3>

      <p className="text-gray-500 mt-2">
        Try another keyword or category.
      </p>
    </div>
  ) : (
    <>
      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-between gap-3">

              <h2 className="text-xl font-bold">
                {task.title}
              </h2>

              <span className="badge badge-success">
                {task.status}
              </span>

            </div>

            <div className="mt-5 space-y-3 text-sm">

              <p>
                <span className="font-semibold">
                  Category:
                </span>{" "}
                {task.category}
              </p>

              <p>
                <span className="font-semibold">
                  Budget:
                </span>{" "}
                ${task.budget}
              </p>

              <p>
                <span className="font-semibold">
                  Deadline:
                </span>{" "}
                {task.deadline}
              </p>

              <p>
                <span className="font-semibold">
                  Client:
                </span>{" "}
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

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-12 flex-wrap">

        <button
          className="btn"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            className={`btn ${
              page === index + 1
                ? "btn-primary"
                : "btn-outline"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="btn"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>

      </div>
    </>
  )}
</div>


);
}

