export default function TechBadge({ label }) {
  return (
    <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
      {label}
    </span>
  );
}
