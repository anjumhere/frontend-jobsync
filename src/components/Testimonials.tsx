const quotes = [
  {
    text: "I messaged a founder on Tuesday and had an interview by Friday. No application form, no waiting.",
    name: "Sara Khan",
    role: "Frontend Engineer, hired at a Series A startup",
    img: "https://i.pravatar.cc/80?img=45",
  },
  {
    text: "We filled two engineering roles in a month. Seeing salary and intent up front saved us weeks of screening.",
    name: "Daniel Ortiz",
    role: "CTO, 20-person fintech",
    img: "https://i.pravatar.cc/80?img=15",
  },
  {
    text: "The matches were relevant, not random. I turned down two offers because I actually had a choice.",
    name: "Mei Lin",
    role: "Product Designer",
    img: "https://i.pravatar.cc/80?img=32",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto mt-28 max-w-[1240px]">
      <h2 className="text-center text-[32px] font-semibold leading-[1.1] tracking-[-0.05em] text-[#101719] sm:text-5xl">
        People who found
        <span className="font-normal italic text-[#e52270]"> their move.</span>
      </h2>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {quotes.map((q) => (
          <figure
            key={q.name}
            className="flex flex-col justify-between rounded-[24px] border border-[#f0ebed] bg-white p-6 shadow-[0_18px_50px_rgba(28,25,23,0.04)]"
          >
            <blockquote className="text-sm leading-7 text-[#3c4548]">
              “{q.text}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img
                src={q.img}
                alt={q.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-[#182124]">{q.name}</p>
                <p className="text-xs text-[#85888d]">{q.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
