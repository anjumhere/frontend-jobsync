import { useEffect, useState } from "react";
import { api } from "../lib/api";
import type { ApiResponse, Job, JobListData } from "../types";
import Hero from "../components/Hero";
import FeaturedJobs from "../components/FeaturedJobs";
import Features from "../components/Features";
import BrowseTags from "../components/BrowseTags";

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    api
      .get<ApiResponse<JobListData>>("/jobs", { params: { limit: 6 } })
      .then((res) => setJobs(res.data.data.job))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Hero jobs={jobs} />
      <FeaturedJobs jobs={jobs} loading={loading} error={error} />
      <Features />
      <BrowseTags />
    </>
  );
}
