import * as fs from 'fs';
import * as path from 'path';
import { products, categories } from '../src/data/products';
import { blogPosts } from '../src/data/blog';

const BASE_URL = 'https://casefeelz.netlify.app';

// Helper to format date
const getTodayDate = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const generateSitemap = () => {
  const today = getTodayDate();
  
  const urls: string[] = [];

  // Static Pages
  urls.push(`
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`);
  
  urls.push(`
  <url>
    <loc>${BASE_URL}/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`);

  urls.push(`
  <url>
    <loc>${BASE_URL}/products</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`);

  urls.push(`
  <url>
    <loc>${BASE_URL}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`);

  urls.push(`
  <url>
    <loc>${BASE_URL}/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`);

  // Product Categories
  categories.forEach(category => {
    // Only generate if it's not "all" since "all" is effectively the /products page
    if (category.id !== "all") {
      urls.push(`
  <url>
    <loc>${BASE_URL}/products?category=${category.id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`);
    }
  });

  // Individual Products
  products.forEach(product => {
    // Usually product pages would be like /products/:id or similar, 
    // assuming /product/1 or similar structure or a query param. 
    // Creating standard /product/{id} urls.
    urls.push(`
  <url>
    <loc>${BASE_URL}/product/${product.id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
  });

  // Future blog posts automatically handled if imported here
  blogPosts.forEach(post => {
    urls.push(`
  <url>
    <loc>${BASE_URL}/blog/${post.id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`);
  });

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('')}
</urlset>
`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemapXml);
  console.log('✅ sitemap.xml generated successfully.');
};

const generateRobotsTxt = () => {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin/

Sitemap: ${BASE_URL}/sitemap.xml
`;
  
  fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), robotsTxt);
  console.log('✅ robots.txt generated successfully.');
};

generateSitemap();
generateRobotsTxt();
