import type { Company } from "../types";

type Props = { company: Company | null; size?: string };

export default function CompanyLogo({ company, size = "h-12 w-12" }: Props) {
  if (company?.logo) {
    return (
      <img
        src={company.logo}
        alt={company.name}
        className={`${size} rounded-xl border border-slate-200 object-cover`}
      />
    );
  }
  return (
    <div
      className={`${size} flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-indigo-500 font-bold text-white`}
    >
      {company?.name?.[0]?.toUpperCase() ?? "?"}
    </div>
  );
}
