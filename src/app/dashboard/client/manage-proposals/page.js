"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function ManageProposalsPage() {
const { data: session } = authClient.useSession();

const [proposals, setProposals] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
if (!session?.user?.email) return;


fetch(
  `http://localhost:5000/client-proposals?email=${session.user.email}`
)
  .then((res) => res.json())
  .then((data) => {
    setProposals(data);
    setLoading(false);
  })
  .catch((error) => {
    console.log(error);
    setLoading(false);
  });


}, [session]);

const handleAccept = async (id) => {
try {
await fetch(
`http://localhost:5000/proposals/${id}`,
{
method: "PATCH",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
status: "accepted",
}),
}
);


  setProposals((prev) =>
    prev.map((item) =>
      item._id === id
        ? {
            ...item,
            status: "accepted",
          }
        : item
    )
  );
} catch (error) {
  console.log(error);
}


};

if (loading) {
return ( <div className="flex justify-center py-20"> <span className="loading loading-spinner loading-lg"></span> </div>
);
}

return (

  <div className="max-w-7xl mx-auto px-4">


<div className="mb-10">
  <h1 className="text-4xl font-bold">
    Manage Proposals
  </h1>

  <p className="text-slate-500 mt-2">
    Review freelancer proposals and
    accept the best candidate.
  </p>
</div>

{proposals.length === 0 ? (
  <div className="bg-white rounded-3xl border p-12 text-center shadow-sm">
    <h2 className="text-2xl font-semibold">
      No Proposals Found
    </h2>

    <p className="text-gray-500 mt-2">
      Freelancers haven't submitted
      any proposal yet.
    </p>
  </div>
) : (
  <div className="grid gap-6">
    {proposals.map((proposal) => (
      <div
        key={proposal._id}
        className="bg-white border rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300"
      >
        <div className="flex flex-col xl:flex-row xl:justify-between gap-6">

          <div className="flex-1">

            <div className="flex flex-wrap items-center gap-3 mb-4">

              <h2 className="text-2xl font-bold">
                {proposal.taskTitle}
              </h2>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  proposal.status === "accepted"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {proposal.status}
              </span>

            </div>

            <div className="grid sm:grid-cols-2 gap-4">

              <div className="bg-slate-50 rounded-2xl p-4">
                <p className="text-sm text-gray-500">
                  Freelancer
                </p>

                <h3 className="font-semibold">
                  {proposal.freelancerName}
                </h3>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4">
                <p className="text-sm text-gray-500">
                  Proposed Budget
                </p>

                <h3 className="font-semibold text-green-600">
                  $
                  {proposal.proposedBudget}
                </h3>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4">
                <p className="text-sm text-gray-500">
                  Delivery Time
                </p>

                <h3 className="font-semibold">
                  {proposal.estimatedDays}
                  {" "}Days
                </h3>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4">
                <p className="text-sm text-gray-500">
                  Proposal Status
                </p>

                <h3 className="font-semibold capitalize">
                  {proposal.status}
                </h3>
              </div>

            </div>

            <div className="mt-5">
              <h3 className="font-semibold mb-2">
                Cover Letter
              </h3>

              <p className="text-gray-600 leading-7">
                {proposal.coverLetter}
              </p>
            </div>

          </div>

          <div className="xl:w-56 flex flex-col justify-center">

            {proposal.status !==
            "accepted" ? (
              <button
                onClick={() =>
                  handleAccept(
                    proposal._id
                  )
                }
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-2xl transition"
              >
                Accept & Pay
              </button>
            ) : (
              <button
                disabled
                className="w-full bg-green-100 text-green-700 font-semibold py-3 rounded-2xl cursor-not-allowed"
              >
                Accepted
              </button>
            )}

          </div>

        </div>
      </div>
    ))}
  </div>
)}


  </div>
);

}
