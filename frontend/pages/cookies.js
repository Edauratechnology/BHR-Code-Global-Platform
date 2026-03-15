import Head from 'next/head';
import Layout from '../components/Layout';

export default function CookiePage() {
  return (
    <Layout>
      <Head>
        <title>Cookie Policy | BHR Code</title>
        <meta name="description" content="Cookie policy for BHR Code global consulting website." />
      </Head>
      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-6">
        <h1 className="text-4xl font-bold text-brand-900">Cookie Policy</h1>
        <p className="mt-4 text-slate-600">This page explains cookie usage and consent options for BHR Code digital properties.</p>
      </section>
    </Layout>
  );
}
