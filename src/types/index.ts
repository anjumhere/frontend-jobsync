export interface ApiResponse<T> {
  statusCode: number;
  data: T;
  message: string;
  success: boolean;
}

export interface User {
  _id: string;
  fullName: string;
  email: string;
  avatar?: string;
  coverImage?: string;
  headline?: string;
  bio?: string;
  skills: string[];
  resume?: string;
  savedJobs: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Company {
  _id: string;
  owner: string | User; // populated on GET /companies/:id
  name: string;
  description?: string;
  logo?: string;
  website?: string;
  industry?: string;
  location?: string;
  createdAt: string;
  updatedAt: string;
}

export type JobType =
  "full-time" | "part-time" | "contract" | "internship" | "remote";

export interface Job {
  _id: string;
  company: string | Company; // may be populated
  title: string;
  description: string;
  requirements: string[];
  location: string;
  jobType: JobType;
  salaryMin?: number;
  salaryMax?: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export type ApplicationStatus =
  "applied" | "reviewed" | "accepted" | "rejected";

export interface Application {
  _id: string;
  job: string | Job;
  applicant: string | User;
  status: ApplicationStatus;
  resume: string;
  coverNote?: string;
  createdAt: string;
  updatedAt: string;
}
