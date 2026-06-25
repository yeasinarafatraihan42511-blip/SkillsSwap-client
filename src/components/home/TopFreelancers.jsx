"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function TopFreelancers() {
  const [freelancers, setFreelancers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/freelancers")
      .then((res) => res.json())
      .then((data) => {
        setFreelancers(data.slice(0, 6));
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-5 py-24">
      <div className="text-center mb-14">
        <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold">
          Featured Talent
        </span>

        <h2 className="text-4xl md:text-5xl font-black mt-4">
          Top Freelancers
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Connect with highly skilled freelancers trusted by
          clients worldwide.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {freelancers.map((freelancer) => (
              <div
                key={freelancer._id}
                className="group bg-white border rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={
                      freelancer.image ||
                      freelancer.photoURL ||
                      `https://ui-avatars.com/api/?name=${freelancer.name}`
                    }
                    alt={freelancer.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
                  />

                  <h3 className="text-xl font-bold mt-5">
                    {freelancer.name}
                  </h3>

                  <p className="text-blue-600 font-medium mt-1">
                    {freelancer.role}
                  </p>

                  <div className="flex gap-6 mt-6">
                    <div>
                      <h4 className="font-bold text-lg">
                        ⭐ 4.9
                      </h4>

                      <p className="text-xs text-gray-500">
                        Rating
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg">
                        50+
                      </h4>

                      <p className="text-xs text-gray-500">
                        Projects
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/browse-freelancers"
                    className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/browse-freelancers"
              className="px-8 py-4 rounded-2xl bg-black text-white font-semibold hover:scale-105 transition"
            >
              View All Freelancers
            </Link>
          </div>
        </>
      )}
    </section>
  );
}