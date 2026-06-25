"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

import ClientSidebar from "@/components/dashboard/ClientSidebar";
import FreelancerSidebar from "@/components/dashboard/FreelancerSidebar";
import AdminSidebar from "@/components/dashboard/AdminSidebar";

export default function DashboardLayout({
children,
}) {
const [open, setOpen] =
useState(false);

const { data: session } =
authClient.useSession();

const role =
session?.user?.role;

const renderSidebar = () => {
switch (role) {
case "client":
return <ClientSidebar />;

  case "freelancer":
    return (
      <FreelancerSidebar />
    );

  case "admin":
    return <AdminSidebar />;

  default:
    return (
      <div className="p-6">
        Loading...
      </div>
    );
}


};

return ( <div className="flex min-h-screen bg-slate-50">


  {/* Desktop Sidebar */}

  <aside className="hidden lg:block w-72 border-r bg-white shadow-sm">
    {renderSidebar()}
  </aside>

  {/* Mobile Sidebar */}

  <div
    className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl transform transition-transform duration-300 lg:hidden ${
      open
        ? "translate-x-0"
        : "-translate-x-full"
    }`}
  >
    <div className="flex justify-between items-center p-5 border-b">

      <h2 className="font-bold text-xl">
        Dashboard
      </h2>

      <button
        onClick={() =>
          setOpen(false)
        }
        className="text-2xl"
      >
        ✕
      </button>

    </div>

    {renderSidebar()}
  </div>

  {/* Overlay */}

  {open && (
    <div
      onClick={() =>
        setOpen(false)
      }
      className="fixed inset-0 bg-black/40 z-40 lg:hidden"
    />
  )}

  {/* Main Section */}

  <div className="flex-1 flex flex-col">

    {/* Mobile Header */}

    <header className="lg:hidden bg-white border-b sticky top-0 z-30">

      <div className="flex items-center justify-between px-4 py-4">

        <button
          onClick={() =>
            setOpen(true)
          }
          className="text-2xl"
        >
          ☰
        </button>

        <h1 className="font-bold text-lg">
          SkillSwap
        </h1>

        <div className="w-8" />
      </div>

    </header>

    {/* Content */}

    <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
      {children}
    </main>

  </div>
</div>


);
}
