
// "use client";
// import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
// import { Label } from "@heroui/react";

// import Link from "next/link";
// import { authClient } from "@/lib/auth-client";
// import {
//   Button,
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownItem,
//   Avatar,
// } from "@heroui/react";
// import { usePathname } from "next/navigation";
// import { User } from "lucide-react";

// export default function Navbar() {
//   const { data: session } = authClient.useSession();
//   const pathname = usePathname();
//   if (pathname.includes('dashboard')) {
//     return null;
//   }

//   const handleLogout = async () => {
//     await authClient.signOut();
//     window.location.href = "/";
//   };
//   const user = session?.user;


//   const avatarText =
//     user?.name?.charAt(0)?.toUpperCase() || "U";

//   return (
//     <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
//       <nav className="max-w-7xl mx-auto h-20 px-5 flex items-center justify-between">

//         {/* Logo */}
//         <Link href="/" className="text-3xl font-black">
//           Skill<span className="text-blue-600">Swap</span>
//         </Link>

//         {/* Nav Links */}
//         <div className="hidden md:flex items-center gap-8 font-medium">
//           <Link href="/">Home</Link>
//           <Link href="/browse-tasks">Browse Tasks</Link>
//           <Link href="/browse-freelancers">Browse Freelancers</Link>
//         </div>

//         {/* Right Side */}
//         {!session ? (
//           <div className="flex gap-3">
//             {/* <Button as={Link} href="/auth/login" variant="light">
//               Login
//             </Button>
//             <Link href="/auth/login" variant="light">
//               Login
//             </Link>

//             <Button as={Link} href="/auth/register" color="primary">
//               Register
//             </Button> */}
//             <>
//               <Link
//                 href="/auth/login"
//                 className="px-4 py-1.5 border-2 border-fuchsia-500 rounded-md hover:bg-gray-50"
//               >
//                 Login
//               </Link>
//               <Link
//                 href="/auth/register"
//                 className="px-4 py-1.5 bg-red-500 text-white rounded-md hover:bg-gray-800"
//               >
//                 Register
//               </Link>
//             </>
//           </div>
//         ) : (
//           <Dropdown>
//             <Dropdown.Trigger className="rounded-full">
//               <Avatar>
//                 <Avatar
//                   src={user?.image || ""}
//                   name={avatarText}
//                   className="cursor-pointer"
//                 />
//                 <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
//               </Avatar>
//             </Dropdown.Trigger>
//             <Dropdown.Popover>
//               <div className="px-3 pt-3 pb-2 border-b">
//                 <div className="flex items-center gap-3">

//                   <Avatar
//                     src={user?.image || ""}
//                     name={avatarText}
//                     size="sm"
//                   />

//                   <div>
//                     <p className="font-semibold">
//                       {user?.name}
//                     </p>

//                     <p className="text-xs text-gray-500">
//                       {user?.email}
//                     </p>

//                     <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
//                       {user?.role}
//                     </span>
//                   </div>

//                 </div>
//               </div>
//               <DropdownMenu aria-label="Profile Actions">

//                 <DropdownItem
//                   key="dashboard"
//                   href={`/dashboard/${user?.role}`}
//                 >
//                   Dashboard
//                 </DropdownItem>

//                 <DropdownItem
//                   key="profile"
//                 >
//                   My Profile
//                 </DropdownItem>

//                 <DropdownItem
//                   key="browseTasks"
//                   href="/browse-tasks"
//                 >
//                   Browse Tasks
//                 </DropdownItem>

//                 <DropdownItem
//                   key="browseFreelancers"
//                   href="/browse-freelancers"
//                 >
//                   Browse Freelancers
//                 </DropdownItem>

//                 <DropdownItem
//                   key="settings"
//                 >
//                   Settings
//                 </DropdownItem>

//                 <DropdownItem
//                   key="logout"
//                   color="danger"
//                   onPress={handleLogout}
//                 >
//                   Logout
//                 </DropdownItem>
//                 {user?.role === "client" && (
//                   <DropdownItem href="/dashboard/client/post-task">
//                     Post Task
//                   </DropdownItem>
//                 )}

//                 {user?.role === "freelancer" && (
//                   <DropdownItem href="/dashboard/freelancer/my-proposals">
//                     My Proposals
//                   </DropdownItem>
//                 )}

//                 {user?.role === "admin" && (
//                   <DropdownItem href="/dashboard/admin">
//                     Admin Panel
//                   </DropdownItem>
//                 )}

//               </DropdownMenu>
//             </Dropdown.Popover>
//           </Dropdown>
//         )}
//       </nav>
//     </header>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

import {
Dropdown,
Avatar,
} from "@heroui/react";

import { Menu, X } from "lucide-react";

export default function Navbar() {
const { data: session } = authClient.useSession();
const pathname = usePathname();

const [mobileMenuOpen, setMobileMenuOpen] =
useState(false);

if (pathname.includes("dashboard")) {
return null;
}

const handleLogout = async () => {
await authClient.signOut();
window.location.href = "/";
};

const user = session?.user;

const avatarText =
user?.name?.charAt(0)?.toUpperCase() || "U";

return ( <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md"> <nav className="max-w-7xl mx-auto h-20 px-5 flex items-center justify-between">


    {/* Logo */}
    <Link
      href="/"
      className="text-3xl font-black"
    >
      Skill
      <span className="text-blue-600">
        Swap
      </span>
    </Link>

    {/* Desktop Nav */}
    <div className="hidden md:flex items-center gap-8 font-medium">
      <Link href="/">Home</Link>

      <Link href="/browse-tasks">
        Browse Tasks
      </Link>

      <Link href="/browse-freelancers">
        Browse Freelancers
      </Link>
    </div>

    {/* Right Side */}
    {!session ? (
      <div className="hidden md:flex gap-3">
        <Link
          href="/auth/login"
          className="px-4 py-2 border rounded-lg"
        >
          Login
        </Link>

        <Link
          href="/auth/register"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Register
        </Link>
      </div>
    ) : (
      <div className="hidden md:block">
        <Dropdown>
          <Dropdown.Trigger>
            <Avatar
              src={user?.image || ""}
              name={avatarText}
              className="cursor-pointer"
            />
          </Dropdown.Trigger>

          <Dropdown.Menu>

            <Dropdown.Item
              key="dashboard"
              href={`/dashboard/${user?.role}`}
            >
              Dashboard
            </Dropdown.Item>

            <Dropdown.Item
              key="profile"
            >
              My Profile
            </Dropdown.Item>

            <Dropdown.Item
              key="browseTasks"
              href="/browse-tasks"
            >
              Browse Tasks
            </Dropdown.Item>

            <Dropdown.Item
              key="browseFreelancers"
              href="/browse-freelancers"
            >
              Browse Freelancers
            </Dropdown.Item>

            {user?.role === "client" && (
              <Dropdown.Item href="/dashboard/client/post-task">
                Post Task
              </Dropdown.Item>
            )}

            {user?.role === "freelancer" && (
              <Dropdown.Item href="/dashboard/freelancer/my-proposals">
                My Proposals
              </Dropdown.Item>
            )}

            {user?.role === "admin" && (
              <Dropdown.Item href="/dashboard/admin">
                Admin Panel
              </Dropdown.Item>
            )}

            <Dropdown.Item
              key="logout"
              color="danger"
              onPress={handleLogout}
            >
              Logout
            </Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
      </div>
    )}

    {/* Mobile Hamburger */}
    <button
      onClick={() =>
        setMobileMenuOpen(
          !mobileMenuOpen
        )
      }
      className="md:hidden"
    >
      {mobileMenuOpen ? (
        <X size={28} />
      ) : (
        <Menu size={28} />
      )}
    </button>

  </nav>

  {/* Mobile Menu */}
  {mobileMenuOpen && (
    <div className="md:hidden bg-white border-t shadow-xl">

      <div className="px-5 py-5 flex flex-col gap-4">

        <Link
          href="/"
          onClick={() =>
            setMobileMenuOpen(false)
          }
        >
          Home
        </Link>

        <Link
          href="/browse-tasks"
          onClick={() =>
            setMobileMenuOpen(false)
          }
        >
          Browse Tasks
        </Link>

        <Link
          href="/browse-freelancers"
          onClick={() =>
            setMobileMenuOpen(false)
          }
        >
          Browse Freelancers
        </Link>

        {!session ? (
          <>
            <Link
              href="/auth/login"
              className="btn btn-outline"
            >
              Login
            </Link>

            <Link
              href="/auth/register"
              className="btn btn-primary"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link
              href={`/dashboard/${user?.role}`}
            >
              Dashboard
            </Link>

            <button
              onClick={handleLogout}
              className="btn btn-error"
            >
              Logout
            </button>
          </>
        )}

      </div>
    </div>
  )}
</header>


);
}
