export default function Company() {
  return (
    <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(ellipse_at_top_right,_rgba(226,36,112,0.20),_transparent_48%),linear-gradient(145deg,#19191d_0%,#11191b_60%,#071719_100%)] p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:p-8">
      <div className="absolute right-7 top-7 h-24 w-24 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative">
        <div className="mb-5 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-pink-400" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-pink-300">
            For companies
          </span>
        </div>

        <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.045em] sm:text-[36px]">
          Build your
          <br />
          <span className="font-normal italic text-pink-300">dream team.</span>
        </h2>

        <p className="mt-4 max-w-[360px] text-sm leading-6 text-white/65">
          Meet exceptional people, connect with ambitious talent, and find your
          next great hire.
        </p>

        <a
          href="/employers"
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#e52270] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-950/30 transition hover:bg-[#f03582]"
        >
          Start hiring
          <span className="text-lg transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>

      <div className="relative mt-8 flex-1 rounded-2xl border border-white/[0.10] bg-[#182123]/90 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
              Talent pipeline
            </p>
            <p className="mt-1 text-sm font-semibold text-white/90">
              Your next great hire
            </p>
          </div>

          <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1.5 text-[10px] font-semibold text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            LIVE
          </span>
        </div>

        <div className="divide-y divide-white/[0.08]">
          <div className="flex items-center gap-3 py-4">
            <img
              src="https://i.pravatar.cc/80?img=47"
              alt="Priya Shah"
              className="h-10 w-10 shrink-0 rounded-full border border-white/10 object-cover"
            />

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">Priya Shah</p>
              <p className="mt-1 truncate text-xs text-white/45">
                Senior Engineer · 7 YOE
              </p>
            </div>

            <span className="shrink-0 rounded-lg bg-emerald-400/10 px-2.5 py-1.5 text-[9px] font-bold tracking-wide text-emerald-300 sm:text-[10px]">
              REPLIED
            </span>
          </div>

          <div className="flex items-center gap-3 py-4">
            <img
              src="https://i.pravatar.cc/80?img=12"
              alt="Marcus Bennett"
              className="h-10 w-10 shrink-0 rounded-full border border-white/10 object-cover"
            />

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">Marcus Bennett</p>
              <p className="mt-1 truncate text-xs text-white/45">
                Staff Engineer · 9 YOE
              </p>
            </div>

            <span className="shrink-0 rounded-lg bg-white/[0.08] px-2.5 py-1.5 text-[9px] font-bold tracking-wide text-white/65 sm:text-[10px]">
              CONTACTED
            </span>
          </div>
        </div>

        <div className="mt-1 flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.035] p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-400/10 text-lg text-pink-300">
            ↗
          </div>
          <div>
            <p className="text-xs font-semibold text-white/90">
              Your next connection starts here.
            </p>
            <p className="mt-1 text-[10px] text-white/40">
              Discover talent that moves you forward
            </p>
          </div>
        </div>
      </div>

      <p className="relative mt-5 text-center text-[10px] tracking-wide text-white/30">
        LESS SEARCHING. MORE BUILDING.
      </p>
    </article>
  );
}
