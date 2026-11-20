import Head from 'next/head';
import { useRouter } from 'next/router';

// The live site answers on www (laboravr.com redirects there with a 308), so www is the canonical address.
export const SITE = 'https://www.laboravr.com';
const DEFAULT_OG = `${SITE}/og-v2.png`;

// What every page tells search engines and AI assistants about who LaboraVR is.
const ORGANIZATION = {
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: 'LaboraVR',
  url: SITE,
  logo: `${SITE}/icon-512.png`,
  email: 'hello@laboravr.com',
  description:
    'A science lab for Meta Quest: chemistry, physics and biology practicals for students aged 14 to 16, used with bare hands and marked like an examiner.',
  founder: {
    '@type': 'Person',
    '@id': `${SITE}/about#founder`,
    name: 'Jeffery Nketiah',
    description: 'Energy storage scientist and former IGCSE Chemistry and Physics teacher in Accra, Ghana.',
    sameAs: ['https://www.linkedin.com/in/jefferynketiah20'],
  },
  address: { '@type': 'PostalAddress', addressCountry: 'FR' },
  areaServed: ['GH', 'Worldwide'],
};

export default function Seo({ title, description, image, jsonLd = [] }) {
  const { asPath } = useRouter();
  const path = asPath.split(/[?#]/)[0];
  const url = `${SITE}${path === '/' ? '/' : path}`;
  const ogImage = image ? `${SITE}${image}` : DEFAULT_OG;
  const graph = { '@context': 'https://schema.org', '@graph': [ORGANIZATION, ...jsonLd] };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Favicons */}
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/brand/laboravr-icon.svg" />
      <link rel="canonical" href={url} />
      {/* Google Search Console ownership check (URL-prefix property https://www.laboravr.com). Not a secret; keep it,
          or Search Console loses verification. */}
      <meta name="google-site-verification" content="Zq5bLqIfw47jUrkjFBs5k2pA0LHrjqmW8sKCgfWCLIo" />

      {/* Open Graph — WhatsApp, LinkedIn, Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="LaboraVR" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
    </Head>
  );
}
