import Link from 'next/link';
import Layout from '../components/Layout';

const services = ['Digital Transformation', 'Cloud Engineering', 'Data & AI Platforms', 'DevOps Modernization'];
const technologies = ['.NET Core', 'DevOps', 'Generative AI', 'Machine Learning', 'AWS', 'Azure', 'Google Cloud'];
const industries = ['Financial Services', 'Healthcare', 'Retail', 'Manufacturing', 'Public Sector'];
const insights = [
  'Scaling enterprise GenAI with responsible governance',
  'Modernizing SAP and Oracle landscapes on cloud-native platforms',
  'Building high-velocity delivery with platform engineering'
];

export default function Home() {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-brand-900 to-brand-700 px-4 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-widest text-slate-200">Global Enterprise Consulting</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Transforming Business with Cloud, Data, and AI-Driven Engineering
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-100">
            BHR Code delivers strategic consulting and engineering services across enterprise platforms,
            modernization programs, and digital product ecosystems.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/solutions" className="rounded-md bg-white px-5 py-3 font-semibold text-brand-800 hover:bg-slate-100">
              Explore Solutions
            </Link>
            <Link href="/contact" className="rounded-md border border-white px-5 py-3 font-semibold hover:bg-white/10">
              Talk to Experts
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold text-brand-800">Services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <article key={item} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{item}</h3>
              <p className="mt-3 text-sm text-slate-600">Outcome-focused consulting and implementation support.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-brand-800">Technology Capabilities</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span key={tech} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-brand-800">Industries Served</h2>
          <ul className="mt-6 space-y-3">
            {industries.map((industry) => (
              <li key={industry} className="rounded-md bg-white p-4 shadow-sm">{industry}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-brand-800">Insights & Blog</h2>
          <ul className="mt-6 space-y-3">
            {insights.map((item) => (
              <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand-800 px-4 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <article className="rounded-lg bg-white/10 p-6">
            <h3 className="text-2xl font-semibold">Partner Ecosystem</h3>
            <p className="mt-3 text-slate-100">
              Strategic alliances across SAP, Oracle, Workday, AWS, Azure, and Google Cloud for co-innovation.
            </p>
          </article>
          <article className="rounded-lg bg-white/10 p-6">
            <h3 className="text-2xl font-semibold">Talent Network</h3>
            <p className="mt-3 text-slate-100">
              A global network of consultants and specialists supporting transformation programs at scale.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
}
