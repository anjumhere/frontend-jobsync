import CompanyCard from "./CompanyCard";
import CandidateCard from "./CandidateCard";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 text-center">
      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight">
        Where great companies <br />
        <span className="italic text-pink-500 font-serif">
          meet great people.
        </span>
      </h1>

      <p className="text-neutral-600 mt-4 max-w-xl mx-auto text-base">
        The AI recruiting platform for startups. Post jobs free, deploy AI
        sourcing agents, or hire with a dedicated recruiter.
      </p>

      {/* Cards Container */}
      <div className=" flex  just-center  gap-5 items-center">
        <CompanyCard />
        <CandidateCard />
      </div>
    </section>
  );
}
