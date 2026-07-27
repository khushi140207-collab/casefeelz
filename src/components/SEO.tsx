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
  const defaultDescription = "Discover unique phone covers and accessories at CaseFeelz. Customize your phone cover with stylish, cute, anime, and premium designs";
  const pageDescription = description || defaultDescription;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={fullCanonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:url" content={fullCanonicalUrl} />
    </Helmet>
  );
}
