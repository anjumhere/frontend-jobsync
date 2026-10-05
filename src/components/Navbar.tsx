import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-slate-950"
        >
          jobsync<span className="text-pink-600">:</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link to="/jobs" className="hover:text-slate-950">
            Find jobs
          </Link>
          <Link to="/companies" className="hover:text-slate-950">
            Companies
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="hidden text-sm font-semibold text-slate-900 sm:block">
                {user.fullName}
              </span>
              <button
                onClick={async () => {
                  await logout();
                  nav("/");
                }}
                className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-semibold text-slate-900"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
