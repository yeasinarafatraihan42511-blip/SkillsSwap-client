export default function FreelancerDashboardPage() {
  const stats = [
    {
      title: "Total Proposals",
      value: 12,
    },
    {
      title: "Pending Proposals",
      value: 5,
    },
    {
      title: "Accepted Proposals",
      value: 3,
    },
    {
      title: "Total Earnings",
      value: "$850",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Freelancer Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white p-6 rounded-xl border shadow-sm"
          >
            <h3 className="text-slate-500">
              {item.title}
            </h3>

            <p className="text-3xl font-bold mt-3">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}