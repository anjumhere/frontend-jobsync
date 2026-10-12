const steps = [
  {
    title: "Build your profile once",
    body: "Add your experience, skills and what you want next. No cover letter for every role.",
  },
  {
    title: "Get matched with teams",
    body: "Founders and hiring managers see you only when your background fits what they need.",
  },
  {
    title: "Talk directly, skip the queue",
    body: "Message the person hiring. No recruiter in the middle, no black hole inbox.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto mt-28 max-w-[1240px]">
      <div className="text-center">
        <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.05em] text-[#101719] sm:text-5xl">
          From profile to
          <span className="font-normal italic text-[#e52270]">
            {" "}
            offer, faster.
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#70787b]">
          One profile, direct conversations, clear salaries from the start.
        </p>
      </div>

      <ol className="mt-12 grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className="rounded-[24px] border border-[#f0ebed] bg-white p-6 shadow-[0_18px_50px_rgba(190,24,93,0.05)]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-50 text-sm font-bold text-[#d81b65]">
              {i + 1}
            </span>
            <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em] text-[#101719]">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#657074]">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
