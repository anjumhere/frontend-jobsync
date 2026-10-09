import Company from "./CompanyCard";
import Candidate from "./CandidateCard";
export default function Hero() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#fffefe] px-5 pb-20 pt-16 text-[#101719] sm:px-8 sm:pt-20 lg:pt-24">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-pink-100/60 blur-[110px]" />
        <div className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-violet-100/40 blur-[120px]" />
        <div className="absolute left-1/2 top-[420px] h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-rose-50/70 blur-[100px]" />
      </div>

      {/* Floating notification: left */}
      <div className="pointer-events-none absolute left-[5%] top-[170px] hidden -rotate-3 items-center gap-2 rounded-full border border-black/[0.05] bg-white/90 px-3 py-2 shadow-[0_10px_40px_rgba(30,20,30,0.08)] xl:flex">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-xs text-emerald-500">
          ✓
        </span>
        <span className="text-[11px] font-semibold text-[#263033]">
          Interview booked
        </span>
        <span className="text-[10px] text-[#999399]">· just now</span>
      </div>

      {/* Floating notification: right */}
      <div className="pointer-events-none absolute right-[5%] top-[160px] hidden rotate-3 items-center gap-2 rounded-full border border-black/[0.05] bg-white/90 px-3 py-2 shadow-[0_10px_40px_rgba(30,20,30,0.08)] xl:flex">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#e7f8ed] text-[9px] font-bold text-[#159957]">
          C
        </span>
        <span className="text-[11px] font-semibold text-[#263033]">
          Great match
        </span>
        <span className="text-[10px] text-[#999399]">· new opportunity</span>
      </div>

      {/* Hero heading */}
      <section className="mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white/80 px-4 py-2 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e52270]" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8d6475] sm:text-xs">
            A better way to find your next move
          </span>
        </div>

        <h1 className="mx-auto max-w-4xl text-[42px] font-semibold leading-[1.04] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[82px]">
          Great people.
          <br />
          <span className="bg-gradient-to-r from-[#e52270] via-[#ee4386] to-[#ad55cb] bg-clip-text font-normal italic text-transparent">
            Extraordinary work.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#70787b] sm:text-base sm:leading-8">
          The next great company starts with the right people. Discover exciting
          opportunities or meet the talent that will take your business further.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-[#7d8588]">
          <span className="flex items-center gap-2 rounded-full border border-[#f0ebed] bg-white/80 px-3 py-2">
            <span className="text-[#e52270]">✳</span>
            Built for ambitious teams
          </span>
          <span className="flex items-center gap-2 rounded-full border border-[#f0ebed] bg-white/80 px-3 py-2">
            <span className="text-emerald-500">✓</span>
            Opportunities that matter
          </span>
        </div>
      </section>

      {/* Audience cards */}
      <section
        aria-label="Explore hiring and job opportunities"
        className="mx-auto mt-12 grid max-w-[1000px] grid-cols-1 items-stretch gap-5 sm:mt-16 md:grid-cols-2 md:gap-6"
      >
        <Company />
        <Candidate />
      </section>

      {/* Footer note */}
      <div className="mx-auto mt-10 flex max-w-[1000px] flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-[11px] text-[#a1a1aa]">
        <span>Made for the next generation of work</span>
        <span className="text-pink-300">✳</span>
        <span>Find your people. Find your place.</span>
      </div>
    </main>
  );
}
