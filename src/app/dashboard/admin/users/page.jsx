"use client";

import { useEffect, useState } from "react";

export default function AdminUsersPage() {
const [users, setUsers] = useState([]);

useEffect(() => {
fetch("http://localhost:5000/admin-users")
.then((res) => res.json())
.then((data) => setUsers(data));
}, []);

return ( <div> <h1 className="text-3xl font-bold mb-8">
Manage Users </h1>


  <div className="overflow-x-auto bg-white rounded-3xl border">
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Plan</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user.plan}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

);
}
