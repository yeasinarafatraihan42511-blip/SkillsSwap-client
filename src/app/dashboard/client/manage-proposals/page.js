"use client";

export default function ManageProposalsPage() {
  const proposals = [
    {
      id: 1,
      freelancer: "John Doe",
      budget: 250,
      days: 7,
      message: "I can complete this project professionally.",
      status: "Pending",
    },
    {
      id: 2,
      freelancer: "Sarah Khan",
      budget: 220,
      days: 5,
      message: "Ready to start immediately.",
      status: "Pending",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Manage Proposals
      </h1>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Freelancer</th>
              <th className="p-4 text-left">Budget</th>
              <th className="p-4 text-left">Days</th>
              <th className="p-4 text-left">Message</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {proposals.map((proposal) => (
              <tr key={proposal.id} className="border-t">
                <td className="p-4">{proposal.freelancer}</td>
                <td className="p-4">${proposal.budget}</td>
                <td className="p-4">{proposal.days}</td>
                <td className="p-4">{proposal.message}</td>

                <td className="p-4 flex gap-2">
                  <button className="px-3 py-1 rounded bg-green-600 text-white">
                    Accept
                  </button>

                  <button className="px-3 py-1 rounded bg-red-600 text-white">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}