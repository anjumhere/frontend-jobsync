const categories = [
  {
    name: "Engineering",
    count: "12,400 open roles",
    href: "/jobs?role=engineering",
  },
  { name: "Design", count: "3,100 open roles", href: "/jobs?role=design" },
  { name: "Product", count: "2,700 open roles", href: "/jobs?role=product" },
  {
    name: "Marketing",
    count: "4,200 open roles",
    href: "/jobs?role=marketing",
  },
  { name: "Sales", count: "5,900 open roles", href: "/jobs?role=sales" },
  { name: "Data & AI", count: "2,300 open roles", href: "/jobs?role=data" },
  {
    name: "Operations",
    count: "1,800 open roles",
    href: "/jobs?role=operations",
  },
  {
    name: "Customer success",
    count: "1,500 open roles",
    href: "/jobs?role=support",
  },
];

export default function Categories() {
  return (
    <section className="mx-auto mt-28 max-w-[1240px]">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.05em] text-[#101719] sm:text-5xl">
          Browse by{" "}
          <span className="font-normal italic text-[#e52270]">role.</span>
        </h2>
        <a
          href="/jobs"
          className="text-sm font-semibold text-[#d81b65] hover:underline"
        >
          See all jobs →
        </a>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map((c) => (
          <a
            key={c.name}
            href={c.href}
            className="group rounded-2xl border border-[#ece8ea] bg-white p-5 transition hover:-translate-y-0.5 hover:border-pink-200 hover:bg-[#fff7fa]"
          >
            <p className="text-sm font-semibold text-[#182124]">{c.name}</p>
            <p className="mt-1 text-xs text-[#85888d]">{c.count}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
