const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(publicDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove Ensayos from nav
  content = content.replace(/<a[^>]*>(?:Ensayos|Rehearsals)<\/a>/g, '');
  
  // Remove buttons with "Colabora" or "Support Us" or similar in the nav area
  // They usually look like <button class="...">Colabora</button>
  content = content.replace(/<button[^>]*>Colabora<\/button>/g, '');
  content = content.replace(/<button class="bg-primary text-on-primary rounded-md px-6 py-2 text-sm font-semibold hover:bg-primary-container hover:shadow-lg transition-all duration-300">\s*Colabora\s*<\/button>/g, '');
  content = content.replace(/<button[^>]*>\s*Colabora\s*<\/button>/g, '');

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Menu cleaned up: removed Ensayos and Colabora button.');
