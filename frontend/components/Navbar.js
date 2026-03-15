import Link from 'next/link';

const navItems = [
  ['Solutions', '/solutions'],
  ['Technologies', '/technologies'],
  ['Industries', '/industries'],
  ['Insights', '/insights'],
  ['Talent Network', '/talent-network'],
  ['Partners', '/partners'],
  ['About', '/about'],
  ['Careers', '/careers'],
  ['Contact', '/contact']
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-xl font-bold text-brand-800">
          BHR Code
        </Link>
        <nav>
          <ul className="flex flex-wrap gap-4 text-sm font-medium text-slate-700">
            {navItems.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-brand-700">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
