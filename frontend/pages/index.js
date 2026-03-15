import Link from 'next/link';

const pages = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/technologies', label: 'Technologies' },
  { href: '/industries', label: 'Industries' },
  { href: '/insights', label: 'Insights' },
  { href: '/talent-network', label: 'Talent Network' },
  { href: '/partners', label: 'Partners' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' }
];

export default function Home() {
  return (
    <main>
      <h1>BHR Code Enterprise Platform</h1>
      <p>Welcome to the digital platform foundation for BHR Code.</p>
      <nav>
        <ul>
          {pages.map((page) => (
            <li key={page.href}>
              <Link href={page.href}>{page.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
