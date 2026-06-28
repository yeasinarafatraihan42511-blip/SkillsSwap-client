// "use client";

// import { useEffect, useState } from "react";
// import { authClient } from "@/lib/auth-client";

// export default function MyProposalsPage() {
// const { data: session } = authClient.useSession();

// const [proposals, setProposals] = useState([]);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
// if (!session?.user?.email) return;


// fetch(
//   `http://localhost:5000/proposals?email=${session.user.email}`
// )
//   .then((res) => res.json())
//   .then((data) => {
//     setProposals(data);
//     setLoading(false);
//   });


// }, [session]);

// if (loading) {
// return ( <div className="flex justify-center py-20"> <span className="loading loading-spinner loading-lg"></span> </div>
// );
// }

// return ( <div> <h1 className="text-3xl font-bold mb-8">
// My Proposals </h1>

//   <div className="overflow-x-auto bg-white rounded-3xl border shadow-sm border-gray-200 gap-4 p-4">
//     <table className="table">
//       <thead className="bg-gray-100 border-b border-gray-200 text-gray-600 gap-4 p-4">
//         <tr>
//           <th>Task</th>
//           <th>Budget</th>
//           <th>Days</th>
//           <th>Status</th>
//         </tr>
//       </thead>

//       <tbody>
//         {proposals.map((proposal) => (
//           <tr key={proposal._id}>
//             <td>{proposal.taskTitle}</td>

//             <td>
//               ${proposal.proposedBudget}
//             </td>

//             <td>
//               {proposal.estimatedDays}
//             </td>

//             <td>
//               <span className="badge badge-warning">
//                 {proposal.status}
//               </span>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// </div>


// );
// }

"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import {
  FileText,
  Clock3,
  CircleDollarSign,
} from "lucide-react";

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
      })
      .catch(() => setLoading(false));
  }, [session]);

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 shadow-xl">

        <h1 className="text-4xl font-black">
          My Proposals
        </h1>

        <p className="mt-2 text-blue-100">
          Track all submitted proposals and monitor their
          current status.
        </p>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-3xl p-6 border shadow-sm">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-500 text-sm">
                Total Proposals
              </p>

              <h2 className="text-4xl font-black mt-2">
                {proposals.length}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
              <FileText className="text-blue-600" />
            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl p-6 border shadow-sm">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-500 text-sm">
                Pending
              </p>

              <h2 className="text-4xl font-black mt-2">
                {
                  proposals.filter(
                    (item) =>
                      item.status === "pending"
                  ).length
                }
              </h2>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center">
              <Clock3 className="text-yellow-600" />
            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl p-6 border shadow-sm">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-500 text-sm">
                Accepted
              </p>

              <h2 className="text-4xl font-black mt-2">
                {
                  proposals.filter(
                    (item) =>
                      item.status === "accepted"
                  ).length
                }
              </h2>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
              <CircleDollarSign className="text-green-600" />
            </div>

          </div>

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">

        <div className="px-7 py-5 border-b">

          <h2 className="text-xl font-bold">
            Submitted Proposals
          </h2>

          <p className="text-gray-500 mt-1">
            Review all proposals you've submitted.
          </p>

        </div>

        {proposals.length === 0 ? (
          <div className="text-center py-20">

            <img
              src="https://cdn-icons-png.flaticon.com/512/7486/7486803.png"
              alt=""
              className="w-28 mx-auto opacity-70"
            />

            <h3 className="text-2xl font-bold mt-5">
              No Proposal Found
            </h3>

            <p className="text-gray-500 mt-2">
              You haven't submitted any proposals yet.
            </p>

          </div>
        ) : (
         <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl">

  <table className="table w-full">

    <thead className="bg-gradient-to-r from-slate-100 to-slate-50">

      <tr className="text-slate-700">

        <th className="py-5 px-8 text-left">
          Task
        </th>

        <th className="py-5 px-8 text-left">
          Budget
        </th>

        <th className="py-5 px-8 text-left">
          Estimated Days
        </th>

        <th className="py-5 px-8 text-center">
          Status
        </th>

      </tr>

    </thead>

    <tbody>

      {proposals.map((proposal) => (

        <tr
          key={proposal._id}
          className="border-b border-slate-100 hover:bg-blue-50 transition-all duration-300"
        >

          <td className="px-8 py-6">

            <div className="space-y-1">

              <h3 className="font-bold text-slate-800 text-base">
                {proposal.taskTitle}
              </h3>

              <p className="text-xs text-slate-500">
                Proposal Submitted
              </p>

            </div>

          </td>

          <td className="px-8 py-6">

            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-4 py-2 font-bold whitespace-nowrap">

              ${proposal.proposedBudget}

            </span>

          </td>

          <td className="px-8 py-6">

            <span className="font-semibold whitespace-nowrap">

              {proposal.estimatedDays} Days

            </span>

          </td>

          <td className="px-8 py-6 text-center">

            <span
              className={`inline-flex justify-center items-center min-w-[120px] rounded-full px-4 py-2 text-sm font-semibold

              ${
                proposal.status === "accepted"
                  ? "bg-green-100 text-green-700"

                  : proposal.status === "pending"
                  ? "bg-yellow-100 text-yellow-700"

                  : proposal.status === "rejected"
                  ? "bg-red-100 text-red-700"

                  : "bg-slate-100 text-slate-700"
              }`}
            >

              {proposal.status}

            </span>

          </td>

        </tr>

      ))}

    </tbody>

  </table>

</div>
        )}

      </div>

    </div>
  );
}