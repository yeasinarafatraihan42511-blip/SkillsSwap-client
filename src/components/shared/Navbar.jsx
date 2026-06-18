"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto h-20 px-5 flex items-center justify-between">
        
        <Link href="/" className="text-3xl font-black">
          Skill<span className="text-blue-500">Swap</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/browse-tasks">Browse Tasks</Link>
          <Link href="/browse-freelancers">Browse Freelancers</Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="light">
            Login
          </Button>

          <Button color="primary">
            Dashboard
          </Button>
        </div>
      </nav>
    </header>
  );
}