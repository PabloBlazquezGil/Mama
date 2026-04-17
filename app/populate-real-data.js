const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

// Footer general replacements
files.forEach(file => {
  const filePath = path.join(publicDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Footer updates
  content = content.replace(/Política de Privacidad<\/a>/g, 'Facebook Oficial</a>');
  content = content.replace(/href="#"/g, 'href="/"'); // safeguard
  
  // Link to facebook
  content = content.replace(/>Facebook Oficial<\/a>/g, ' href="https://www.facebook.com/ortega.open" target="_blank">Facebook Oficial</a>');
  
  // Link to Web Center
  content = content.replace(/>Dossier de Prensa<\/a>/g, ' href="http://cportegaygasset.juntaextremadura.net/" target="_blank">Web del Centro (CEIP Ortega y Gasset)</a>');
  
  // Update footer copyright text to be Asociación Open Music
  content = content.replace(/© 2024 Asociación Open Music\. El Proscenio Digital\./g, '© 2024-2025 Asociación Open Music - CEIP Ortega y Gasset (Almendralejo).');
  
  fs.writeFileSync(filePath, content, 'utf8');
});

// Update index.html specific info
const indexPath = path.join(publicDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// The hero image or button can point to the promotional video
indexContent = indexContent.replace(/<button class="bg-primary text-on-primary rounded-md px-8 py-3\.5 text-base font-semibold hover:bg-primary-container hover:shadow-\[0_8px_32px_rgba\(117,0,3,0\.3\)\] transition-all duration-300 w-full sm:w-auto">[^<]*Más Información[^<]*<\/button>/g, '<a href="https://www.youtube.com/watch?v=2DhEJegyIU4" target="_blank" class="inline-block bg-primary text-on-primary text-center rounded-md px-8 py-3.5 text-base font-semibold hover:bg-primary-container hover:shadow-[0_8px_32px_rgba(117,0,3,0.3)] transition-all duration-300 w-full sm:w-auto">Ver Vídeo Promocional 25-26</a>');

fs.writeFileSync(indexPath, indexContent, 'utf8');

// Give a more realistic look to Noticias
const noticiasPath = path.join(publicDir, 'noticias.html');
if (fs.existsSync(noticiasPath)) {
    let noticiasContent = fs.readFileSync(noticiasPath, 'utf8');
    
    // Substitute standard news for blog news
    noticiasContent = noticiasContent.replace(/Prepare your concertos\. We are expanding our ensemble for the upcoming seasonal performance\. Find repertoire requirements and sign-up slots here\./g, 'La Asociación Open Music presentará su musical "Así soy yo" en el Teatro Carolina Coronado en Mayo 2025.');
    noticiasContent = noticiasContent.replace(/Starting next month, full cast run-throughs will be held at the historic Lyric Hall\./g, 'El CEIP Ortega y Gasset presenta su nuevo musical. Escúchanos en Radio Comarca de Barros hablar sobre los ensayos de este sábado.');
    noticiasContent = noticiasContent.replace(/Read the critical reception and see gallery photos from our latest production\./g, 'Hemos recibido la visita del CEIP San Francisco de Asís (Fregenal de la Sierra). ¡Gracias por acompañarnos en el musical "Así Soy"!');
    
    // Fix dates roughly
    noticiasContent = noticiasContent.replace(/Oct 24, 2024/g, 'Mayo 2025');
    noticiasContent = noticiasContent.replace(/Oct 20, 2024/g, 'Marzo 2025');
    noticiasContent = noticiasContent.replace(/Oct 18, 2024/g, 'Abril 2024');

    fs.writeFileSync(noticiasPath, noticiasContent, 'utf8');
}

console.log('Real data from Blog added successfully.');
