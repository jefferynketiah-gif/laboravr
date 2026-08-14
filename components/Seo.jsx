import Head from 'next/head';
import { useRouter } from 'next/router';

const SITE = 'https://laboravr.com';
const DEFAULT_OG = `${SITE}/og-image.png`;

export default function Seo({ title, description, image }) {
  const { asPath } = useRouter();
  const url = `${SITE}${asPath === '/' ? '' : asPath}`;
  const ogImage = image ? `${SITE}${image}` : DEFAULT_OG;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

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
    </Head>
  );
}
