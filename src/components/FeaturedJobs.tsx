import type { Job } from "../types";
import JobCard from "./JobCard";

type Props = { jobs: Job[]; loading: boolean; error: boolean };

export default function FeaturedJobs({ jobs, loading, error }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="flex items-end justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-pink-600">
            Fresh openings
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-950">
            Latest jobs
          </h2>
        </div>
        <a
          href="/jobs"
          className="text-sm font-semibold text-pink-600 hover:underline"
        >
          View all →
        </a>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {loading &&
          Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-52 animate-pulse rounded-2xl bg-slate-200/70"
            />
          ))}
        {!loading && jobs.map((job) => <JobCard key={job._id} job={job} />)}
      </div>

      {error && (
        <p className="mt-8 text-center text-slate-500">
          Could not load jobs. Is the backend running?
        </p>
      )}
      {!loading && !error && jobs.length === 0 && (
        <p className="mt-8 text-center text-slate-500">
          No jobs yet. Be the first to post one.
        </p>
      )}
    </section>
  );
}
