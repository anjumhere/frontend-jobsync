import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../lib/api";
import { pickList } from "../lib/helpers";
import type { ApiResponse, Company, Job } from "../types";
import CompanyLogo from "../components/CompanyLogo";
import JobCard from "../components/JobCard";

export default function CompanyDetail() {
  const { id } = useParams();
  const [company, setCompany] = useState<Company | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get<ApiResponse<Company>>(`/companies/${id}`),
      api.get(`/jobs/company/${id}`),
    ])
      .then(([c, j]) => {
        setCompany(c.data.data);
        setJobs(pickList<Job>(j.data.data));
      })
      .catch(() => setCompany(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="h-48 animate-pulse rounded-2xl bg-slate-200/70" />
      </div>
    );
  if (!company)
    return (
      <p className="py-20 text-center text-slate-500">Company not found.</p>
    );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-center gap-5">
        <CompanyLogo company={company} size="h-20 w-20" />
        <div>
          <h1 className="text-4xl font-bold text-slate-950">{company.name}</h1>
          <p className="text-slate-500">
            {[company.industry, company.location].filter(Boolean).join(" · ")}
          </p>
          {company.website && (
            <a
              href={company.website}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-pink-600 hover:underline"
            >
              {company.website}
            </a>
          )}
        </div>
      </div>
      <p className="mt-6 max-w-3xl text-slate-600">{company.description}</p>
      <h2 className="mt-12 text-2xl font-bold">Open roles ({jobs.length})</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((j) => (
          <JobCard key={j._id} job={{ ...j, company }} />
        ))}
      </div>
      {jobs.length === 0 && (
        <p className="mt-6 text-slate-500">No open roles right now.</p>
      )}
    </div>
  );
}
