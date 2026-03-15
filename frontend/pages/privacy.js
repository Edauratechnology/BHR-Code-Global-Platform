import Head from 'next/head';
import Layout from '../components/Layout';

export default function PrivacyPage() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy | BHR Code</title>
        <meta name="description" content="Privacy policy for BHR Code global consulting website." />
      </Head>
      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-6">
        <h1 className="text-4xl font-bold text-brand-900">Privacy Policy</h1>
        <p className="mt-4 text-slate-600">This page outlines how BHR Code handles personal data and privacy preferences.</p>
      </section>
    </Layout>
  );
}
