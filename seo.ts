import fs from 'fs';
import path from 'path';

function updateFile(file: string, rules: {search: RegExp, replace: string}[]) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    rules.forEach(rule => {
      content = content.replace(rule.search, rule.replace);
    });
    if (original !== content) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  } catch(e) {}
}

// 1. Home.tsx
updateFile('./src/pages/Home.tsx', [
  { search: /<h2 className="text-white text-5xl md:text-7xl font-display font-extrabold uppercase tracking-widest mb-4">The Clear Case<\/h2>/g, replace: '<h2 className="text-white text-5xl md:text-7xl font-display font-extrabold uppercase tracking-widest mb-4">Clear Phone Cases</h2>' },
  { search: /<p className="text-white font-medium text-xl mb-8">Ultra-minimal. Yellowing-resistant. Drop-tested.<\/p>/g, replace: '<h1 className="text-white font-medium text-xl mb-8">Ultra-minimal Tech Accessories. Yellowing-resistant Shockproof Cases. Drop-tested Phone Covers.</h1>' },
  { search: /alt="Premium Case"/g, replace: 'alt="Premium Phone Cases and Mobile Covers"' },
  { search: /"Premium protection. Maximum personality."/g, replace: '"Premium Device Protection. Fashion Meets Protection with CASEFEELZ Accessories."'}
]);

// 2. Products.tsx
updateFile('./src/pages/Products.tsx', [
  { search: /<h1 className="text-5xl md:text-7xl font-display font-extrabold uppercase tracking-widest mb-6">ALL DROPS<\/h1>/g, replace: '<h1 className="text-5xl md:text-7xl font-display font-extrabold uppercase tracking-widest mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Premium Phone Cases & Accessories</h1>' },
  { search: /<p className="text-gray-400 font-medium tracking-wide text-lg">Protect your tech in style.<\/p>/g, replace: '<p className="text-gray-400 font-medium tracking-wide text-lg">Discover our latest Mobile Covers, Screen Protectors, and Wireless Chargers. Stylish Protection for everyday tech essentials.</p>' }
]);

// 3. About.tsx
updateFile('./src/pages/About.tsx', [
  { search: /<p className="text-2xl md:text-3xl font-display font-bold text-white leading-tight mb-12 relative z-10">/g, replace: '<h1 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight mb-12 relative z-10">CASEFEELZ: Fashion Meets Protection in Premium Phone Accessories.</h1><p className="text-xl md:text-2xl font-display text-gray-300 leading-tight mb-12 relative z-10">' },
  { search: /We're helping people express themselves.<\/p>/g, replace: 'Everyday Tech Essentials. CASEFEELZ Cases offer stylish protection.</p>' }
]);

// 4. Contact.tsx
updateFile('./src/pages/Contact.tsx', [
  { search: /Let's Talk<\/h1>/g, replace: 'Contact CASEFEELZ</h1>' },
  { search: /<p className="text-lg md:text-xl font-medium tracking-wide">/g, replace: '<p className="text-lg md:text-xl font-medium tracking-wide">Reach out to us for support on Phone Cases, Mobile Accessories, and Screen Protectors.' }
]);

// 5. Blog.tsx
updateFile('./src/pages/Blog.tsx', [
  { search: /The CASEFEELZ Edit<\/h1>/g, replace: 'The CASEFEELZ Edit - Phone Accessory Trends</h1>' },
  { search: /Style, tech, and everything in between. Your daily dose of inspiration.<\/p>/g, replace: 'Designer Cases, Wireless Chargers, and Tech Accessories. Your daily dose of inspiration for Stylish Protection.</p>' }
]);

// 6. Footer.tsx
updateFile('./src/components/Footer.tsx', [
  { search: /<p className="text-gray-400 font-medium">/g, replace: '<p className="text-gray-400 font-medium">Protect in Style with CASEFEELZ. Shop Premium Designer Cases, Mobile Covers, Shockproof Cases, and Everyday Tech Essentials.' }
]);
