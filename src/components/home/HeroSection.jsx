"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border text-sm font-medium">
              Freelance Micro-Task Platform
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-black leading-tight">
              Get your tasks done by{" "}
              <span className="text-primary">
                skilled freelancers
              </span>
            </h1>

            <p className="mt-6 text-lg text-default-500 max-w-xl">
              Post small tasks, receive proposals from talented freelancers,
              hire the best candidate and complete projects securely.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/dashboard/client">
                <Button color="primary" size="lg">
                  Post a Task
                </Button>
              </Link>

              <Link href="/browse-tasks">
                <Button variant="bordered" size="lg">
                  Browse Tasks
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-5">
              
              <div className="p-6 rounded-3xl border bg-content1 shadow-lg">
                <h3 className="text-4xl font-black text-primary">
                  500+
                </h3>
                <p className="mt-2 text-default-500">
                  Tasks Completed
                </p>
              </div>

              <div className="p-6 rounded-3xl border bg-content1 shadow-lg">
                <h3 className="text-4xl font-black text-success">
                  200+
                </h3>
                <p className="mt-2 text-default-500">
                  Freelancers
                </p>
              </div>

              <div className="p-6 rounded-3xl border bg-content1 shadow-lg">
                <h3 className="text-4xl font-black text-warning">
                  $15K+
                </h3>
                <p className="mt-2 text-default-500">
                  Total Payout
                </p>
              </div>

              <div className="p-6 rounded-3xl border bg-content1 shadow-lg">
                <h3 className="text-4xl font-black text-danger">
                  98%
                </h3>
                <p className="mt-2 text-default-500">
                  Success Rate
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}