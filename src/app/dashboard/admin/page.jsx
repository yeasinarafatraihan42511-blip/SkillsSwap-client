"use client";

import { useEffect, useState } from "react";

export default function AdminDashboardPage() {
const [stats, setStats] = useState(null);

useEffect(() => {
fetch("http://localhost:5000/admin-stats")
.then((res) => res.json())
.then((data) => setStats(data));
}, []);

if (!stats) {
return ( <div className="flex justify-center py-20"> <span className="loading loading-spinner loading-lg"></span> </div>
);
}

return ( <div> <div className="mb-10"> <h1 className="text-4xl font-bold">
Admin Dashboard </h1>


    <p className="text-gray-500 mt-2">
      Monitor platform activity.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

    <div className="bg-white border rounded-3xl p-8 shadow-sm">
      <p className="text-gray-500">
        Total Users
      </p>

      <h2 className="text-5xl font-bold mt-3">
        {stats.totalUsers}
      </h2>
    </div>

    <div className="bg-white border rounded-3xl p-8 shadow-sm">
      <p className="text-gray-500">
        Total Tasks
      </p>

      <h2 className="text-5xl font-bold mt-3">
        {stats.totalTasks}
      </h2>
    </div>

    <div className="bg-white border rounded-3xl p-8 shadow-sm">
      <p className="text-gray-500">
        Total Proposals
      </p>

      <h2 className="text-5xl font-bold mt-3">
        {stats.totalProposals}
      </h2>
    </div>

  </div>
</div>


);
}
