"use client";

export default function FreelancerProfilePage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">
        Edit Profile
      </h1>

      <div className="bg-white border rounded-xl p-6">
        <form className="space-y-5">

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block mb-2 font-medium">
              Profile Photo URL
            </label>

            <input
              type="text"
              placeholder="https://example.com/photo.jpg"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block mb-2 font-medium">
              Skills
            </label>

            <input
              type="text"
              placeholder="React, Next.js, MongoDB"
              className="w-full border rounded-lg px-4 py-3"
            />

            <p className="text-sm text-gray-500 mt-1">
              Separate skills with commas.
            </p>
          </div>

          {/* Hourly Rate */}
          <div>
            <label className="block mb-2 font-medium">
              Hourly Rate (USD)
            </label>

            <input
              type="number"
              placeholder="25"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block mb-2 font-medium">
              Bio
            </label>

            <textarea
              rows={5}
              placeholder="Tell clients about yourself..."
              className="w-full border rounded-lg px-4 py-3 resize-none"
            />
          </div>

          <button
            type="submit"
            className="px-5 py-3 rounded-lg bg-blue-600 text-white"
          >
            Update Profile
          </button>

        </form>
      </div>
    </div>
  );
}