const cols = [
  {
    title: "Candidates",
    links: [
      ["Browse jobs", "/jobs"],
      ["Companies", "/companies"],
      ["Saved jobs", "/saved-jobs"],
      ["My applications", "/my-applications"],
    ],
  },
  {
    title: "Employers",
    links: [
      ["Create a company", "/companies/new"],
      ["My companies", "/my-companies"],
      ["Post a job", "/jobs/new"],
    ],
  },
  {
    title: "Account",
    links: [
      ["Log in", "/login"],
      ["Sign up", "/register"],
      ["Profile", "/profile"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="bg-gradient-to-b from-pink-900/40 to-transparent px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-white">
          What's your <span className="italic text-pink-300">next move?</span>
        </h2>
        <p className="mt-3 text-slate-400">
          The right job, or the right hire. Both start here.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <a
            href="/register"
            className="rounded-full bg-pink-600 px-6 py-3 font-semibold text-white hover:bg-pink-500"
          >
            Sign up to find a job →
          </a>
          <a
            href="/companies/new"
            className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
          >
            Start hiring
          </a>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <p className="text-2xl font-extrabold text-white">
            jobsync<span className="text-pink-500">:</span>
          </p>
          <p className="mt-3 text-sm text-slate-400">
            A job board where anyone can create a company and hire.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-white">
              {c.title}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {c.links.map(([text, href]) => (
                <li key={text}>
                  <a href={href} className="hover:text-white">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="border-t border-white/10 py-6 text-center text-sm text-slate-500">
        © 2026 JobSync. Built by Anjum.
      </p>
    </footer>
  );
}
