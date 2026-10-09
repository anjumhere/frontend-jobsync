const jobs = [
  {
    initials: "v",
    company: "Vercel",
    role: "Frontend Engineer",
    location: "Remote · Worldwide",
    salary: "$100k–140k",
    color: "bg-black text-white",
    tag: "ENGINEERING",
  },
  {
    initials: "F",
    company: "Figma",
    role: "Product Designer",
    location: "Remote · US",
    salary: "$90k–125k",
    color: "bg-[#f1e9ff] text-[#8247e5]",
    tag: "DESIGN",
  },
  {
    initials: "S",
    company: "Stripe",
    role: "Software Engineer",
    location: "Hybrid · New York",
    salary: "$120k–165k",
    color: "bg-[#635bff] text-white",
    tag: "ENGINEERING",
  },
];

export default function Candidate() {
  return (
    <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[28px] border border-rose-100 bg-[radial-gradient(ellipse_at_top_right,_rgba(251,207,232,0.5),_transparent_45%),linear-gradient(145deg,#fff9fb_0%,#fff_70%)] p-6 shadow-[0_24px_70px_rgba(190,24,93,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(190,24,93,0.12)] sm:p-8">
      <div className="mb-5 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#e52270]" />
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d81b65]">
          For candidates
        </span>
      </div>

      <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.045em] text-[#101719] sm:text-[36px]">
        Work on
        <br />
        <span className="font-normal italic text-[#e52270]">what matters.</span>
      </h2>

      <p className="mt-4 max-w-[360px] text-sm leading-6 text-[#657074]">
        Find ambitious teams, meaningful work, and opportunities that match
        where you want to go.
      </p>

      <a
        href="/jobs"
        className="mt-6 inline-flex w-fit items-center gap-3 rounded-full bg-[#e52270] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200/60 transition hover:bg-[#c9165d]"
      >
        Explore opportunities
        <span className="text-lg transition-transform group-hover:translate-x-1">
          →
        </span>
      </a>

      <div className="mt-8 flex-1 rounded-2xl border border-[#ece8ea] bg-white p-3 shadow-[0_10px_35px_rgba(28,25,23,0.04)] sm:p-4">
        <div className="flex items-center justify-between gap-2 border-b border-[#f0edef] px-1 pb-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#999096]">
              Handpicked for you
            </p>
            <p className="mt-1 text-sm font-semibold text-[#20272a]">
              Open opportunities
            </p>
          </div>

          <span className="rounded-full bg-pink-50 px-2.5 py-1.5 text-[10px] font-semibold text-[#d81b65]">
            TOP PICKS
          </span>
        </div>

        <div className="divide-y divide-[#f1edef]">
          {jobs.map((job) => (
            <div
              key={job.company}
              className="group/job flex items-center gap-3 rounded-xl px-1 py-4 transition hover:bg-[#fff7fa] sm:px-2"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-base font-bold ${job.color}`}
              >
                {job.initials}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold text-[#182124]">
                  {job.role}
                </p>

                <p className="mt-1 truncate text-[11px] text-[#85888d]">
                  {job.company} · {job.location}
                </p>

                <span className="mt-2 inline-flex rounded-md bg-[#f5f3f4] px-2 py-1 text-[9px] font-semibold tracking-wide text-[#777279]">
                  {job.tag}
                </span>
              </div>

              <div className="shrink-0 text-right">
                <span className="block text-[10px] font-bold text-[#252a2d] sm:text-xs">
                  {job.salary}
                </span>
                <span className="mt-2 inline-block text-[10px] font-semibold text-[#d81b65] opacity-80 transition group-hover/job:opacity-100">
                  View role →
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-1 rounded-xl bg-[#fff6f9] px-3 py-3 text-center">
          <p className="text-xs font-medium text-[#a54b70]">
            Your next chapter is out there.
          </p>
        </div>
      </div>

      <p className="mt-5 text-center text-[10px] tracking-wide text-[#b0a5ab]">
        GOOD WORK. GOOD PEOPLE. BETTER FUTURES.
      </p>
    </article>
  );
}
