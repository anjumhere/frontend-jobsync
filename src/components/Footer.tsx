const cols = [
  {
    title: "Candidates",
    links: ["Browse jobs", "Salary guide", "Remote jobs", "Career advice"],
  },
  {
    title: "Companies",
    links: ["Post a job", "Search talent", "Pricing", "Hiring guides"],
  },
  { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Cookies"] },
];

export default function Footer() {
  return (
    <footer className="mt-28 border-t border-[#f0ebed] bg-white">
      <div className="mx-auto grid max-w-310 gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_repeat(4,1fr)]">
        <div>
          <a
            href="/"
            className="text-lg font-semibold tracking-[-0.04em] text-[#101719]"
          >
            Hirely<span className="text-[#e52270]">.</span>
          </a>
          <p className="mt-3 max-w-55 text-sm leading-6 text-[#85888d]">
            Find your people. Find your place.
          </p>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <p className="text-sm font-semibold text-[#182124]">{c.title}</p>
            <ul className="mt-4 space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-[#657074] transition hover:text-[#101719]"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[#f0ebed] py-6 text-center text-xs text-[#a1a1aa]">
        © {new Date().getFullYear()} Hirely. All rights reserved.
      </div>
    </footer>
  );
}
