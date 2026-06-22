export default function ClientDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Client Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="bg-white p-6 rounded-xl border">
          <h3 className="text-gray-500">Total Tasks</h3>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <h3 className="text-gray-500">Open Tasks</h3>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <h3 className="text-gray-500">In Progress</h3>
          <p className="text-3xl font-bold mt-2">4</p>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <h3 className="text-gray-500">Total Spent</h3>
          <p className="text-3xl font-bold mt-2">$1,250</p>
        </div>
      </div>
    </div>
  );
}