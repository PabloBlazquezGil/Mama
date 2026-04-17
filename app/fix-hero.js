const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const indexPath = path.join(publicDir, 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// The hero overlay currently uses light gradients that ruin contrast.
// The original code was: 
// <div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent z-10"></div>
// <div class="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent z-10"></div>

// We will add a dark overlay.
content = content.replace(
    /<div class="absolute inset-0 bg-gradient-to-t from-surface via-surface\/80 to-transparent z-10"><\/div>/,
    '<div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent z-10"></div>\n<div class="absolute inset-0 bg-black/60 z-10"></div>'
);

// We will also directly fix the text class on the P tag below the "Así Soy" title to be 100% white with shadow
content = content.replace(
    /text-surface-container-high max-w-2xl mx-auto font-medium/g,
    'text-white drop-shadow-md max-w-2xl mx-auto font-semibold'
);
content = content.replace(
    /text-surface-bright drop-shadow-2xl/g,
    'text-white drop-shadow-2xl text-shadow-xl'
);

fs.writeFileSync(indexPath, content, 'utf8');

console.log('Hero text contrast fixed');
