"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import {
  LayoutDashboard,
  Users,
  BriefcaseBusiness,
  CreditCard,
  LogOut,
} from "lucide-react";

export default function AdminSidebar() {
  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.href = "/";
  };

  const menuItems = [
    {
      title: "Dashboard",
      href: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Manage Users",
      href: "/dashboard/admin/users",
      icon: Users,
    },
    {
      title: "Manage Tasks",
      href: "/dashboard/admin/tasks",
      icon: BriefcaseBusiness,
    },
    {
      title: "Transactions",
      href: "/dashboard/admin/transactions",
      icon: CreditCard,
    },
  ];

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Logo */}
      <div className="h-20 border-b flex items-center px-6">
        <Link href="/" className="text-3xl font-black">
          Skill<span className="text-blue-600">Swap</span>
        </Link>
      </div>

      {/* Menu */}
      <div className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition"
            >
              <Icon size={18} />
              {item.title}
            </Link>
          );
        })}
      </div>

      {/* User */}
      <div className="border-t p-4">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={session?.user?.image || "https://i.pravatar.cc/150"}
            alt="user"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold">
              {session?.user?.name}
            </h3>

            <p className="text-sm text-gray-500">
              Admin
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 text-red-500"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}