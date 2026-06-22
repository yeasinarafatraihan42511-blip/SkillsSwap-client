export default function AdminDashboardPage() {
  const stats = [
    {
      title: "Total Users",
      value: 125,
    },
    {
      title: "Total Tasks",
      value: 48,
    },
    {
      title: "Total Revenue",
      value: "$4,250",
    },
    {
      title: "Active Tasks",
      value: 19,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white p-6 rounded-xl border"
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