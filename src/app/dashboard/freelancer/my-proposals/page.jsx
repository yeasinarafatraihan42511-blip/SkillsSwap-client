"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function MyProposalsPage() {
const { data: session } = authClient.useSession();

const [proposals, setProposals] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
if (!session?.user?.email) return;


fetch(
  `http://localhost:5000/proposals?email=${session.user.email}`
)
  .then((res) => res.json())
  .then((data) => {
    setProposals(data);
    setLoading(false);
  });


}, [session]);

if (loading) {
return ( <div className="flex justify-center py-20"> <span className="loading loading-spinner loading-lg"></span> </div>
);
}

return ( <div> <h1 className="text-3xl font-bold mb-8">
My Proposals </h1>

  <div className="overflow-x-auto bg-white rounded-3xl border shadow-sm">
    <table className="table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Budget</th>
          <th>Days</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {proposals.map((proposal) => (
          <tr key={proposal._id}>
            <td>{proposal.taskTitle}</td>

            <td>
              ${proposal.proposedBudget}
            </td>

            <td>
              {proposal.estimatedDays}
            </td>

            <td>
              <span className="badge badge-warning">
                {proposal.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


);
}
