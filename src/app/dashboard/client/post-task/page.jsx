"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function PostTaskPage() {
  const [loading, setLoading] = useState(false);

  const { data: session } = authClient.useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const taskData = {
      title: form.title.value,
      category: form.category.value,
      description: form.description.value,
      budget: Number(form.budget.value),
      deadline: form.deadline.value,

      clientName: session?.user?.name,
      clientEmail: session?.user?.email,

      status: "open",
      createdAt: new Date(),
    };

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      });

      const data = await response.json();

      if (data.insertedId) {
        alert("Task created successfully!");
        form.reset();
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Post a Task
        </h1>

        <p className="text-gray-500 mt-2">
          Publish a new task for freelancers.
        </p>
      </div>

      <div className="bg-white rounded-2xl border p-6 shadow-sm">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block mb-2 font-medium">
              Task Title
            </label>

            <input
              type="text"
              name="title"
              required
              placeholder="Need a React Developer"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Category
            </label>

            <select
              name="category"
              required
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">
                Select Category
              </option>

              <option value="Web Development">
                Web Development
              </option>

              <option value="Mobile App">
                Mobile App
              </option>

              <option value="UI/UX Design">
                UI/UX Design
              </option>

              <option value="Graphic Design">
                Graphic Design
              </option>

              <option value="Content Writing">
                Content Writing
              </option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Budget (USD)
            </label>

            <input
              type="number"
              name="budget"
              min="1"
              required
              placeholder="200"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Deadline Date
            </label>

            <input
              type="date"
              name="deadline"
              required
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              required
              placeholder="Describe your task..."
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading
              ? "Creating..."
              : "Post Task"}
          </button>
        </form>
      </div>
    </div>
  );
}