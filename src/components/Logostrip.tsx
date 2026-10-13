const logos = [
  "Vercel",
  "Figma",
  "Stripe",
  "Notion",
  "Linear",
  "Supabase",
  "Ramp",
  "Loom",
  "Retool",
  "Mercury",
];

export default function LogoStrip() {
  const row = [...logos, ...logos];
  return (
    <section
      className="mx-auto mt-24 max-w-310"
      aria-label="Companies hiring on Hirely"
    >
      <p className="text-center text-xs font-medium text-[#8a9094]">
        Teams hiring right now
      </p>

      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="logo-track flex w-max gap-12">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-xl font-semibold tracking-[-0.04em] text-[#b6bcc0]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes logo-scroll { to { transform: translateX(-50%); } }
        .logo-track { animation: logo-scroll 30s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .logo-track { animation: none; } }
      `}</style>
    </section>
  );
}
