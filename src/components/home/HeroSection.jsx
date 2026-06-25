"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";

export default function HeroSection() {
  const { data: session } = authClient.useSession();

  const role = session?.user?.role;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute top-20 left-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="absolute bottom-10 right-20 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"></div>

      </div>

      <div className="max-w-7xl mx-auto px-5 py-20 lg:py-32">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border bg-white shadow-sm text-sm font-medium">
              🚀 Freelance Micro-Task Marketplace
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight tracking-tight">

              Build Faster With{" "}

              <span className="text-blue-600">
                Top Freelancers
              </span>

            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl leading-8">
              Post tasks, receive proposals, hire skilled freelancers,
              and complete projects securely with SkillSwap.
            </p>

            {/* CTA BUTTONS */}

            <div className="mt-10 flex flex-wrap gap-4">

              {role === "client" && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/dashboard/client/post-task">
                    <Button
                      color="primary"
                      size="lg"
                      className="px-8 font-semibold shadow-xl"
                    >
                      🚀 Post a Task
                    </Button>
                  </Link>
                </motion.div>
              )}

              {role === "freelancer" && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/browse-tasks">
                    <Button
                      color="primary"
                      size="lg"
                      className="px-8 font-semibold shadow-xl"
                    >
                      💼 Browse Tasks
                    </Button>
                  </Link>
                </motion.div>
              )}

              {!role && (
                <>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link href="/register">
                      <Button
                        color="primary"
                        size="lg"
                        className="px-8 font-semibold shadow-xl"
                      >
                        Get Started
                      </Button>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link href="/browse-tasks">
                      <Button
                        variant="bordered"
                        size="lg"
                        className="px-8 font-semibold"
                      >
                        Browse Tasks
                      </Button>
                    </Link>
                  </motion.div>
                </>
              )}

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-white border rounded-3xl p-6 shadow-xl">
                <h3 className="text-4xl font-black text-blue-600">
                  500+
                </h3>

                <p className="mt-2 text-slate-500">
                  Tasks Completed
                </p>
              </div>

              <div className="bg-white border rounded-3xl p-6 shadow-xl">
                <h3 className="text-4xl font-black text-green-600">
                  200+
                </h3>

                <p className="mt-2 text-slate-500">
                  Freelancers
                </p>
              </div>

              <div className="bg-white border rounded-3xl p-6 shadow-xl">
                <h3 className="text-4xl font-black text-yellow-500">
                  $15K+
                </h3>

                <p className="mt-2 text-slate-500">
                  Total Payout
                </p>
              </div>

              <div className="bg-white border rounded-3xl p-6 shadow-xl">
                <h3 className="text-4xl font-black text-red-500">
                  98%
                </h3>

                <p className="mt-2 text-slate-500">
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