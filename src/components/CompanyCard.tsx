export default function CompanyCard() {
  return (
    <div className="g-pink-50  bg-[#101518] mt-10 text-black p-10 text-left   flex  flex-col justify-center items-start border border-black rounded-2xl">
      <span className="text-pink-300  py-5 font-bold tracking-wider text-xl uppercase">
        For Companies
      </span>
      <h3 className="text-3xl font-medium text-white mt-2">
        Find your <span className="italic text-pink-400">next hire.</span>
      </h3>
      <p className="text-neutral-400 mt-3 text-sm leading-relaxed">
        Post jobs free, deploy AI sourcing agents, or hand it to an Autopilot
        recruiter.
      </p>
      <button className="mt-6 bg-pink-600 hover:bg-pink-700 text-white font-medium px-3 py-3 text-lg  rounded-full transition">
        Start hiring &rarr;
      </button>
      <div className="flex flex-col text-white bg-[#1a2224] p-5 w-full">
        <span>Reach Agent-WORKING NOW</span>
        <div className="flex flex-row  justify-between ">
          <h3>
            Priya Shah <span className="px-3">Sr Eng @Nioton</span>
          </h3>{" "}
          <span>Replied</span>
        </div>
      </div>
    </div>
  );
}
