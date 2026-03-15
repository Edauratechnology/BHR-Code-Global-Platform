export default function StatCard({ metric, label }) {
  return (
    <div className="rounded-lg border border-white/20 bg-white/10 px-4 py-4 backdrop-blur-sm">
      <p className="text-2xl font-bold text-white">{metric}</p>
      <p className="mt-1 text-sm text-sky-100">{label}</p>
    </div>
  );
}
