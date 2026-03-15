import Link from 'next/link';

const navItems = [
  ['Services', '#services'],
  ['Technologies', '#technologies'],
  ['Industries', '#industries'],
  ['Insights', '#insights'],
  ['Talent Network', '#talent-network'],
  ['Partners', '#partners']
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 lg:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="BHR Code home">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-800 text-sm font-bold text-white">BHR</span>
          <span className="text-lg font-semibold tracking-tight text-brand-900">BHR Code</span>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
            {navItems.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-brand-700">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="rounded-md bg-brand-800 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
        >
          Book a Consultation
        </Link>
      </div>
    </header>
  );
}
