// import {NextResponse} from 'next/server';
// import { auth } from '@/lib/auth'; // path to your auth file
// import {headers} from 'next/headers';
// export async function proxy(request) {
//     const session = await auth.api.getSession({
//         headers: await headers(),
//     })
//     console.log(session);
//     //  if(session?.user?.role == "freelancer" && session?.user?.plan === "free" ) {
//     //     return NextResponse.redirect(new URL('/pricing', request.url));
//     // }
//     if (!session) {
//         return NextResponse.redirect(new URL('/login', request.url));
//     }
// }
// export const config = {
//     // matcher: ['/dashboard/freelancer']
// };



import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const pathname = request.nextUrl.pathname;

  // Public Routes
  const publicRoutes = [
    "/",
    "/login",
    "/register",
    "/browse-tasks",
    "/browse-freelancers",
  ];

  if (
    publicRoutes.includes(pathname) ||
    pathname.startsWith("/auth")
  ) {
    return NextResponse.next();
  }

  // Dashboard Protection
  if (pathname.startsWith("/dashboard")) {
    if (!session) {
      return NextResponse.redirect(
        new URL("/auth/login", request.url)
      );
    }

    const role = session.user.role;

    // Client Routes
    if (
      pathname.startsWith("/dashboard/client") &&
      role !== "client"
    ) {
      return NextResponse.redirect(
        new URL("/", request.url)
      );
    }

    // Freelancer Routes
    if (
      pathname.startsWith("/dashboard/freelancer") &&
      role !== "freelancer"
    ) {
      return NextResponse.redirect(
        new URL("/", request.url)
      );
    }

    // Admin Routes
    if (
      pathname.startsWith("/dashboard/admin") &&
      role !== "admin"
    ) {
      return NextResponse.redirect(
        new URL("/", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/browse-tasks",
    "/browse-freelancers",
  ],
};






