const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

const replacements = {
  '>Home</a>': '>Inicio</a>',
  '>Musicals</a>': '>Obras</a>',
  '>Rehearsals</a>': '>Ensayos</a>',
  '>Community</a>': '>Comunidad</a>',
  '>News</a>': '>Noticias</a>',
  '>Tickets</a>': '', // removing content of Tickets tag
  '>Support Us\n            </button>': '>Colabora\n            </button>',
  '>Support Us</button>': '>Colabora</button>',
  'Get Tickets Now': 'Más Información',
  'View Playbill': 'Ver Programa',
  'Now Playing': 'En Cartelera',
  'Our Journey': 'Nuestra Historia',
  'See Full History': 'Ver Todo',
  'Season<': 'Temporada<',
  '2022 Season': 'Temporada 2022',
  '2021 Season': 'Temporada 2021',
  '2019 Season': 'Temporada 2019',
  
  // Footer
  'Terms of Service': 'Términos de Servicio',
  'Privacy Policy': 'Política de Privacidad',
  'Backstage Access': 'Acceso Entre Bastidores',
  'Press Kit': 'Dossier de Prensa',
  'Contact Us': 'Contacto',
  'The Digital Proscenium.': 'El Proscenio Digital.',
  
  // Titles / Homepage texts
  'Homepage': 'Inicio',
  'Experience the magic, the music, and the spectacle of our most ambitious production yet. A celebration of imagination and community.': 'Vive la magia, la música y el espectáculo de nuestra producción más ambiciosa hasta la fecha. Una celebración de imaginación y comunidad.',
  "From the jungle canopy to Neverland, explore the worlds we've brought to life on the digital proscenium.": "Desde el dosel de la selva hasta el País de Nunca Jamás, explora los mundos a los que hemos dado vida.",
  'A soaring adventure exploring the bonds of family.': 'Una aventura de altura que explora los lazos familiares.',
  "The boy who wouldn't grow up took flight on our stage.": "El niño que no quería crecer tomó vuelo en nuestro escenario.",
  'A mythical journey of strength, heart, and becoming a hero.': 'Un viaje mítico de fuerza, corazón y heroísmo.'
};

files.forEach(file => {
  const filePath = path.join(publicDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  for (const [key, value] of Object.entries(replacements)) {
    content = content.split(key).join(value);
  }
  
  // Extra regex replacements
  content = content.replace(/Support Us/g, 'Colabora');
  content = content.replace(/<a[^>]*>Tickets<\/a>/g, '');
  content = content.replace(/<a[^>]*><\/a>/g, ''); // remove empty anchor if we made it empty
  
  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Translations applied successfully!');
