import type { Application, Company, Job, User } from "../types";

const stamps = {
  createdAt: "2026-10-01T10:00:00.000Z",
  updatedAt: "2026-10-01T10:00:00.000Z",
};

export const mockUser: User = {
  _id: "u1",
  fullName: "Sara Khan",
  email: "sara@example.com",
  headline: "Full-stack developer · React · Node.js",
  bio: "I build clean, fast web apps with the MERN stack. Currently looking for my first developer role.",
  skills: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind"],
  savedJobs: ["j2", "j4"],
  ...stamps,
};

export const mockCompanies: Company[] = [
  {
    _id: "c1",
    owner: "u1",
    name: "Nexa Labs",
    industry: "Software",
    location: "Islamabad",
    website: "https://nexa.example.com",
    description: "We build developer tools used by teams across the region.",
    ...stamps,
  },
  {
    _id: "c2",
    owner: "u1",
    name: "Orbit Pay",
    industry: "Fintech",
    location: "Lahore",
    website: "https://orbitpay.example.com",
    description: "Payments infrastructure for small businesses.",
    ...stamps,
  },
  {
    _id: "c3",
    owner: "u2",
    name: "Peak Studio",
    industry: "Design",
    location: "Gilgit (Remote)",
    description: "A small design studio doing brand and web work.",
    ...stamps,
  },
];

const job = (
  id: string,
  company: Company,
  title: string,
  jobType: Job["jobType"],
  location: string,
  min: number,
  max: number,
): Job => ({
  _id: id,
  company,
  title,
  jobType,
  location,
  description: `We are looking for a ${title} to join ${company.name}. You will work closely with a small team and ship features every week.`,
  requirements: [
    "2+ years of experience",
    "Strong communication",
    "Portfolio or GitHub",
  ],
  salaryMin: min,
  salaryMax: max,
  isActive: true,
  ...stamps,
});

export const mockJobs: Job[] = [
  job(
    "j1",
    mockCompanies[0],
    "Frontend Developer (React)",
    "full-time",
    "Islamabad",
    90000,
    150000,
  ),
  job(
    "j2",
    mockCompanies[0],
    "Backend Developer (Node.js)",
    "full-time",
    "Remote",
    100000,
    160000,
  ),
  job(
    "j3",
    mockCompanies[1],
    "Junior Full-stack Developer",
    "full-time",
    "Lahore",
    70000,
    110000,
  ),
  job(
    "j4",
    mockCompanies[1],
    "QA Intern",
    "internship",
    "Lahore",
    25000,
    40000,
  ),
  job(
    "j5",
    mockCompanies[2],
    "UI/UX Designer",
    "contract",
    "Remote",
    80000,
    120000,
  ),
  job(
    "j6",
    mockCompanies[2],
    "Content Writer",
    "part-time",
    "Remote",
    30000,
    50000,
  ),
];

export const mockApplications: Application[] = [
  {
    _id: "a1",
    job: mockJobs[0],
    applicant: "u1",
    status: "applied",
    resume: "#",
    coverNote: "I would love to join your team.",
    ...stamps,
  },
  {
    _id: "a2",
    job: mockJobs[2],
    applicant: "u1",
    status: "reviewed",
    resume: "#",
    ...stamps,
  },
  {
    _id: "a3",
    job: mockJobs[4],
    applicant: "u1",
    status: "accepted",
    resume: "#",
    ...stamps,
  },
  {
    _id: "a4",
    job: mockJobs[3],
    applicant: "u1",
    status: "rejected",
    resume: "#",
    ...stamps,
  },
];
