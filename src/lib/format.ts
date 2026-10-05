import type { Job, Company } from "../types";

export const getCompany = (job: Job): Company | null =>
  typeof job.company === "string" ? null : job.company;

export const formatSalary = (job: Job) => {
  const k = (n: number) => `${Math.round(n / 1000)}K`;
  if (job.salaryMin && job.salaryMax)
    return `${k(job.salaryMin)} – ${k(job.salaryMax)}`;
  if (job.salaryMin) return `From ${k(job.salaryMin)}`;
  return null;
};

export const timeAgo = (iso: string) => {
  const d = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  return d <= 0 ? "Today" : d === 1 ? "1 day ago" : `${d} days ago`;
};
