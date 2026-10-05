import type { Job } from "../types";
import CompanyLogo from "./CompanyLogo";
import { getCompany, formatSalary } from "../lib/format";

const statuses = ["applied", "reviewed", "accepted", "rejected"];

export default function Hero({ jobs }: { jobs: Job[] }) {
  return (
    <section className="bg-gradient-to-b from-pink-50 via-white to-white">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-slate-950 sm:text-7xl">
          Where great companies
          <span className="block font-medium italic text-pink-600">
            meet great people.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600">
          Create a company, post jobs for free, or apply in one click. No
          admins, no gatekeepers. Anyone can hire.
        </p>

        <div className="mt-14 grid gap-6 text-left md:grid-cols-2">
          <div className="rounded-3xl bg-slate-950 p-8 text-white">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-pink-400">
              For companies
            </p>
            <h2 className="mt-3 text-4xl font-semibold">
              Find your <span className="italic text-pink-300">next hire.</span>
            </h2>
            <p className="mt-3 max-w-sm text-slate-400">
              Post a job in minutes and manage every applicant from one place.
            </p>
            <a
              href="/companies/new"
              className="mt-6 inline-block rounded-full bg-pink-600 px-6 py-3 font-semibold shadow-lg shadow-pink-600/30 hover:bg-pink-500"
            >
              Start hiring →
            </a>
            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-mono text-[11px] uppercase tracking-widest text-slate-400">
                Application pipeline
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {statuses.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-white/10 px-3 py-1 font-mono text-xs uppercase text-slate-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-pink-100 bg-gradient-to-br from-pink-50 to-white p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-pink-600">
              For candidates
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-slate-950">
              Find your <span className="italic text-pink-600">next job.</span>
            </h2>
            <p className="mt-3 max-w-sm text-slate-600">
              Apply directly to the people hiring. Your resume is saved with
              every application.
            </p>
            <a
              href="/jobs"
              className="mt-6 inline-block rounded-full bg-pink-600 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-600/30 hover:bg-pink-700"
            >
              Browse jobs →
            </a>
            <div className="mt-8 rounded-xl bg-white p-4 shadow-sm">
              <p className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
                Latest jobs · today
              </p>
              <div className="mt-3 divide-y divide-slate-100">
                {jobs.slice(0, 2).map((job) => {
                  const company = getCompany(job);
                  return (
                    <a
                      key={job._id}
                      href={`/jobs/${job._id}`}
                      className="flex items-center gap-3 py-3"
                    >
                      <CompanyLogo company={company} size="h-9 w-9" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-slate-900">
                          {job.title}
                        </p>
                        <p className="truncate text-xs text-slate-500">
                          {[company?.name, job.location, formatSalary(job)]
                            .filter(Boolean)
                            .join(" · ")}
                        </p>
                      </div>
                      <span className="rounded-md bg-pink-50 px-2 py-1 font-mono text-[10px] font-bold text-pink-600">
                        NEW
                      </span>
                    </a>
                  );
                })}
                {jobs.length === 0 && (
                  <p className="py-3 text-sm text-slate-400">
                    No jobs posted yet.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
