"use client";

import { useEffect, useState } from "react";

export default function BrowseFreelancersPage() {
const [freelancers, setFreelancers] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
fetch("http://localhost:5000/freelancers")
.then((res) => res.json())
.then((data) => {
setFreelancers(data);
setLoading(false);
})
.catch(() => setLoading(false));
}, []);

if (loading) {
return ( <div className="flex justify-center py-20"> <span className="loading loading-spinner loading-lg"></span> </div>
);
}

return ( <div className="max-w-7xl mx-auto px-4 md:px-8 py-10"> <div className="mb-10"> <h1 className="text-4xl font-bold">
Browse Freelancers </h1>


    <p className="text-gray-500 mt-2">
      Find skilled professionals for your tasks
    </p>
  </div>

  {freelancers.length === 0 ? (
    <div className="bg-white border rounded-2xl p-10 text-center">
      No freelancers found
    </div>
  ) : (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {freelancers.map((user) => (
        <div
          key={user._id}
          className="bg-white border rounded-3xl p-6 hover:shadow-lg transition"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-600 text-lg">
              {user?.name?.charAt(0)?.toUpperCase()}
            </div>

            <div>
              <h2 className="font-bold text-lg">
                {user.name}
              </h2>

              <p className="text-sm text-gray-500">
                {user.email}
              </p>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-gray-600">
              {user.bio || "Professional Freelancer"}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="badge badge-outline">
              {user.skill || "React"}
            </span>

            <span className="badge badge-outline">
              {user.plan || "Free"}
            </span>
          </div>

          <div className="mt-5 text-xl font-bold text-orange-500">
            ${user.hourlyRate || 25}/hr
          </div>
        </div>
      ))}
    </div>
  )}
</div>


);
}
