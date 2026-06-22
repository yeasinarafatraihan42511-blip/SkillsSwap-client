"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
const pathname = usePathname();
  if(pathname.includes('dashboard')){
    return null;
  }

return ( <footer className="border-t mt-24"> <div className="max-w-7xl mx-auto px-6 py-12"> <div className="grid md:grid-cols-3 gap-10">

```
      <div>
        <h2 className="text-3xl font-black">Skill<span className="text-blue-500">Swap</span></h2>

        <p className="mt-3 text-default-500">
          Connect with skilled freelancers and get your tasks completed
          quickly and professionally.
        </p>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Quick Links</h3>

        <div className="flex flex-col gap-2">
          <Link href="/">Home</Link>
          <Link href="/browse-tasks">Browse Tasks</Link>
          <Link href="/browse-freelancers">Browse Freelancers</Link>
          <Link href="/auth/login">Login</Link>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Contact</h3>

        <p>support@skillswap.com</p>

        <div className="flex gap-4 mt-4 text-xl">
          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </div>

    <div className="border-t mt-8 pt-6 text-center text-default-500">
      © {new Date().getFullYear()} SkillSwap. All Rights Reserved.
    </div>
  </div>
</footer>



);
}
