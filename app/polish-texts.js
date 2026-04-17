const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

function polishFile(filename, replacements) {
  const filePath = path.join(publicDir, filename);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [key, value] of Object.entries(replacements)) {
      content = content.split(key).join(value);
  }
  content = content.replace(/Explore Galería/g, 'Explorar Obra');
  fs.writeFileSync(filePath, content, 'utf8');
}

polishFile('obras.html', {
  'Step onto the digital stage and explore the visual legacy of our past productions. From the heart of the jungle to the heights of Neverland, witness the passion and dedication of the Asociación Open Music ensemble.': 'Entra en nuestro proscenio digital y explora el legado de nuestras producciones. Desde el corazón de la selva hasta el País de Nunca Jamás, sé testigo de la pasión y dedicación del equipo del CEIP Ortega y Gasset.',
  'Our production brought the wild to life with innovative staging, soaring aerial choreography, and the unforgettable rhythms of Phil Collins.': 'Nuestra producción dio vida a la selva con una puesta en escena audaz y los inconfundibles ritmos que nos hicieron vibrar.',
  'We sprinkled fairy dust over the stage and took flight. A magical, visually stunning retelling of the classic tale that reminded audiences of all ages what it means to believe.': 'Esparcimos polvo de hadas por el escenario y tomamos vuelo. Una recreación mágica del cuento clásico que recordó al público lo que significa creer en la magia.',
  'A godly production full of gospel energy and heroic feats. We transformed the proscenium into Mount Olympus, delivering a high-octane performance that went the distance.': 'Una producción divina llena de energía y hazañas heroicas. Transformamos el escenario en el Monte Olimpo, brindando una actuación de alto octanaje.',
  'Our most spectacular undertaking. A celebration of humanity and the birth of show business, featuring dazzling costumes, immense chorus numbers, and undeniable theatrical magic.': 'Nuestro proyecto más espectacular. Una celebración de la diversidad y del talento de nuestro alumnado, con un gran número de intérpretes y una innegable magia teatral.',
  '2018 Season': 'Temporada 24-25',
  'Temporada 2019': 'Temporada 2018',
  'href="/" href="https://www.facebook.com/ortega.open"': 'href="https://www.facebook.com/ortega.open"',
  'href="/" href="http://cportegaygasset.juntaextremadura.net/"': 'href="http://cportegaygasset.juntaextremadura.net/"'
});

let obrasContent = fs.readFileSync(path.join(publicDir, 'obras.html'), 'utf8');
obrasContent = obrasContent.replace(/<button class="[^"]*self-start text-secondary[^"]*">[\s\S]*?Explorar Obra[\s\S]*?<\/button>/g, '<a href="#" class="self-start text-secondary hover:text-primary transition-colors font-label font-semibold flex items-center gap-2 group">Explorar Obra<span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span></a>');
obrasContent = obrasContent.replace(/<h2 class="font-headline text-3xl font-bold text-primary mb-3">Tarzán<\/h2>[\s\S]*?<a href="#"/g, '<h2 class="font-headline text-3xl font-bold text-primary mb-3">Tarzán</h2>\n<p class="font-body text-on-surface-variant mb-6 flex-grow leading-relaxed">\nUn viaje impresionante al corazón de la selva. Nuestra producción dio vida a la selva con una puesta en escena audaz y los inconfundibles ritmos que nos hicieron vibrar.\n</p>\n<a href="/tarzan"');
obrasContent = obrasContent.replace(/<h2 class="font-headline text-3xl font-bold text-primary mb-3">Peter Pan<\/h2>[\s\S]*?<a href="#"/g, '<h2 class="font-headline text-3xl font-bold text-primary mb-3">Peter Pan</h2>\n<p class="font-body text-on-surface-variant mb-6 flex-grow leading-relaxed">\nEsparcimos polvo de hadas por el escenario y tomamos vuelo. Una recreación mágica del cuento clásico que recordó al público lo que significa creer en la magia.\n</p>\n<a href="/peter-pan"');
obrasContent = obrasContent.replace(/<h2 class="font-headline text-3xl font-bold text-primary mb-3">Hércules<\/h2>[\s\S]*?<a href="#"/g, '<h2 class="font-headline text-3xl font-bold text-primary mb-3">Hércules</h2>\n<p class="font-body text-on-surface-variant mb-6 flex-grow leading-relaxed">\nUna producción divina llena de energía y hazañas heroicas. Transformamos el escenario en el Monte Olimpo, brindando una actuación de alto octanaje.\n</p>\n<a href="/hercules"');
obrasContent = obrasContent.replace(/<h2 class="font-headline text-3xl font-bold text-primary mb-3">Así Soy<\/h2>[\s\S]*?<a href="#"/g, '<h2 class="font-headline text-3xl font-bold text-primary mb-3">Así Soy</h2>\n<p class="font-body text-on-surface-variant mb-6 flex-grow leading-relaxed">\nNuestro proyecto más espectacular. Una celebración de la diversidad y del talento de nuestro alumnado, con un gran número de intérpretes y una innegable magia teatral.\n</p>\n<a href="/"');
fs.writeFileSync(path.join(publicDir, 'obras.html'), obrasContent, 'utf8');

const indexTranslations = {
  'A soaring adventure exploring the bonds of family.': 'Una aventura que explora los lazos familiares por encima del dosel de los árboles.',
  "The boy who wouldn't grow up took flight on our stage.": 'El niño que no quería crecer tomó vuelo en nuestro gran escenario.',
  'A mythical journey of strength, heart, and becoming a hero.': 'Un viaje mítico de fuerza, corazón y amistad verdaderos.',
  'See Full History': 'Ver Toda Nuestra Historia',
  'Explore Galería': 'Explorar Obra'
};
polishFile('index.html', indexTranslations);

let indexContent = fs.readFileSync(path.join(publicDir, 'index.html'), 'utf8');
indexContent = indexContent.replace(/Un viaje mítico de fuerza, corazón y heroísmo\./g, indexTranslations['A mythical journey of strength, heart, and becoming a hero.']);
fs.writeFileSync(path.join(publicDir, 'index.html'), indexContent, 'utf8');

polishFile('peter-pan.html', {
  'A magical journey to Neverland.': 'Un mágico viaje al País de Nunca Jamás.',
  'Over 150 handcrafted pieces blending Victorian London with Neverland whimsy.': 'Decenas de piezas y disfraces hechos con cariño mezclando la magia con Londres.',
  'Rigging Specialists': 'Especialistas',
  'Aerial Choreographers': 'Coreógrafos',
  'Costume Magic': 'La Magia del Vestuario',
  'Setting the Stage': 'Preparando Escenarios',
  'Behind the Magic': 'La Magia Entre Bastidores',
  'Gallery of Dreams': 'Galería de Sueños'
});

polishFile('tarzan.html', {
  'A breathtaking journey into the heart of the jungle.': 'Un increíble viaje al corazón más profundo de la selva.',
  "Alex's dedication to aerial training brought an unparalleled authenticity to the role.": 'La ilusión de nuestro protagonista aportó una increíble magia al papel.',
  'A chorus of 40 students creating the living, breathing jungle.': 'Un grupo inmenso de alumnado conformando una selva viva y expectante.',
  'Custom-engineered aerial rigging systems.': 'Decorados y material adaptado a este gran reto.',
  'Hand-painted canvas drops mimicking dense foliage.': 'Telones pintados a mano imitando el espeso follaje verde.',
  'Building the Jungle': 'Construyendo la Selva',
  'The Story': 'Nuestra Historia',
  'Cast &amp; Crew': 'Nuestros Intérpretes',
  'Cast & Crew': 'Nuestros Intérpretes',
  'Lead - Tarzán': 'Protagonista'
});

console.log('Pages polished successfully!');
