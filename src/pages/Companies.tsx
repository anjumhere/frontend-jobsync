import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { api } from "../lib/api";
import { inputCls, pickList } from "../lib/helpers";
import type { Company } from "../types";
import CompanyLogo from "../components/CompanyLogo";
import Pager from "../components/Pager";

export default function Companies() {
  const [params, setParams] = useSearchParams();
  const [list, setList] = useState<Company[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const page = Number(params.get("page") ?? 1);

  useEffect(() => {
    setLoading(true);
    api
      .get("/companies", {
        params: { ...Object.fromEntries(params), limit: 9 },
      })
      .then((res) => {
        setList(pickList<Company>(res.data.data));
        setTotalPages(res.data.data?.totalPages ?? 1);
      })
      .catch(() => setList([]))
      .finally(() => setLoading(false));
  }, [params]);

  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    if (key !== "page") next.delete("page");
    setParams(next);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-bold text-slate-950">
        Explore <span className="italic text-pink-600">companies.</span>
      </h1>
      <input
        className={`${inputCls} mt-8 max-w-md`}
        placeholder="Search companies"
        defaultValue={params.get("search") ?? ""}
        onChange={(e) => update("search", e.target.value)}
      />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-36 animate-pulse rounded-2xl bg-slate-200/70"
              />
            ))
          : list.map((c) => (
              <Link
                key={c._id}
                to={`/companies/${c._id}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-100"
              >
                <div className="flex items-center gap-3">
                  <CompanyLogo company={c} />
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-slate-950">
                      {c.name}
                    </p>
                    <p className="truncate text-sm text-slate-500">
                      {[c.industry, c.location].filter(Boolean).join(" · ")}
                    </p>
                  </div>
                </div>
                <p className="mt-4 line-clamp-2 text-sm text-slate-600">
                  {c.description}
                </p>
              </Link>
            ))}
      </div>
      {!loading && list.length === 0 && (
        <p className="mt-10 text-center text-slate-500">No companies found.</p>
      )}
      <Pager
        page={page}
        totalPages={totalPages}
        onChange={(p) => update("page", String(p))}
      />
    </div>
  );
}
