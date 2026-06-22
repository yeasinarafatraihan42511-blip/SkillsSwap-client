export default function ClientProfilePage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">
        My Profile
      </h1>

      <div className="bg-white p-6 rounded-xl border">
        <form className="space-y-5">

          <div>
            <label className="block mb-2 font-medium">
              Name
            </label>

            <input
              type="text"
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Photo URL
            </label>

            <input
              type="text"
              className="w-full border rounded-lg px-4 py-3"
              placeholder="https://..."
            />
          </div>

          <button
            type="submit"
            className="px-5 py-3 bg-blue-600 text-white rounded-lg"
          >
            Update Profile
          </button>

        </form>
      </div>
    </div>
  );
}