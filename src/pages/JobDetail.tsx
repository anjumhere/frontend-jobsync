import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../lib/api";
import { errMsg, inputCls } from "../lib/helpers";
import { useAuth } from "../context/AuthContext";
import CompanyLogo from "../components/CompanyLogo";
import { getCompany, formatSalary, timeAgo } from "../lib/format";
import type { ApiResponse, Job } from "../types";

export default function JobDetail() {
  const { id } = useParams();
  const { user } = useAuth();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [coverNote, setCoverNote] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    api
      .get<ApiResponse<Job>>(`/jobs/${id}`)
      .then((r) => setJob(r.data.data))
      .catch(() => setJob(null))
      .finally(() => setLoading(false));
  }, [id]);

  const run = async (fn: () => Promise<unknown>, ok: string) => {
    try {
      await fn();
      setMsg(ok);
    } catch (e) {
      setMsg(errMsg(e));
    }
  };

  if (loading)
    return (
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="h-64 animate-pulse rounded-2xl bg-slate-200/70" />
      </div>
    );
  if (!job)
    return <p className="py-20 text-center text-slate-500">Job not found.</p>;

  const company = getCompany(job);
  const salary = formatSalary(job);

  return (
    <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 lg:grid-cols-[1fr_340px]">
      <div>
        <div className="flex items-center gap-4">
          <CompanyLogo company={company} size="h-14 w-14" />
          <div>
            {company && (
              <Link
                to={`/companies/${company._id}`}
                className="font-semibold text-pink-600 hover:underline"
              >
                {company.name}
              </Link>
            )}
            <p className="text-sm text-slate-500">
              {job.location} · {timeAgo(job.createdAt)}
            </p>
          </div>
        </div>
        <h1 className="mt-6 text-4xl font-bold text-slate-950">{job.title}</h1>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-md bg-pink-50 px-3 py-1 font-mono text-xs uppercase text-pink-700">
            {job.jobType}
          </span>
          {salary && (
            <span className="rounded-md bg-slate-100 px-3 py-1 font-mono text-xs">
              {salary}
            </span>
          )}
          {!job.isActive && (
            <span className="rounded-md bg-red-50 px-3 py-1 font-mono text-xs text-red-600">
              CLOSED
            </span>
          )}
        </div>
        <h2 className="mt-10 text-xl font-semibold">About the role</h2>
        <p className="mt-3 whitespace-pre-line text-slate-600">
          {job.description}
        </p>
        {job.requirements?.length > 0 && (
          <>
            <h2 className="mt-8 text-xl font-semibold">Requirements</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
              {job.requirements.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6">
        {user ? (
          <div className="space-y-3">
            <textarea
              className={inputCls}
              rows={4}
              placeholder="Cover note (optional)"
              value={coverNote}
              onChange={(e) => setCoverNote(e.target.value)}
            />
            <button
              disabled={!job.isActive}
              onClick={() =>
                run(
                  () => api.post(`/applications/${job._id}`, { coverNote }),
                  "Application sent!",
                )
              }
              className="w-full rounded-full bg-pink-600 py-3 font-semibold text-white hover:bg-pink-700 disabled:opacity-50"
            >
              Apply now
            </button>
            <button
              onClick={() =>
                run(
                  () => api.post(`/users/saved-jobs/${job._id}`),
                  "Job saved.",
                )
              }
              className="w-full rounded-full border border-slate-300 py-3 font-semibold hover:bg-slate-50"
            >
              Save job
            </button>
            {msg && <p className="text-sm text-slate-600">{msg}</p>}
          </div>
        ) : (
          <p className="text-sm text-slate-600">
            <Link to="/login" className="font-semibold text-pink-600">
              Log in
            </Link>{" "}
            to apply or save this job.
          </p>
        )}
      </aside>
    </div>
  );
}
