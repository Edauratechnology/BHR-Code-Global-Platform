import Head from 'next/head';
import Layout from '../components/Layout';

export default function TermsPage() {
  return (
    <Layout>
      <Head>
        <title>Terms of Use | BHR Code</title>
        <meta name="description" content="Terms of use for BHR Code global consulting website." />
      </Head>
      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-6">
        <h1 className="text-4xl font-bold text-brand-900">Terms of Use</h1>
        <p className="mt-4 text-slate-600">This page defines the terms governing use of the BHR Code website and content.</p>
      </section>
    </Layout>
  );
}
