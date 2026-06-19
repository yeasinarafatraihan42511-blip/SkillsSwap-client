export default function WhyChooseUs() {
  const features = [
    {
      title: "Verified Freelancers",
      desc: "Work with trusted professionals.",
    },
    {
      title: "Secure Payments",
      desc: "Safe and transparent transactions.",
    },
    {
      title: "Fast Hiring",
      desc: "Get proposals within minutes.",
    },
  ];

  return (
    <section className="bg-base-200 py-24">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black">
            Why Choose SkillSwap
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 shadow"
            >
              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}