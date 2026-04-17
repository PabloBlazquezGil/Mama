const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

// Create asi-soy.html based on peter-pan.html
const peterPanPath = path.join(publicDir, 'peter-pan.html');
let asiSoyContent = fs.readFileSync(peterPanPath, 'utf8');

asiSoyContent = asiSoyContent.replace(/Peter Pan/g, 'Así Soy');
asiSoyContent = asiSoyContent.replace(/Un mágico viaje al País de Nunca Jamás./g, 'Nuestro espectacular nuevo musical lleno de magia y diversidad.');
asiSoyContent = asiSoyContent.replace(/Decenas de piezas y disfraces hechos con cariño mezclando la magia con Londres./g, 'Increíbles puestas en escena que celebran la humanidad y el talento.');
asiSoyContent = asiSoyContent.replace(/2021 Temporada/g, 'Temporada 24-25');

fs.writeFileSync(path.join(publicDir, 'asi-soy.html'), asiSoyContent, 'utf8');

// Also update route in server.js
const serverPath = path.join(__dirname, 'server.js');
let serverContent = fs.readFileSync(serverPath, 'utf8');

if (!serverContent.includes('asi-soy')) {
    serverContent = serverContent.replace(
        "app.listen(PORT", 
        "app.get('/asi-soy', (req, res) => {\n    res.sendFile(path.join(__dirname, 'public', 'asi-soy.html'));\n});\n\napp.listen(PORT"
    );
    fs.writeFileSync(serverPath, serverContent, 'utf8');
}

// Rename titles in obras.html
let obrasContent = fs.readFileSync(path.join(publicDir, 'obras.html'), 'utf8');
obrasContent = obrasContent.replace(/>Tarzán</g, '>Entre Lianas<');
obrasContent = obrasContent.replace(/>Hércules</g, '>Hero<');
// point Así soy link to /asi-soy
obrasContent = obrasContent.replace(/<a href="\/"([\s\S]*?)>Explorar Obra/g, '<a href="/asi-soy"$1>Explorar Obra');
fs.writeFileSync(path.join(publicDir, 'obras.html'), obrasContent, 'utf8');

// Now, update navbar in ALL html files to be exactly the same
const navHtml = `
<header class="fixed top-0 w-full z-50 bg-white/70 dark:bg-stone-950/70 backdrop-blur-md shadow-sm dark:shadow-none bg-surface-container-low transition-colors duration-300">
<div class="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
<a href="/" class="font-serif text-2xl font-bold tracking-tighter text-[#750003] dark:text-[#fcf9f8] hover:opacity-80 transition-opacity">Asociación Open Music</a>
<nav class="hidden md:flex gap-8 items-center">
<a class="text-stone-600 dark:text-stone-400 hover:text-[#750003] transition-colors font-sans tracking-tight hover:text-[#735c00] transition-all duration-300" href="/">Inicio</a>
<a class="text-stone-600 dark:text-stone-400 hover:text-[#750003] transition-colors font-sans tracking-tight hover:text-[#735c00] transition-all duration-300" href="/obras">Obras</a>
<a class="text-stone-600 dark:text-stone-400 hover:text-[#750003] transition-colors font-sans tracking-tight hover:text-[#735c00] transition-all duration-300" href="/comunidad">Comunidad</a>
<a class="text-stone-600 dark:text-stone-400 hover:text-[#750003] transition-colors font-sans tracking-tight hover:text-[#735c00] transition-all duration-300" href="/noticias">Noticias</a>
</nav>
<button class="md:hidden text-primary">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</header>
`;

const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(publicDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Attempt 1: Replace <nav>...</nav>
    // Sometimes it's <nav class="fixed ...">...</nav> or <header class="fixed...">...</header>
    // We will replace anything between the body tag and the first <main tag or similar
    
    // We can use a regex to capture <header>...</header> or <nav>...</nav>
    if (content.includes('<header')) {
        content = content.replace(/<header[\s\S]*?<\/header>/, navHtml.trim());
    } else if (content.includes('<nav')) {
        content = content.replace(/<nav[\s\S]*?<\/nav>/, navHtml.trim());
    }
    
    // Additionally rename titles inside individual plays
    if (file === 'tarzan.html') {
        content = content.replace(/>Tarzán</g, '>Entre Lianas<');
        content = content.replace(/'(?:\.\.\/)?images\/tarzan\.jpg'/g, 'data-alt'); // ignore this, just ensuring title
    }
    if (file === 'hercules.html') {
        content = content.replace(/>Hércules</g, '>Hero<');
    }

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Setup finished');
