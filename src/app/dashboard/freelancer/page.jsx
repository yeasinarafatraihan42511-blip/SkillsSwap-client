export default function FreelancerDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Freelancer Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="bg-white p-6 rounded-xl border">
          <h3>Total Proposals</h3>
          <p className="text-3xl font-bold">12</p>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <h3>Pending Proposals</h3>
          <p className="text-3xl font-bold">5</p>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <h3>Accepted Proposals</h3>
          <p className="text-3xl font-bold">3</p>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <h3>Total Earnings</h3>
          <p className="text-3xl font-bold">$850</p>
        </div>
      </div>
    </div>
  );
}