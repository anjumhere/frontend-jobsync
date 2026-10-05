import type { JobType } from "../types";

const types: JobType[] = [
  "full-time",
  "part-time",
  "contract",
  "internship",
  "remote",
];
const cities = ["Islamabad", "Lahore", "Karachi", "Gilgit", "Remote"];

function Row({
  label,
  tags,
}: {
  label: string;
  tags: { text: string; href: string }[];
}) {
  return (
    <div className="grid gap-3 py-5 sm:grid-cols-[160px_1fr]">
      <p className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <a
            key={t.text}
            href={t.href}
            className="rounded-full border border-slate-300 px-4 py-1.5 text-sm text-slate-700 transition hover:border-pink-500 hover:bg-pink-50 hover:text-pink-700"
          >
            {t.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function BrowseTags() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-3xl font-bold tracking-tight text-slate-950">
        Browse jobs
      </h2>
      <div className="mt-4 divide-y divide-slate-200 border-t border-slate-200">
        <Row
          label="By job type"
          tags={types.map((t) => ({ text: t, href: `/jobs?jobType=${t}` }))}
        />
        <Row
          label="By location"
          tags={cities.map((c) => ({
            text: `Jobs in ${c}`,
            href: `/jobs?location=${c}`,
          }))}
        />
      </div>
    </section>
  );
}
