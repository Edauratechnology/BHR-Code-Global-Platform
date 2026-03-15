export default function Footer() {
  return (
    <footer className="mt-20 bg-brand-900 text-slate-100">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <h3 className="mb-3 text-lg font-semibold">BHR Code</h3>
          <p className="text-sm text-slate-300">
            Global consulting across digital engineering, cloud, AI, and enterprise platforms.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Global Offices</h4>
          <p className="text-sm text-slate-300">New York • London • Dubai • Bengaluru • Singapore</p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Capabilities</h4>
          <p className="text-sm text-slate-300">Technology Consulting, Managed Services, Transformation Programs</p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Contact</h4>
          <p className="text-sm text-slate-300">contact@bhrcode.com</p>
          <p className="text-sm text-slate-300">+1 (000) 000-0000</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} BHR Code. All rights reserved.
      </div>
    </footer>
  );
}
