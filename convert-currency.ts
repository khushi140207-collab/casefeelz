import fs from 'fs';
import path from 'path';

const srcDir = './src';

function walk(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(fullPath));
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) { 
      results.push(fullPath);
    }
  });
  return results;
}

const files = walk(srcDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace prices
  content = content.replace(/\$15\.99/g, '₹499');
  content = content.replace(/\$16\.99/g, '₹599');
  content = content.replace(/\$17\.99/g, '₹699');
  content = content.replace(/\$18\.99/g, '₹799');
  content = content.replace(/\$19\.99/g, '₹899');
  content = content.replace(/\$21\.99/g, '₹999');
  content = content.replace(/\$22\.99/g, '₹1,099');
  content = content.replace(/\$24\.99/g, '₹1,299');
  content = content.replace(/\$25\.99/g, '₹1,399');
  content = content.replace(/\$26\.99/g, '₹1,499');
  content = content.replace(/\$27\.99/g, '₹1,599');
  content = content.replace(/\$28\.99/g, '₹1,699');
  content = content.replace(/\$29\.99/g, '₹1,799');
  content = content.replace(/\$32\.99/g, '₹1,899');
  content = content.replace(/\$34\.99/g, '₹1,999');
  content = content.replace(/\$39\.99/g, '₹2,499');
  content = content.replace(/\$44\.99/g, '₹2,999');
  content = content.replace(/\$49\.99/g, '₹3,499');
  
  // replace over $50
  content = content.replace(/\$50/g, '₹2,999');

  // Any remaining $xx.xx
  content = content.replace(/\$(\d+)\.(\d+)/g, (match, p1, p2) => {
    return '₹' + (parseInt(p1) * 80).toString();
  });

  // the replace('$', '')
  content = content.replace(/replace\('\$', ''\)/g, "replace('₹', '').replace(/,/g, '')");

  if (original !== content) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});

console.log('Update complete');
