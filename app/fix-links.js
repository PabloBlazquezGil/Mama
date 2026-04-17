const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

const replacements = {
  'href="#">Home</a>': 'href="/">Home</a>',
  'href="#">Musicals</a>': 'href="/obras">Musicals</a>',
  'href="#">Community</a>': 'href="/comunidad">Community</a>',
  'href="#">News</a>': 'href="/noticias">News</a>',
  // Rehearsals and Tickets don't have dedicated pages so leaving them alone or link back to '/'
};

files.forEach(file => {
  const filePath = path.join(publicDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  for (const [key, value] of Object.entries(replacements)) {
    content = content.replace(new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), value);
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Links updated');
