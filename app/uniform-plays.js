const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

// We will read asi-soy.html which we just made from peter-pan, as the base template.
const templatePath = path.join(publicDir, 'asi-soy.html');
let baseTemplate = fs.readFileSync(templatePath, 'utf8');

// We need to extract the parts that will change.
// To make it fully uniform, we will define a function that replaces the main content block.
// Actually, it is easier to just define the main tags we change.

// Data for each musical
const musicals = {
    'asi-soy': {
        title: 'Así Soy',
        season: 'Temporada 24-25',
        subtitle: 'Nuestro espectacular nuevo musical lleno de magia y diversidad.',
        description: 'Increíbles puestas en escena que celebran la humanidad y el talento.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYIt8RfXWMwmdRwXzIB8pECskEp2icD2Bk2VmCjMFWEkmZsI_HsvzgoElABYMSGVa3ZFZe7KvyCVFWGQJ5ZDnxWlgfRWZ_dkobNtNXZxhPgNC2xvUlHkwZ-5dipL3n4OO67puG2VGDwTt1qK-c-hNsWhV74WL2VgVmU438WyYIWRIHWtuakXyn94BbDUrI_ySiF3OvzB2N6NqUHxJyjWh5Tgq7-yumVtGsVhfdLuSpWjwTUIj_Wsfh-yQkNtSi0MLb1zWbahpH8eI',
        alt: 'Vintage circus tent interior with dramatic spotlight beams cutting through smoke, vibrant reds and golds, theatrical spectacle'
    },
    'tarzan': {
        title: 'Entre Lianas',
        season: 'Temporada 2022',
        subtitle: 'Un viaje impresionante al corazón de la selva.',
        description: 'Nuestra producción dio vida a la naturaleza salvaje con una puesta en escena innovadora y elevados vuelos aéreos.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbICNqd0E2BgDYaI920hz-D1RVZP-aHTx5SW-rUAj7wNrem0EelhbCRDrl12PbjgM02xmoeRuNU98ubwSQKO8atJyaI376Pb2gknxocMs4kLIrUWgRQ47N8VlBAtQiLXsmUUJo6Adyp1nx_PR9iHaAFh9ZHNy8_52Om0oG782RxmIx4Dq6Zbuk7qlNZ4oIU9Hl1GQkI6-EQY_3gsu0RcyrbEgyXg6Nk4z0rH0e3GY3d9fHSAfhL1-pLTcmQsJIspCcsl5eEXbzsKc',
        alt: 'Lush green jungle scene with dramatic lighting, evocative of Tarzan musical setting, vibrant foliage and dappled sunlight'
    },
    'peter-pan': {
        title: 'Peter Pan',
        season: 'Temporada 2021',
        subtitle: 'Un mágico viaje al País de Nunca Jamás.',
        description: 'Esparcimos polvo de hadas por el escenario y tomamos vuelo para contar este cuento mágico.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2ne7ZxZtlcNbFubnwwwzNmeeGhhCNZuXRxe4SmCm4ZEQBGrhn2nKXD01vN2d78ldGM1QSBFwnJcYwvven9oVybahV0UiFUl1jYCn8DFcdj2pOn_wWviDcd184UQQx5Wi-Shvi__3qgNCtmFg0MrHMvCkc-pBK4liw5S2M3nhdzXGuF-YWJl-vClC4-JdfXV__AZSnjgX4BG7zH9CMkVh6Hn3Ojm4kwZXs6GlVqljh7CNv3Omogm_Ht2aJBAUMo2pbeXAqOQBZnyk',
        alt: 'Starry night sky over a misty landscape, evoking the magical flight to Neverland in Peter Pan, deep blues and ethereal light'
    },
    'hercules': {
        title: 'Hero',
        season: 'Temporada 2018',
        subtitle: 'Un viaje mítico de fuerza, corazón y heroicidad.',
        description: 'Una producción llena de energía y hazañas heroicas. Transformamos el escenario en el Monte Olimpo.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWFO5vjKU3tbLNQJWBW-LGUtKtpZTDOKjFDUeXvu1_MEReJ2TFUTgXwyrx-7_7lFfAy-MxddhaJboYhzlVwrdFQOWeFN6fk4iRCis8v58l29tJVyZ5PKfS7Z7hatM0bHV846VCFvH8OU3rS3zD280I9f1-B8GEtip_1q-_FFcgyFb1OnDjLyUv8z8M7RY-EiQIFL7iSHnmW0Ihy_cOyr-tAwIDLat0wf1ancVsATkwZw-y60dFsJsM2YcinLc94uKspiZXgJR7gWM',
        alt: 'Ancient Greek style ruins bathed in golden hour sunlight, theatrical set design for Hercules, majestic and heroic atmosphere'
    }
};

// We will recreate the main hero block in the baseTemplate, substituting variables.
// The baseTemplate has specific texts for Así Soy. Let's make it generic and loop.

for (const [key, data] of Object.entries(musicals)) {
    let newContent = baseTemplate;
    
    // Replace Season
    newContent = newContent.replace(/<span class="inline-block px-3 py-1 bg-tertiary text-on-tertiary rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">[^<]*<\/span>/i, 
        `<span class="inline-block px-3 py-1 bg-tertiary text-on-tertiary rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">${data.season}</span>`);
    
    // Replace Title
    newContent = newContent.replace(/<h1 class="font-headline text-5xl md:text-7xl font-bold text-on-surface mb-4 leading-tight tracking-tight text-balance">[^<]*<\/h1>/i, 
        `<h1 class="font-headline text-5xl md:text-7xl font-bold text-on-surface mb-4 leading-tight tracking-tight text-balance">${data.title}</h1>`);
        
    // Replace Subtitle
    newContent = newContent.replace(/<p class="font-body text-xl md:text-2xl text-on-surface-variant mb-8 max-w-2xl font-medium">[^<]*<\/p>/i, 
        `<p class="font-body text-xl md:text-2xl text-on-surface-variant mb-8 max-w-2xl font-medium">${data.subtitle}</p>`);
        
    // Descriptive paragraph inside <p class="font-body text-lg md:text-xl text-surface-container-high max-w-2xl mx-auto font-medium"> or similar maybe?
    // Let's replace the first Synopsis text
    newContent = newContent.replace(/"Increíbles puestas en escena que celebran la humanidad y el talento\."/g, `"${data.description}"`);
    // Fallback if that exact string isn't found perfectly due to previous passes:
    newContent = newContent.replace(/Increíbles puestas en escena que celebran la humanidad y el talento\./g, data.description);

    // Replace Image
    // The image tag is something like <img alt="..." class="..." data-alt="..." src="...">
    newContent = newContent.replace(/<img alt="[^"]*" class="w-full h-full object-cover object-center opacity-40 mix-blend-overlay"[^>]*src="[^"]*"/, 
        `<img alt="${data.title} Production" class="w-full h-full object-cover object-center opacity-40 mix-blend-overlay" data-alt="${data.alt}" src="${data.image}"`);
        
    // Also replace image inside <div class="aspect-[4\/5]...
    // Let's just find any image tag with src starting with https://lh3... and replace it
    newContent = newContent.replace(/src="https:\/\/lh3\.googleusercontent\.com[^"]*"/g, `src="${data.image}"`);

    // Ensure title tag is right
    newContent = newContent.replace(/<title>.*?<\/title>/, `<title>${data.title} | Asociación Open Music</title>`);

    // Write file
    fs.writeFileSync(path.join(publicDir, `${key}.html`), newContent, 'utf8');
}

// Ensure obras.html order explicitly puts "Así Soy" first if "Es la más reciente".
let obrasContent = fs.readFileSync(path.join(publicDir, 'obras.html'), 'utf8');

// obras.html has articles inside a <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">
// It's tricky to rearrange via regex, let's just make sure "Así Soy" has Temporada 25-26 and stands out.
// Actually, it's easier to recreate obras.html completely with the 4 cards in correct order: 
// Así Soy (24-25), Entre Lianas (22), Peter Pan (21), Hero (18)

let newObrasGrid = `
<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">
    <article class="bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300">
        <div class="h-80 overflow-hidden relative">
            <img alt="Así Soy Production" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="${musicals['asi-soy'].image}"/>
            <div class="absolute top-4 right-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-xs font-label tracking-wide font-bold">Temporada 24-25 (Reciente)</div>
        </div>
        <div class="p-8 flex flex-col flex-grow bg-surface-container-low mt-4 rounded-t-xl">
            <h2 class="font-headline text-3xl font-bold text-primary mb-3">Así Soy</h2>
            <p class="font-body text-on-surface-variant mb-6 flex-grow leading-relaxed">${musicals['asi-soy'].subtitle}</p>
            <a href="/asi-soy" class="self-start text-secondary hover:text-primary transition-colors font-label font-semibold flex items-center gap-2 group">Explorar Obra<span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span></a>
        </div>
    </article>
    <article class="bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300 mt-0 lg:mt-12">
        <div class="h-80 overflow-hidden relative">
            <img alt="Entre Lianas Production" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="${musicals['tarzan'].image}"/>
            <div class="absolute top-4 right-4 bg-secondary-fixed-dim/90 backdrop-blur-sm text-on-secondary-fixed px-3 py-1 rounded-full text-xs font-label tracking-wide">Temporada 2022</div>
        </div>
        <div class="p-8 flex flex-col flex-grow bg-surface-container-low mt-4 rounded-t-xl">
            <h2 class="font-headline text-3xl font-bold text-primary mb-3">Entre Lianas</h2>
            <p class="font-body text-on-surface-variant mb-6 flex-grow leading-relaxed">${musicals['tarzan'].subtitle}</p>
            <a href="/tarzan" class="self-start text-secondary hover:text-primary transition-colors font-label font-semibold flex items-center gap-2 group">Explorar Obra<span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span></a>
        </div>
    </article>
    <article class="bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300">
        <div class="h-80 overflow-hidden relative">
            <img alt="Peter Pan Production" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="${musicals['peter-pan'].image}"/>
            <div class="absolute top-4 right-4 bg-secondary-fixed-dim/90 backdrop-blur-sm text-on-secondary-fixed px-3 py-1 rounded-full text-xs font-label tracking-wide">Temporada 2021</div>
        </div>
        <div class="p-8 flex flex-col flex-grow bg-surface-container-low mt-4 rounded-t-xl">
            <h2 class="font-headline text-3xl font-bold text-primary mb-3">Peter Pan</h2>
            <p class="font-body text-on-surface-variant mb-6 flex-grow leading-relaxed">${musicals['peter-pan'].subtitle}</p>
            <a href="/peter-pan" class="self-start text-secondary hover:text-primary transition-colors font-label font-semibold flex items-center gap-2 group">Explorar Obra<span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span></a>
        </div>
    </article>
    <article class="bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300 mt-0 lg:mt-12">
        <div class="h-80 overflow-hidden relative">
            <img alt="Hero Production" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="${musicals['hercules'].image}"/>
            <div class="absolute top-4 right-4 bg-secondary-fixed-dim/90 backdrop-blur-sm text-on-secondary-fixed px-3 py-1 rounded-full text-xs font-label tracking-wide">Temporada 2018</div>
        </div>
        <div class="p-8 flex flex-col flex-grow bg-surface-container-low mt-4 rounded-t-xl">
            <h2 class="font-headline text-3xl font-bold text-primary mb-3">Hero</h2>
            <p class="font-body text-on-surface-variant mb-6 flex-grow leading-relaxed">${musicals['hercules'].subtitle}</p>
            <a href="/hercules" class="self-start text-secondary hover:text-primary transition-colors font-label font-semibold flex items-center gap-2 group">Explorar Obra<span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span></a>
        </div>
    </article>
</section>
`;

obrasContent = obrasContent.replace(/<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">[\s\S]*?<\/section>/, newObrasGrid);

fs.writeFileSync(path.join(publicDir, 'obras.html'), obrasContent, 'utf8');

console.log('Uniform formatting applied successfully');
