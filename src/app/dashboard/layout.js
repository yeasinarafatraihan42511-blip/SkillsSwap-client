// import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

// export default function RootLayout({ children }) {
//     return (
//         <div className="flex h-screen bg-background">
//             <div className="flex flex-1 gap-4 border-amber-800 overflow-hidden">
//                 {/* sidebar */}
//              <DashboardSidebar />
                // <div className="flex-1 overflow-y-auto">
                //     <div className="flex border w-full">Navbar</div>

                //     <main className="p-5">{children}</main>
                // </div>

//             </div>
           

//         </div>

//     );
// }
// "use client";

// import { useState } from "react";
// import { Menu } from "lucide-react";
// // import ClientSidebar from "./ClientSidebar";
// import DashboardSidebar from "@/components/dashboard/ClientSidebar";
// import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

// export default function DashboardLayout({
//   children,
// }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="flex">
//       {/* Desktop */}
//       <aside className="hidden lg:block w-72 border-r">
//         <DashboardSidebar />
//       </aside>

//       {/* Mobile Drawer */}
//       {open && (
//         <div className="fixed inset-0 z-50 flex">
//           <div className="w-72 bg-white">
           
//              <DashboardSidebar />
//           </div>

//           <div
//             className="flex-1 bg-black/40"
//             onClick={() => setOpen(false)}
//           />
//         </div>
//       )}
//         <div className="flex border w-full">Navbar</div>

//       <main className="flex-1 min-h-screen">
//         <div className="lg:hidden h-16 border-b flex items-center px-4">
//           <button onClick={() => setOpen(true)}>
//             <Menu />
//           </button>
//         </div>

//         <div className="p-6">
//           {children}
//         </div>
//       </main>
//     </div>
//   );
// }
// "use client";

// import { useState } from "react";
// import DashboardSidebar from "@/components/dashboard/ClientSidebar";
// import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

// export default function DashboardLayout({ children }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen bg-slate-50">
      
//       {/* Desktop Sidebar */}
//       <aside className="hidden lg:block w-72 border-r bg-white">
//         <DashboardSidebar />
//       </aside>

//       {/* Mobile Sidebar */}
//       {open && (
//         <div className="fixed inset-0 z-50 flex lg:hidden">
//           <div className="w-72 bg-white">
//             <DashboardSidebar />
//           </div>

//           <div
//             className="flex-1 bg-black/40"
//             onClick={() => setOpen(false)}
//           />
//         </div>
//       )}

//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col">

//         {/* Top Navbar */}
        

//         {/* Page Content */}
//         <main className="flex-1 p-6 overflow-y-auto">
//           {children}
//         </main>

//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

import ClientSidebar from "@/components/dashboard/ClientSidebar";
import FreelancerSidebar from "@/components/dashboard/FreelancerSidebar";
import AdminSidebar from "@/components/dashboard/AdminSidebar";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  const { data: session } = authClient.useSession();

  const role = session?.user?.role;

  const renderSidebar = () => {
    switch (role) {
      case "client":
        return <ClientSidebar />;

      case "freelancer":
        return <FreelancerSidebar />;

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

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 border-r bg-white">
        {renderSidebar()}
      </aside>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="w-72 bg-white">
            {renderSidebar()}
          </div>

          <div
            className="flex-1 bg-black/40"
            onClick={() => setOpen(false)}
          />
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}