const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

// --- 1. REMOVE SIDEBAR FROM MUSICAL PAGES ---
const musicalFiles = ['asi-soy.html', 'tarzan.html', 'peter-pan.html', 'hercules.html'];

musicalFiles.forEach(file => {
    const filePath = path.join(publicDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // The sidebar usually starts with `<aside` and ends with `</aside>`
    content = content.replace(/<aside[\s\S]*?<\/aside>/i, '');
    
    // We should also replace `<div class="lg:w-3/4">` with `<div class="w-full max-w-5xl mx-auto">` or similar
    // to ensure the content centers or takes full space appropriately.
    content = content.replace(/<div class="lg:w-3\/4">/g, '<div class="w-full max-w-5xl mx-auto">');
    // If it was just lg:w-3/4 something:
    content = content.replace(/lg:w-3\/4/g, 'w-full max-w-5xl mx-auto');

    fs.writeFileSync(filePath, content, 'utf8');
});

// --- 2. REORDER OBRAS.HTML ---
const obrasPath = path.join(publicDir, 'obras.html');
let obrasContent = fs.readFileSync(obrasPath, 'utf8');

const musicals = {
    'peter-pan': {
        title: 'Peter Pan',
        season: 'Temporada 2021', // Actually, the user says Peter pan was the first, then hero
        subtitle: 'Un mágico viaje al País de Nunca Jamás.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2ne7ZxZtlcNbFubnwwwzNmeeGhhCNZuXRxe4SmCm4ZEQBGrhn2nKXD01vN2d78ldGM1QSBFwnJcYwvven9oVybahV0UiFUl1jYCn8DFcdj2pOn_wWviDcd184UQQx5Wi-Shvi__3qgNCtmFg0MrHMvCkc-pBK4liw5S2M3nhdzXGuF-YWJl-vClC4-JdfXV__AZSnjgX4BG7zH9CMkVh6Hn3Ojm4kwZXs6GlVqljh7CNv3Omogm_Ht2aJBAUMo2pbeXAqOQBZnyk'
    },
    'hercules': {
        title: 'Hero',
        season: 'Temporada 2018',
        subtitle: 'Un viaje mítico de fuerza, corazón y heroicidad.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWFO5vjKU3tbLNQJWBW-LGUtKtpZTDOKjFDUeXvu1_MEReJ2TFUTgXwyrx-7_7lFfAy-MxddhaJboYhzlVwrdFQOWeFN6fk4iRCis8v58l29tJVyZ5PKfS7Z7hatM0bHV846VCFvH8OU3rS3zD280I9f1-B8GEtip_1q-_FFcgyFb1OnDjLyUv8z8M7RY-EiQIFL7iSHnmW0Ihy_cOyr-tAwIDLat0wf1ancVsATkwZw-y60dFsJsM2YcinLc94uKspiZXgJR7gWM'
    },
    'tarzan': {
        title: 'Entre Lianas',
        season: 'Temporada 2022',
        subtitle: 'Un viaje impresionante al corazón de la selva.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbICNqd0E2BgDYaI920hz-D1RVZP-aHTx5SW-rUAj7wNrem0EelhbCRDrl12PbjgM02xmoeRuNU98ubwSQKO8atJyaI376Pb2gknxocMs4kLIrUWgRQ47N8VlBAtQiLXsmUUJo6Adyp1nx_PR9iHaAFh9ZHNy8_52Om0oG782RxmIx4Dq6Zbuk7qlNZ4oIU9Hl1GQkI6-EQY_3gsu0RcyrbEgyXg6Nk4z0rH0e3GY3d9fHSAfhL1-pLTcmQsJIspCcsl5eEXbzsKc'
    },
    'asi-soy': {
        title: 'Así Soy',
        season: 'Temporada 24-25',
        subtitle: 'Nuestro espectacular nuevo musical lleno de magia y diversidad.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYIt8RfXWMwmdRwXzIB8pECskEp2icD2Bk2VmCjMFWEkmZsI_HsvzgoElABYMSGVa3ZFZe7KvyCVFWGQJ5ZDnxWlgfRWZ_dkobNtNXZxhPgNC2xvUlHkwZ-5dipL3n4OO67puG2VGDwTt1qK-c-hNsWhV74WL2VgVmU438WyYIWRIHWtuakXyn94BbDUrI_ySiF3OvzB2N6NqUHxJyjWh5Tgq7-yumVtGsVhfdLuSpWjwTUIj_Wsfh-yQkNtSi0MLb1zWbahpH8eI'
    }
};

let newGrid = '<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">\n';
const order = ['peter-pan', 'hercules', 'tarzan', 'asi-soy'];

order.forEach((key, index) => {
    let mtClass = (index % 2 !== 0) ? 'mt-0 lg:mt-12' : '';
    let m = musicals[key];
    newGrid += `
    <article class="bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300 ${mtClass}">
        <div class="h-80 overflow-hidden relative">
            <img alt="${m.title} Production" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="${m.image}"/>
            <div class="absolute top-4 right-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-xs font-label tracking-wide font-bold">${key === 'asi-soy' ? m.season + ' (Reciente)' : m.season}</div>
        </div>
        <div class="p-8 flex flex-col flex-grow bg-surface-container-low mt-4 rounded-t-xl">
            <h2 class="font-headline text-3xl font-bold text-primary mb-3">${m.title}</h2>
            <p class="font-body text-on-surface-variant mb-6 flex-grow leading-relaxed">${m.subtitle}</p>
            <a href="/${key}" class="self-start text-secondary hover:text-primary transition-colors font-label font-semibold flex items-center gap-2 group">Explorar Obra<span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span></a>
        </div>
    </article>
`;
});

newGrid += '</section>';

obrasContent = obrasContent.replace(/<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">[\s\S]*?<\/section>/, newGrid);
fs.writeFileSync(obrasPath, obrasContent, 'utf8');

console.log('Sidebar removed and order updated!');
