const items = [
  {
    n: "01",
    label: "Post jobs",
    title: "Post once. Reach every candidate.",
    text: "Create a company, add a job with salary, type and requirements, and it goes live instantly.",
  },
  {
    n: "02",
    label: "Your company page",
    title: "Own your hiring brand.",
    text: "Add a logo, website and description. Only you can edit your company and its jobs.",
  },
  {
    n: "03",
    label: "Applications",
    title: "Move candidates through the pipeline.",
    text: "Review each resume and mark applications as reviewed, accepted or rejected.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-pink-400">
            For companies
          </p>
          <h2 className="mt-4 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Build the team that{" "}
            <span className="italic text-pink-300">defines what's next.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-slate-400">
            Anyone can create a company and hire. Ownership is the only
            permission you need.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="/companies/new"
              className="rounded-full bg-pink-600 px-6 py-3 font-semibold hover:bg-pink-500"
            >
              Find your next hire →
            </a>
            <a
              href="/companies"
              className="rounded-full border border-white/30 px-6 py-3 font-semibold hover:bg-white/10"
            >
              Browse companies
            </a>
          </div>
        </div>
        <div className="divide-y divide-white/10">
          {items.map((i) => (
            <div key={i.n} className="py-6 first:pt-0">
              <p className="font-mono text-xs uppercase tracking-widest text-pink-400">
                {i.n} &nbsp; {i.label}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{i.title}</h3>
              <p className="mt-2 text-slate-400">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
