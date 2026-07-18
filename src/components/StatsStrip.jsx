const stats = [
  {
    value: "3+",
    label: "Projects Completed",
  },
  {
    value: "10+",
    label: "Technologies Learned",
  },
  {
    value: "100%",
    label: "Commitment to Learning",
  },
];

function StatsStrip() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300"
            >
              <h2 className="text-4xl font-bold text-blue-600">
                {stat.value}
              </h2>
              <p className="mt-2 text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsStrip;