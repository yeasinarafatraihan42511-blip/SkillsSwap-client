// "use client";

// import { Menu, Bell } from "lucide-react";
// import { authClient } from "@/lib/auth-client";
// const { data: session } = authClient.useSession();



// export default function DashboardNavbar({
//   setSidebarOpen,
// }) {
//   const { data: session } = authClient.useSession();
//   const role = session?.user?.role;
// const dashboardTitles = {
//   client: "Client Dashboard",
//   freelancer: "Freelancer Dashboard",
//   admin: "Admin Dashboard",
// };

//   return (
//     <header className="sticky top-0 z-40 h-20 bg-white border-b px-6 flex items-center justify-between">
      
//       {/* Mobile Menu */}
//       <div className="flex items-center gap-3">
//         <button
//           onClick={() => setSidebarOpen(true)}
//           className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
//         >
//           <Menu size={22} />
//         </button>

//         <div>
//           <h1 className="text-xl font-bold">
//             {dashboardTitles[role] || "Dashboard"}
//           </h1>

//           <p className="text-sm text-gray-500">
//             Manage your tasks and proposals
//           </p>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="flex items-center gap-5">
        
//         {/* Notification */}
//         <button className="relative p-2 rounded-lg hover:bg-slate-100">
//           <Bell size={20} />

//           <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
//         </button>

//         {/* User */}
//         <div className="flex items-center gap-3">
//           <img
//             src={
//               session?.user?.image ||
//               "https://i.pravatar.cc/150"
//             }
//             alt="user"
//             className="w-11 h-11 rounded-full object-cover"
//           />

//           <div className="hidden md:block">
//             <h3 className="font-semibold leading-none">
//               {session?.user?.name}
//             </h3>

//             <p className="text-sm text-gray-500">
//               {session?.user?.role === "admin" ? "Admin" : "Client"}
//             </p>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }