import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

export function SEO({ title, description, canonical }: SEOProps) {
  const siteUrl = 'https://casefeelz.netlify.app';
  const fullCanonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {title && <title>{title} | CASEFEELZ</title>}
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={fullCanonicalUrl} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={fullCanonicalUrl} />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:url" content={fullCanonicalUrl} />
    </Helmet>
  );
}
