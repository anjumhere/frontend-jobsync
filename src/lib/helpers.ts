import axios from "axios";

export const inputCls =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-100";

export const errMsg = (e: unknown) =>
  axios.isAxiosError(e)
    ? (e.response?.data?.message ?? e.message)
    : "Something went wrong";

// finds the array inside a list response, whatever the key is called
export function pickList<T>(data: unknown): T[] {
  if (Array.isArray(data)) return data as T[];
  const found = Object.values((data ?? {}) as object).find(Array.isArray);
  return (found ?? []) as T[];
}
