export default function CandidateCard() {
  return (
    <div className="bg-pink-50 text-black rounded-2xl   p-10 flex-1 border border-pink-100">
      <span className="text-pink-600 font-semibold tracking-wider text-xs uppercase">
        For Candidates
      </span>
      <h3 className="text-3xl font-medium mt-2">
        Find your <span className="italic text-pink-600">next job.</span>
      </h3>
      <p className="text-neutral-600 mt-3 text-sm leading-relaxed">
        Apply directly to founders and hiring managers at 27,000+ startups
        building what's next.
      </p>
      <button className="mt-6 bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-full transition">
        Browse jobs &rarr;
      </button>
    </div>
  );
}
