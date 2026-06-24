"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function ProjectsPage() {
const { data: session } = authClient.useSession();

const [projects, setProjects] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
if (!session?.user?.email) return;


fetch(
  `http://localhost:5000/accepted-projects?email=${session.user.email}`
)
  .then((res) => res.json())
  .then((data) => {
    setProjects(data);
    setLoading(false);
  });


}, [session]);

if (loading) {
return ( <div className="flex justify-center py-20"> <span className="loading loading-spinner loading-lg"></span> </div>
);
}

return ( <div> <div className="mb-8"> <h1 className="text-3xl font-bold">
Active Projects </h1>


    <p className="text-gray-500 mt-2">
      Projects assigned to you.
    </p>
  </div>

  {projects.length === 0 ? (
    <div className="bg-white rounded-3xl border p-10 text-center">
      <h2 className="text-xl font-semibold">
        No Active Projects
      </h2>

      <p className="text-gray-500 mt-2">
        Accepted projects will appear here.
      </p>
    </div>
  ) : (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <div
          key={project._id}
          className="bg-white rounded-3xl border shadow-sm p-6"
        >
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold">
              {project.taskTitle}
            </h2>

            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
              Active
            </span>
          </div>

          <div className="mt-5 space-y-2">
            <p>
              <strong>Client:</strong>{" "}
              {project.clientName}
            </p>

            <p>
              <strong>Budget:</strong> $
              {project.proposedBudget}
            </p>

            <p>
              <strong>Timeline:</strong>{" "}
              {project.estimatedDays} Days
            </p>
          </div>
        </div>
      ))}
    </div>
  )}
</div>


);
}
