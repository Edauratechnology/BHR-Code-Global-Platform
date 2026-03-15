import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import SectionContainer from '../components/SectionContainer';
import TechBadge from '../components/TechBadge';
import InsightCard from '../components/InsightCard';
import StatCard from '../components/StatCard';

const serviceCards = [
  {
    title: 'Workforce Solutions',
    description: 'Scalable workforce strategy, talent operations, and managed staffing models for mission-critical programs.'
  },
  {
    title: 'Digital Engineering',
    description: 'Modern product engineering across web, platform, and integration domains with measurable business outcomes.'
  },
  {
    title: 'Cloud Transformation',
    description: 'Cloud migration, modernization, and operating model design across hybrid and multi-cloud enterprise estates.'
  },
  {
    title: 'AI and Automation',
    description: 'Enterprise AI, intelligent automation, and GenAI copilots that improve speed, quality, and decision-making.'
  },
  {
    title: 'Managed Services',
    description: 'Always-on delivery and support with SLAs, governance, and continuous optimization for business continuity.'
  }
];

const technologies = ['.NET Core', 'DevOps', 'AI', 'Generative AI', 'Machine Learning', 'Data Engineering', 'SAP', 'Oracle', 'AWS', 'Azure', 'Google Cloud', 'Workday'];
const industries = ['Banking & Financial Services', 'Healthcare & Life Sciences', 'Retail & Consumer', 'Manufacturing', 'Energy & Utilities', 'Public Sector'];
const insights = [
  'How global enterprises scale AI responsibly with governance-by-design',
  'Modern workforce platforms: combining talent intelligence with delivery operations',
  'Cloud transformation playbook for SAP, Oracle, and Workday ecosystems'
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BHR Code',
  url: 'https://www.bhrcode.com',
  description: 'Global workforce and technology consulting partner for enterprise transformation.',
  sameAs: ['https://www.linkedin.com', 'https://x.com', 'https://www.youtube.com']
};

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>BHR Code | Global Workforce and Technology Consulting</title>
        <meta
          name="description"
          content="BHR Code is a global workforce and technology partner delivering enterprise consulting across digital engineering, cloud transformation, AI, and managed services."
        />
        <meta name="keywords" content="BHR Code, enterprise consulting, workforce solutions, cloud transformation, AI consulting" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16),transparent_40%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 lg:grid-cols-2 lg:px-6 lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-100">Global Workforce & Technology Partner</p>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              Transform Enterprise Outcomes with Modern Talent, Technology, and AI
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
              BHR Code helps enterprises design and deliver transformation at scale through strategic consulting,
              advanced engineering, and global execution excellence.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#services" className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-800 hover:bg-slate-100">
                Explore Services
              </Link>
              <Link href="/contact" className="rounded-md border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Connect with Experts
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 self-end">
            <StatCard metric="120+" label="Enterprise Programs Delivered" />
            <StatCard metric="30+" label="Global Talent Hubs" />
            <StatCard metric="12" label="Strategic Platform Alliances" />
            <StatCard metric="24/7" label="Managed Operations Support" />
          </div>
        </div>
      </section>

      <SectionContainer id="services" className="py-16 lg:py-20">
        <SectionHeading
          eyebrow="What We Deliver"
          title="Enterprise Services"
          description="End-to-end advisory, implementation, and managed delivery for complex transformation programs."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer id="technologies" className="bg-white py-16 lg:py-20">
        <SectionHeading
          eyebrow="Capabilities"
          title="Technology Capabilities"
          description="Deep cross-platform expertise across engineering, enterprise applications, cloud, and data intelligence."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer id="industries" className="py-16 lg:py-20">
        <SectionHeading
          eyebrow="Sector Knowledge"
          title="Industry Expertise"
          description="Consulting and engineering tailored to regulatory, operational, and customer priorities in each sector."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry} className="rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm">
              {industry}
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer id="insights" className="bg-white py-16 lg:py-20">
        <SectionHeading
          eyebrow="Thought Leadership"
          title="Insights & Blog"
          description="Actionable perspectives from our consultants, architects, and transformation leaders."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {insights.map((item) => (
            <InsightCard key={item} title={item} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer id="talent-network" className="py-16 lg:py-20">
        <div className="rounded-2xl bg-slate-900 px-6 py-10 text-white md:px-10">
          <SectionHeading
            eyebrow="Global Delivery"
            title="Talent Network"
            description="Access a curated global network of specialists across consulting, product engineering, cloud, and enterprise platforms."
            eyebrowClassName="text-sky-200"
            titleClassName="text-white"
            descriptionClassName="text-slate-200"
          />
          <Link href="/talent-network" className="mt-6 inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-200">
            Join Talent Network
          </Link>
        </div>
      </SectionContainer>

      <SectionContainer id="partners" className="bg-brand-800 py-16 text-white lg:py-20">
        <SectionHeading
          eyebrow="Alliance Ecosystem"
          title="Partner Ecosystem"
          description="Strategic partner-led delivery across SAP, Oracle, Workday, AWS, Azure, and Google Cloud."
          eyebrowClassName="text-sky-200"
          titleClassName="text-white"
          descriptionClassName="text-slate-100"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white/10 p-6">
            <h3 className="text-xl font-semibold">Co-Innovation Programs</h3>
            <p className="mt-3 text-slate-100">
              Build joint solutions and accelerators that speed enterprise adoption and transformation results.
            </p>
          </div>
          <div className="rounded-xl bg-white/10 p-6">
            <h3 className="text-xl font-semibold">Global Delivery Alliances</h3>
            <p className="mt-3 text-slate-100">
              Scale multi-region transformation with integrated governance, capability centers, and delivery assurance.
            </p>
          </div>
        </div>
      </SectionContainer>
    </Layout>
  );
}
