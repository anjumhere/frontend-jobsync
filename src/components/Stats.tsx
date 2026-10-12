const stats = [
  { value: "8M+", label: "Candidates on the platform" },
  { value: "130k", label: "Startups and growing teams" },
  { value: "5 days", label: "Median time to first reply" },
  { value: "$142k", label: "Average salary listed" },
];

export default function Stats() {
  return (
    <section className="mx-auto mt-24 max-w-[1240px]">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[28px] border border-[#f0ebed] bg-[#f0ebed] md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white px-6 py-8 text-center">
            <dt className="order-2 mt-2 text-xs leading-5 text-[#8a9094]">
              {s.label}
            </dt>
            <dd className="text-3xl font-semibold tracking-[-0.05em] text-[#101719] sm:text-4xl">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
