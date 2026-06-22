export default function MyProposalsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        My Proposals
      </h1>

      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">
                Task Title
              </th>

              <th className="p-4 text-left">
                Budget Bid
              </th>

              <th className="p-4 text-left">
                Date Sent
              </th>

              <th className="p-4 text-left">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-4">
                React Website
              </td>

              <td className="p-4">
                $400
              </td>

              <td className="p-4">
                22 Jun 2026
              </td>

              <td className="p-4">
                Pending
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}