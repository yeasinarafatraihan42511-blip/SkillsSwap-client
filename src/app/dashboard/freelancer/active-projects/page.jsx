export default function ActiveProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Active Projects
      </h1>

      <div className="bg-white border rounded-xl p-6">
        <h2 className="text-xl font-semibold">
          Build React Website
        </h2>

        <p className="mt-2">
          Status: In Progress
        </p>

        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg">
          Submit Deliverable
        </button>
      </div>
    </div>
  );
}