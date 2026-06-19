export default function Statistics() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="text-center border rounded-3xl p-8">
            <h3 className="text-4xl font-black text-primary">
              5K+
            </h3>
            <p>Tasks Posted</p>
          </div>

          <div className="text-center border rounded-3xl p-8">
            <h3 className="text-4xl font-black text-success">
              2K+
            </h3>
            <p>Freelancers</p>
          </div>

          <div className="text-center border rounded-3xl p-8">
            <h3 className="text-4xl font-black text-warning">
              $50K+
            </h3>
            <p>Total Earnings</p>
          </div>

          <div className="text-center border rounded-3xl p-8">
            <h3 className="text-4xl font-black text-danger">
              98%
            </h3>
            <p>Client Satisfaction</p>
          </div>

        </div>
      </div>
    </section>
  );
}