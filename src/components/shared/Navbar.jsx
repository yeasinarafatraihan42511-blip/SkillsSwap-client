
// "use client";
// import {Label} from "@heroui/react";


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

// export default function Navbar() {
//   // Better Auth session
//   const { data: session } = authClient.useSession();

  // const handleLogout = async () => {
  //   await authClient.signOut();
  //   window.location.href = "/";
  // };
  //   <DropdownItem
  //               key="logout"
  //               color="danger"
  //               className="text-danger"
  //               onPress={handleLogout}
  //             >
  //               Logout
  //             </DropdownItem>

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

//             <Button
//               as={Link}
//               href="/auth/login"
//               variant="light"
//             >
//               Login
//             </Button>

//             <Button
//               as={Link}
//               href="/auth/register"
//               color="primary"
//             >
//               Register
//             </Button>

//           </div>
//         ) : (

//           <Dropdown>
//             <Button aria-label="Menu" variant="secondary">
//               Dashboard
//             </Button>
//             <Dropdown.Popover>
//                <DropdownTrigger>
//               <Avatar

//                 as="button"
//                 className="transition-transform"
//                 src={session?.user?.image}
//                 name={session?.user?.name}
//               />
//             </DropdownTrigger>

//               <DropdownItem key="dashboard">
//                 Dashboard
//               </DropdownItem>

//               <DropdownItem key="profile">
//                 My Profile
//               </DropdownItem>

//               <DropdownItem
//                 key="logout"
//                 color="danger"
//                 className="text-danger"
//                 onPress={handleLogout}
//               >
//                 Logout
//               </DropdownItem>
//             <>DropdownMenu</>
//             </Dropdown.Popover>
//           </Dropdown>
//         )}
//       </nav>
//     </header>
//   );
// }
"use client";
import {ArrowRightFromSquare, Gear, Persons} from "@gravity-ui/icons";
import { Label} from "@heroui/react";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@heroui/react";

export default function Navbar() {
  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.href = "/";
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto h-20 px-5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-3xl font-black">
          Skill<span className="text-blue-600">Swap</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/browse-tasks">Browse Tasks</Link>
          <Link href="/browse-freelancers">Browse Freelancers</Link>
        </div>

        {/* Right Side */}
        {!session ? (
          <div className="flex gap-3">
            <Button as={Link} href="/auth/login" variant="light">
              Login
            </Button>

            <Button as={Link} href="/auth/register" color="primary">
              Register
            </Button>
          </div>
        ) : (
          <Dropdown>
            <Dropdown.Trigger className="rounded-full">
              <Avatar>
                <Avatar.Image
                  alt="Junior Garcia"
                  src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                />
                <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
              </Avatar>
            </Dropdown.Trigger>
            <Dropdown.Popover>
              <div className="px-3 pt-3 pb-1">
                <div className="flex items-center gap-2">
                  <Avatar size="sm">
                    <Avatar.Image
                      // alt="Jane"
                      // src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                      // alt={session?.user?.name || "User Avatar"}
                      // src={session?.user?.image || "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"}
                      
                    />
                    <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                  </Avatar>
                  <div className="flex flex-col gap-0">
                    <p className="text-sm leading-5 font-medium">Jane Doe</p>
                    <p className="text-xs leading-none text-muted">jane@example.com</p>
                  </div>
                </div>
              </div>
              <Dropdown.Menu>
                <Dropdown.Item id="dashboard" textValue="Dashboard">
                  <Label>Dashboard</Label>
                </Dropdown.Item>
                <Dropdown.Item id="profile" textValue="Profile">
                  <Label>Profile</Label>
                </Dropdown.Item>
                <Dropdown.Item id="settings" textValue="Settings">
                  <div className="flex w-full items-center justify-between gap-2">
                    <Label>Settings</Label>
                    <Gear className="size-3.5 text-muted" />
                  </div>
                </Dropdown.Item>
                <Dropdown.Item id="new-project" textValue="New project">
                  <div className="flex w-full items-center justify-between gap-2">
                    <Label>Create Team</Label>
                    <Persons className="size-3.5 text-muted" />
                  </div>
                </Dropdown.Item>
                <Dropdown.Item id="logout" textValue="Logout" variant="danger" onPress={handleLogout}>
                  <div className="flex w-full items-center justify-between gap-2">
                    <Label>Log Out</Label>
                    <ArrowRightFromSquare className="size-3.5 text-danger" />
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        )}
      </nav>
    </header>
  );
}
