
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
import { usePathname } from "next/navigation";
import { User } from "lucide-react";

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const pathname = usePathname();
  if(pathname.includes('dashboard')){
    return null;
  }

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
            {/* <Button as={Link} href="/auth/login" variant="light">
              Login
            </Button>
            <Link href="/auth/login" variant="light">
              Login
            </Link>

            <Button as={Link} href="/auth/register" color="primary">
              Register
            </Button> */}
             <>
              <Link
                href="auth/login"
                className="px-4 py-1.5 border-2 border-fuchsia-500 rounded-md hover:bg-gray-50"
              >
                Login
              </Link>
              <Link
                href="auth/register"
                className="px-4 py-1.5 bg-red-500 text-white rounded-md hover:bg-gray-800"
              >
                Register
              </Link>
            </>
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
                  <Link href={`/dashboard/${session?.user?.role}`}>
                    <Label>Dashboard</Label>
                  </Link>
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
