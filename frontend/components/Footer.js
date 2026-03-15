import Link from 'next/link';

const socialLinks = [
  ['LinkedIn', 'https://www.linkedin.com'],
  ['X', 'https://x.com'],
  ['YouTube', 'https://www.youtube.com']
];

const services = ['Workforce Solutions', 'Digital Engineering', 'Cloud Transformation', 'AI and Automation', 'Managed Services'];
const technologies = ['.NET Core', 'DevOps', 'AI', 'Generative AI', 'Machine Learning', 'Data Engineering', 'SAP', 'Oracle', 'AWS', 'Azure', 'Google Cloud', 'Workday'];

export default function Footer() {
  return (
    <footer className="mt-24 bg-brand-900 text-slate-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-5 lg:px-6">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold">BHR Code</h2>
          <p className="mt-3 max-w-md text-sm text-slate-300">
            Global workforce and technology consulting partner delivering enterprise transformation across talent,
            cloud, data, and AI.
          </p>
          <div className="mt-5 space-y-1 text-sm text-slate-300">
            <p>contact@bhrcode.com</p>
            <p>+1 (212) 555-0100</p>
            <p>350 Fifth Avenue, New York, NY</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Social</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {socialLinks.map(([label, href]) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" className="hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Services</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Technologies</h3>
          <ul className="mt-3 max-h-40 space-y-2 overflow-auto pr-2 text-sm text-slate-300">
            {technologies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs text-slate-400 lg:px-6">
          <p>© {new Date().getFullYear()} BHR Code. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-slate-200">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-200">Terms of Use</Link>
            <Link href="#" className="hover:text-slate-200">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
