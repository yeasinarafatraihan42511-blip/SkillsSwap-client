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
  });


}, [session]);

const handleAccept = async (id) => {
await fetch(
`http://localhost:5000/proposals/${id}`,
{
method: "PATCH",
headers: {
"Content-Type":
"application/json",
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


};

if (loading) {
return ( <div className="flex justify-center py-20"> <span className="loading loading-spinner loading-lg"></span> </div>
);
}

return ( <div> <h1 className="text-3xl font-bold mb-8">
Manage Proposals </h1>


  <div className="grid gap-6">
    {proposals.map((proposal) => (
      <div
        key={proposal._id}
        className="bg-white rounded-3xl border p-6 shadow-sm"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">
              {proposal.taskTitle}
            </h2>

            <p className="text-gray-500">
              Freelancer:
              {" "}
              {proposal.freelancerName}
            </p>

            <p>
              Budget:
              {" "}
              $
              {proposal.proposedBudget}
            </p>

            <p>
              Days:
              {" "}
              {proposal.estimatedDays}
            </p>

            <p className="mt-2">
              {proposal.coverLetter}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="badge badge-warning">
              {proposal.status}
            </span>

            {proposal.status !==
              "accepted" && (
              <button
                onClick={() =>
                  handleAccept(
                    proposal._id
                  )
                }
                className="btn btn-success"
              >
                Accept
              </button>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


);
}
