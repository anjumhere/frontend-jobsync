import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { errMsg, inputCls } from "../lib/helpers";

export default function Register() {
  const { register } = useAuth();
  const nav = useNavigate();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      await register(new FormData(e.currentTarget));
      nav("/jobs");
    } catch (err) {
      setError(errMsg(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-4xl font-bold text-slate-950">
        Create your <span className="italic text-pink-600">account.</span>
      </h1>
      <form onSubmit={submit} className="mt-8 space-y-4">
        <input
          className={inputCls}
          name="fullName"
          placeholder="Full name"
          required
        />
        <input
          className={inputCls}
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className={inputCls}
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <label className="block text-sm text-slate-500">
          Resume (PDF, optional)
          <input
            name="resume"
            type="file"
            accept="application/pdf"
            className="mt-1 block w-full text-sm"
          />
        </label>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          disabled={busy}
          className="w-full rounded-full bg-pink-600 py-3 font-semibold text-white hover:bg-pink-700 disabled:opacity-50"
        >
          {busy ? "Creating..." : "Sign up"}
        </button>
      </form>
      <p className="mt-6 text-sm text-slate-500">
        Have an account?{" "}
        <Link to="/login" className="font-semibold text-pink-600">
          Log in
        </Link>
      </p>
    </div>
  );
}
