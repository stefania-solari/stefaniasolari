// Script to remove version numbers from imports in all UI components
// Run with: node fix-imports.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uiDir = path.join(__dirname, 'components', 'ui');

// Patterns to fix
const patterns = [
  { from: /@radix-ui\/([\w-]+)@[\d.]+/g, to: '@radix-ui/$1' },
  { from: /lucide-react@[\d.]+/g, to: 'lucide-react' },
  { from: /class-variance-authority@[\d.]+/g, to: 'class-variance-authority' },
  { from: /cmdk@[\d.]+/g, to: 'cmdk' },
  { from: /embla-carousel-react@[\d.]+/g, to: 'embla-carousel-react' },
  { from: /input-otp@[\d.]+/g, to: 'input-otp' },
  { from: /react-resizable-panels@[\d.]+/g, to: 'react-resizable-panels' },
  { from: /sonner@[\d.]+/g, to: 'sonner' },
  { from: /next-themes@[\d.]+/g, to: 'next-themes' },
  { from: /react-day-picker@[\d.]+/g, to: 'react-day-picker' },
];

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  patterns.forEach(({ from, to }) => {
    const newContent = content.replace(from, to);
    if (newContent !== content) {
      modified = true;
      content = newContent;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${path.basename(filePath)}`);
    return true;
  }
  return false;
}

// Process all .tsx files in components/ui
const files = fs.readdirSync(uiDir).filter(file => file.endsWith('.tsx'));
let totalFixed = 0;

files.forEach(file => {
  const filePath = path.join(uiDir, file);
  if (fixFile(filePath)) {
    totalFixed++;
  }
});

console.log(`\n🎉 Fixed ${totalFixed} files out of ${files.length}`);
