"use client";

export default function ManageUsersPage() {
  const users = [
    {
      id: 1,
      name: "Yeasin",
      email: "yeasin@gmail.com",
      role: "client",
      status: "Active",
    },
    {
      id: 2,
      name: "John",
      email: "john@gmail.com",
      role: "freelancer",
      status: "Blocked",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Manage Users
      </h1>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4 capitalize">
                  {user.role}
                </td>
                <td className="p-4">
                  {user.status}
                </td>

                <td className="p-4">
                  <button className="px-3 py-1 rounded bg-red-600 text-white">
                    Block
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