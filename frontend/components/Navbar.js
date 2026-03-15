import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  ['Services', '#services'],
  ['Technologies', '#technologies'],
  ['Industries', '#industries'],
  ['Insights', '#insights'],
  ['Talent Network', '#talent-network'],
  ['Partners', '#partners']
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto w-full max-w-7xl px-4 py-4 lg:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="BHR Code home">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-800 text-sm font-bold text-white">BHR</span>
            <span className="text-lg font-semibold tracking-tight text-brand-900">BHR Code</span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden lg:block">
            <ul className="flex items-center gap-6 text-sm font-medium text-slate-700">
              {navItems.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-brand-700">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-md bg-brand-800 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 sm:inline-flex"
            >
              Book a Consultation
            </Link>
            <button
              type="button"
              className="inline-flex rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 lg:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Menu
            </button>
          </div>
        </div>

        {isOpen ? (
          <nav id="mobile-navigation" className="pt-4 lg:hidden" aria-label="Mobile navigation">
            <ul className="space-y-2 border-t border-slate-200 pt-4 text-sm font-medium text-slate-700">
              {navItems.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="block rounded-md px-2 py-2 hover:bg-slate-100" onClick={() => setIsOpen(false)}>
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="mt-2 inline-flex rounded-md bg-brand-800 px-4 py-2 text-sm font-semibold text-white" onClick={() => setIsOpen(false)}>
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
