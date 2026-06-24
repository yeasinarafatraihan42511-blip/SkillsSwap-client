"use client";

import { use } from "react";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function TaskDetailsPage({ params }) {
  const { id } = use(params);

  const { data: session } = authClient.useSession();

  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, [id]);

  const handleProposalSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const proposalData = {
      taskId: task._id,
      taskTitle: task.title,

      clientEmail: task.clientEmail,
      clientName: task.clientName,

      freelancerEmail:
        session?.user?.email,

      freelancerName:
        session?.user?.name,

      proposedBudget: Number(
        form.proposedBudget.value
      ),

      estimatedDays: Number(
        form.estimatedDays.value
      ),

      coverLetter:
        form.coverLetter.value,

      status: "pending",

      createdAt: new Date(),
    };

    try {
      setLoading(true);

      const res = await fetch(
        "http://localhost:5000/proposals",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            proposalData
          ),
        }
      );

      const data = await res.json();

      if (data.insertedId) {
        toast.success(
          "Proposal submitted successfully"
        );

        form.reset();
      }
    } catch (error) {
      console.log(error);

      toast.error(
        "Failed to submit proposal"
      );
    } finally {
      setLoading(false);
    }
  };

  if (!task) {
    return (
      <div className="flex justify-center items-center h-96">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">

      <div className="grid lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2">

          <div className="bg-white rounded-3xl border shadow-sm p-8">

            <div className="flex flex-wrap items-center gap-3">

              <h1 className="text-3xl font-bold">
                {task.title}
              </h1>

              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                {task.status}
              </span>

            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">

              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-gray-500 text-sm">
                  Budget
                </p>

                <h3 className="text-2xl font-bold">
                  ${task.budget}
                </h3>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-gray-500 text-sm">
                  Category
                </p>

                <h3 className="font-semibold">
                  {task.category}
                </h3>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-gray-500 text-sm">
                  Deadline
                </p>

                <h3 className="font-semibold">
                  {task.deadline}
                </h3>
              </div>

            </div>

            <div className="mt-10">
              <h2 className="text-xl font-bold mb-4">
                Description
              </h2>

              <p className="text-gray-600 leading-7">
                {task.description}
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>

          <div className="bg-white rounded-3xl border shadow-sm p-6">

            <h2 className="text-2xl font-bold mb-5">
              Submit Proposal
            </h2>

            <form
              onSubmit={
                handleProposalSubmit
              }
              className="space-y-4"
            >

              <div>
                <label className="font-medium">
                  Proposed Budget
                </label>

                <input
                  type="number"
                  name="proposedBudget"
                  required
                  className="w-full border rounded-xl px-4 py-3 mt-2"
                />
              </div>

              <div>
                <label className="font-medium">
                  Estimated Days
                </label>

                <input
                  type="number"
                  name="estimatedDays"
                  required
                  className="w-full border rounded-xl px-4 py-3 mt-2"
                />
              </div>

              <div>
                <label className="font-medium">
                  Cover Letter
                </label>

                <textarea
                  rows="5"
                  name="coverLetter"
                  required
                  className="w-full border rounded-xl px-4 py-3 mt-2"
                />
              </div>

              <button
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700"
              >
                {loading
                  ? "Submitting..."
                  : "Submit Proposal"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}