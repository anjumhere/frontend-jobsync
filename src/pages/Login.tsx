import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { errMsg, inputCls } from "../lib/helpers";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      await login(email, password);
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
        Welcome <span className="italic text-pink-600">back.</span>
      </h1>
      <form onSubmit={submit} className="mt-8 space-y-4">
        <input
          className={inputCls}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className={inputCls}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          disabled={busy}
          className="w-full rounded-full bg-pink-600 py-3 font-semibold text-white hover:bg-pink-700 disabled:opacity-50"
        >
          {busy ? "Logging in..." : "Log in"}
        </button>
      </form>
      <p className="mt-6 text-sm text-slate-500">
        No account?{" "}
        <Link to="/register" className="font-semibold text-pink-600">
          Sign up
        </Link>
      </p>
    </div>
  );
}
