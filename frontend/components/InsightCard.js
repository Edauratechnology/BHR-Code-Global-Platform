import Link from 'next/link';

export default function InsightCard({ title, category = 'Insight' }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{category}</p>
      <h3 className="mt-3 text-lg font-semibold text-brand-900">{title}</h3>
      <Link href="/insights" className="mt-5 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-800">
        Read more →
      </Link>
    </article>
  );
}
