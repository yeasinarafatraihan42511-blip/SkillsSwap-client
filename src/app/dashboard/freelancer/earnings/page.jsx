export default function EarningsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        My Earnings
      </h1>

      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">
                Task
              </th>

              <th className="p-4 text-left">
                Client
              </th>

              <th className="p-4 text-left">
                Amount
              </th>

              <th className="p-4 text-left">
                Completion Date
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-4">
                React Website
              </td>

              <td className="p-4">
                Yeasin
              </td>

              <td className="p-4">
                $500
              </td>

              <td className="p-4">
                22 Jun 2026
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}