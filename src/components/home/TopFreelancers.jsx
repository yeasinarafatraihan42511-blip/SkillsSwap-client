const freelancers = [
  {
    id: 1,
    name: "Sarah Johnson",
    skill: "UI/UX Designer",
    rating: 4.9,
    completed: 125,
    image: "https://i.pravatar.cc/300?img=1",
  },
  {
    id: 2,
    name: "David Smith",
    skill: "Full Stack Developer",
    rating: 4.8,
    completed: 98,
    image: "https://i.pravatar.cc/300?img=2",
  },
  {
    id: 3,
    name: "Emily Brown",
    skill: "Content Writer",
    rating: 4.7,
    completed: 140,
    image: "https://i.pravatar.cc/300?img=3",
  },
];

export default function TopFreelancers() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-24">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-black">
          Top Freelancers
        </h2>

        <p className="mt-3 text-gray-500">
          Meet our highest-rated professionals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {freelancers.map((freelancer) => (
          <div
            key={freelancer.id}
            className="border rounded-3xl p-6 hover:shadow-xl transition-all"
          >
            <img
              src={freelancer.image}
              alt={freelancer.name}
              className="w-24 h-24 rounded-full mx-auto object-cover"
            />

            <div className="text-center mt-4">
              <h3 className="text-xl font-bold">
                {freelancer.name}
              </h3>

              <p className="text-primary">
                {freelancer.skill}
              </p>

              <div className="mt-4 flex justify-center gap-6">
                <div>
                  <p className="font-bold">{freelancer.rating}</p>
                  <p className="text-sm text-gray-500">
                    Rating
                  </p>
                </div>

                <div>
                  <p className="font-bold">
                    {freelancer.completed}
                  </p>
                  <p className="text-sm text-gray-500">
                    Jobs
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}