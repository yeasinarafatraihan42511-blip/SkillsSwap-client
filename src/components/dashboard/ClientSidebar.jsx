// "use client";

// import Link from "next/link";
// import {
//   LayoutDashboard,
//   BriefcaseBusiness,
//   ListTodo,
//   FileText,
//   User,
//   LogOut,
// } from "lucide-react";

// export default function ClientDrawer() {
//   const menuItems = [
//     {
//       name: "Dashboard",
//       href: "/dashboard/client",
//       icon: LayoutDashboard,
//     },
//     {
//       name: "Post a Task",
//       href: "/dashboard/client/post-task",
//       icon: BriefcaseBusiness,
//     },
//     {
//       name: "My Tasks",
//       href: "/dashboard/client/my-tasks",
//       icon: ListTodo,
//     },
//     {
//       name: "Manage Proposals",
//       href: "/dashboard/client/manage-proposals",
//       icon: FileText,
//     },
   
//   ];

//   return (
//     <aside className="w-72 min-h-screen border-r bg-white flex flex-col">
      
//       {/* Logo */}
//       <div className="h-20 flex items-center px-6 border-b">
//         <Link
//           href="/"
//           className="text-3xl font-black"
//         >
//           Skill<span className="text-blue-600">Swap</span>
//         </Link>
//       </div>

//       {/* Menu */}
//       <div className="flex-1 p-4 space-y-2">
//         {menuItems.map((item) => {
//           const Icon = item.icon;

//           return (
//             <Link
//               key={item.name}
//               href={item.href}
//               className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition-all"
//             >
//               <Icon size={20} />
//               <span>{item.name}</span>
//             </Link>
//           );
//         })}
//       </div>

//       {/* Logout */}
//       <div className="p-4 border-t">
//         <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50">
//           <LogOut size={20} />
//           Logout
//         </button>
//       </div>
//     </aside>
//   );
// }
"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  ListTodo,
  FileText,
  LogOut,
  User,
} from "lucide-react";

export default function ClientSidebar() {
  const { data: session } = authClient.useSession();

  const menuItems = [
    {
      title: "Dashboard",
      href: "/dashboard/client",
      icon: LayoutDashboard,
    },
    {
      title: "Post a Task",
      href: "/dashboard/client/post-task",
      icon: BriefcaseBusiness,
    },
    {
      title: "My Tasks",
      href: "/dashboard/client/my-tasks",
      icon: ListTodo,
    },
    {
      title: "Manage Proposals",
      href: "/dashboard/client/manage-proposals",
      icon: FileText,
    },
     {
      title: "Profile",
      href: "/dashboard/client/profile",
      icon: User,
    },
  ];

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.href = "/";
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Logo */}
      <div className="h-20 border-b flex items-center px-6">
        <Link
          href="/"
          className="text-3xl font-black"
        >
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
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50"
            >
              <Icon size={18} />
              {item.title}
            </Link>
          );
        })}
      </div>

      {/* User Section */}
      <div className="border-t p-4">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={
              session?.user?.image ||
              "https://i.pravatar.cc/150"
            }
            alt=""
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h3 className="font-semibold">
              {session?.user?.name}
            </h3>

            <p className="text-sm text-gray-500">
              Client
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