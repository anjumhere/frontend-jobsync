export default function CtaBanner() {
  return (
    <section className="mx-auto mt-28 max-w-[1240px]">
      <div className="relative overflow-hidden rounded-[32px] bg-[radial-gradient(ellipse_at_top_right,_rgba(226,36,112,0.35),_transparent_50%),linear-gradient(145deg,#19191d_0%,#11191b_60%,#071719_100%)] px-6 py-16 text-center text-white sm:px-12">
        <h2 className="mx-auto max-w-2xl text-[32px] font-semibold leading-[1.1] tracking-[-0.05em] sm:text-5xl">
          Ready for your
          <span className="font-normal italic text-pink-300">
            {" "}
            next chapter?
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/65">
          Create a free profile in five minutes, or post your first role today.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="/signup"
            className="rounded-full bg-[#e52270] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-950/30 transition hover:bg-[#f03582]"
          >
            Find a job
          </a>
          <a
            href="/employers"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Post a job
          </a>
        </div>
      </div>
    </section>
  );
}
