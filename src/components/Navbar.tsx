const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
      <nav className="relative mx-auto flex h-[78px] max-w-6xl items-center justify-between px-4">
        <a
          href="/"
          className="text-3xl font-extrabold tracking-tight text-slate-950"
        >
          jobsync<span className="text-pink-600">:</span>
        </a>

        <div className="hidden items-center gap-10 md:absolute md:left-1/2 md:flex md:-translate-x-1/2">
          <a
            href="/jobs"
            className="text-[15px] font-medium text-slate-600 hover:text-slate-950"
          >
            Find jobs
          </a>
          <a
            href="/companies"
            className="text-[15px] font-medium text-slate-600 hover:text-slate-950"
          >
            Companies
          </a>
          <a
            href="/companies/new"
            className="text-[15px] font-medium text-slate-600 hover:text-slate-950"
          >
            For employers
          </a>
        </div>

        <div className="flex items-center gap-5">
          <a href="/login" className="text-[15px] font-semibold text-slate-900">
            Log in
          </a>
          <a
            href="/register"
            className="rounded-full bg-slate-950 px-5 py-2.5 text-[15px] font-semibold text-white hover:bg-slate-800"
          >
            Sign up
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
