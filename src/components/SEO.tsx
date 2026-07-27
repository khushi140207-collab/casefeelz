import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

export function SEO({ title, description, canonical }: SEOProps) {
  const siteUrl = 'https://casefeelz.vercel.app';
  const fullCanonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  const defaultTitle = "CASEFEELZ | Premium Phone Cases & Accessories";
  const pageTitle = title && title !== "Home" ? `${title} | CASEFEELZ` : defaultTitle;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={fullCanonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={pageTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:url" content={fullCanonicalUrl} />
    </Helmet>
  );
}
