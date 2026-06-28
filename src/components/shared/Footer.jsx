"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  const pathname = usePathname();

  if (pathname.includes("dashboard")) {
    return null;
  }

  return (
    <footer className="relative mt-24 border-t bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-black">
              Skill
              <span className="text-blue-600">
                Swap
              </span>
            </h2>

            <p className="mt-5 text-slate-600 leading-7 max-w-md">
              Connect with talented freelancers,
              post projects, receive proposals,
              and complete work securely through
              a modern freelance marketplace.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="w-11 h-11 rounded-full border bg-white flex items-center justify-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border bg-white flex items-center justify-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border bg-white flex items-center justify-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
              >
                <FaXTwitter size={18} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-slate-600">

              <Link
                href="/"
                className="hover:text-blue-600 transition"
              >
                Home
              </Link>

              <Link
                href="/browse-tasks"
                className="hover:text-blue-600 transition"
              >
                Browse Tasks
              </Link>

              <Link
                href="/browse-freelancers"
                className="hover:text-blue-600 transition"
              >
                Browse Freelancers
              </Link>

              <Link
                href="/auth/login"
                className="hover:text-blue-600 transition"
              >
                Login
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-slate-600">

              <p>
                📧 support@skillswap.com
              </p>

              <p>
                🌍 Worldwide Freelance Platform
              </p>

              <p>
                ⚡ Fast, Secure & Reliable
              </p>

            </div>

            <div className="mt-6 p-5 rounded-2xl bg-white border shadow-sm">
              <h4 className="font-semibold">
                Need Help?
              </h4>

              <p className="text-sm text-slate-500 mt-2">
                Our support team is available
                to assist clients and freelancers.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">

          <p>
            © {new Date().getFullYear()} SkillSwap.
            All Rights Reserved.
          </p>

          <div className="flex gap-5">
            <Link href="#">
              Privacy Policy
            </Link>

            <Link href="#">
              Terms of Service
            </Link>

            <Link href="#">
              Support
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}