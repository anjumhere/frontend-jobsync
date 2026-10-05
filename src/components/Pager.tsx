type Props = {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
};

export default function Pager({ page, totalPages, onChange }: Props) {
  if (totalPages <= 1) return null;
  const b =
    "rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold hover:bg-slate-100 disabled:opacity-40";
  return (
    <div className="mt-10 flex items-center justify-center gap-4">
      <button
        className={b}
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
      >
        ← Prev
      </button>
      <span className="text-sm text-slate-500">
        Page {page} of {totalPages}
      </span>
      <button
        className={b}
        disabled={page >= totalPages}
        onClick={() => onChange(page + 1)}
      >
        Next →
      </button>
    </div>
  );
}
