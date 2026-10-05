import type { Job } from "../types";
import CompanyLogo from "./CompanyLogo";
import { getCompany, formatSalary, timeAgo } from "../lib/format";

export default function JobCard({ job }: { job: Job }) {
  const company = getCompany(job);
  const salary = formatSalary(job);
  return (
    <a
      href={`/jobs/${job._id}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-100"
    >
      <div className="flex items-center gap-3">
        <CompanyLogo company={company} />
        <div className="min-w-0">
          <p className="truncate font-semibold text-slate-950">
            {company?.name ?? "Company"}
          </p>
          <p className="truncate text-sm text-slate-500">
            {company?.industry ?? "Hiring now"}
          </p>
        </div>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-950 group-hover:text-pink-600">
        {job.title}
      </h3>
      <p className="mt-1 text-sm text-slate-500">{job.location}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-md bg-pink-50 px-2.5 py-1 font-mono text-xs uppercase text-pink-700">
          {job.jobType}
        </span>
        {salary && (
          <span className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-700">
            {salary}
          </span>
        )}
      </div>
      <p className="mt-auto pt-6 text-xs text-slate-400">
        {timeAgo(job.createdAt)}
      </p>
    </a>
  );
}
