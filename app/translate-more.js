const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

const replacements = {
  // Navigation / Titles
  'Ortega Open Music': 'Asociación Open Music',
  'The Greatest Showman': 'Así Soy', // Substituting the placeholder Greatest Showman for their actual new musical
  'A magical journey to Neverland.': 'Un viaje mágico al País de Nunca Jamás.',
  'A breathtaking journey into the heart of the jungle.': 'Un viaje impresionante al corazón de la selva.',
  
  // Peter Pan & Tarzan & Hercules sections
  'Synopsis': 'Sinopsis',
  'Behind the Magic': 'La Magia Entre Bastidores',
  'Gallery of Dreams': 'Galería de Sueños',
  'The Story': 'La Historia',
  'Cast &amp; Crew': 'Reparto y Equipo',
  'Cast & Crew': 'Reparto y Equipo',
  'Building the Jungle': 'Construyendo la Selva',
  'Gallery': 'Galería',
  'Behind the Scenes': 'Entre Bastidores',
  'Current Playbill': 'Cartelera Actual',
  'Digital Proscenium': 'El Proscenio Digital',
  'Setting the Stage': 'Preparando el Escenario',
  'Costume Magic': 'La Magia del Vestuario',
  'View All': 'Ver Todo',
  
  // News and Events
  'Upcoming Events': 'Próximos Eventos',
  'OPENING NIGHT': 'NOCHE DE ESTRENO',
  'Announcement': 'Anuncio',
  'Review': 'Reseña',
  'Feature': 'Destacado',
  'Read Full Story': 'Leer la Noticia Completa',
  
  // Team / Roles
  'Rigging Specialists': 'Especialistas en Montaje',
  'Aerial Choreographers': 'Coreógrafos Aéreos',
  'Lead - Tarzán': 'Protagonista - Tarzán',
  'Lead - Tarzn': 'Protagonista - Tarzán', // taking encoding artifact into account
  
  // Dates/Months
  ' Nov<': ' Nov<',
  ' Oct ': ' Oct ',
  'Grand Theater': 'Gran Teatro',
  'Room B': 'Sala B',
  'Main Stage': 'Escenario Principal'
};

files.forEach(file => {
  const filePath = path.join(publicDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  for (const [key, value] of Object.entries(replacements)) {
    content = content.split(key).join(value);
  }
  
  content = content.replace(/Tarzn/g, 'Tarzán');
  content = content.replace(/Hrcules/g, 'Hércules');
  
  // Specific English paragraphs
  content = content.replace(/Experience the magic, the music, and the spectacle of our most ambitious production yet\. A celebration of imagination and community\./g, 'Vive la magia, la música y el espectáculo de nuestra nueva producción. Una celebración de imaginación escolar.');
  content = content.replace(/Over 150 handcrafted pieces blending Victorian London with Neverland whimsy\./g, 'Más de 150 piezas elaboradas a mano mezclando el Londres Victoriano con la magia de Nunca Jamás.');
  content = content.replace(/Alex's dedication to aerial training brought an unparalleled authenticity to the role\./g, 'La dedicación del alumnado en el entrenamiento aéreo aportó una autenticidad inigualable al papel.');
  content = content.replace(/A chorus of 40 students creating the living, breathing jungle\./g, 'Un coro de alumnos creando la viva y palpitante selva.');
  content = content.replace(/Custom-engineered aerial rigging systems\./g, 'Sistemas aéreos de ingeniería a medida.');
  content = content.replace(/Hand-painted canvas drops mimicking dense foliage\./g, 'Telones pintados a mano imitando el espeso follaje.');
  content = content.replace(/Starting next month, full cast run-throughs will be held at the historic Lyric Hall\./g, 'A partir del mes que viene, se realizarán los ensayos generales en el Colegio Ortega y Gasset.');
  content = content.replace(/Read the critical reception and see gallery photos from our latest production\./g, 'Lee la recepción crítica y mira la galería de fotos de nuestra última producción.');
  content = content.replace(/Prepare your concertos\. We are expanding our ensemble for the upcoming seasonal performance\. Find repertoire requirements and sign-up slots here\./g, 'Nos preparamos para los próximos eventos de la temporada. ¡Atentos a todas las novedades del colegio!');

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Deep translations applied successfully!');
