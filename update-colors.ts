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
  
  // Theme application
  content = content.replace(/bg-brand-offwhite/g, 'bg-brand-midnight');
  content = content.replace(/text-brand-charcoal/g, 'text-white');
  content = content.replace(/text-brand-coral/g, 'text-brand-pink');
  content = content.replace(/bg-brand-coral/g, 'bg-brand-pink');
  content = content.replace(/from-brand-coral/g, 'from-brand-pink');
  content = content.replace(/to-brand-coral/g, 'to-brand-pink');
  
  // Changing white backgrounds to dark variations
  content = content.replace(/bg-white/g, 'bg-brand-charcoal');
  
  // Borders and faint backgrounds
  content = content.replace(/border-gray-200/g, 'border-gray-800');
  content = content.replace(/border-gray-100/g, 'border-gray-800');
  content = content.replace(/bg-gray-100/g, 'bg-brand-midnight');
  content = content.replace(/text-gray-500/g, 'text-gray-400');
  content = content.replace(/text-gray-600/g, 'text-gray-300');
  content = content.replace(/bg-gray-50/g, 'bg-brand-midnight');
  
  fs.writeFileSync(file, content, 'utf8');
});

console.log('Update complete');
