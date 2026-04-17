const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(publicDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Find something like:
  // <div class="...">Asociación Open Music</div>
  // or
  // <div class="...">\n                Asociación Open Music\n            </div>
  // and convert the <div> to <a href="/" ...>
  
  // Regex to match <div class="...">Asociación Open Music</div>
  // taking into account line breaks and possible spaces.
  content = content.replace(/<(div|span)([^>]*)>\s*Asociación Open Music\s*<\/\1>/g, '<a href="/"$2>Asociación Open Music</a>');

  // Some templates might have the link already but the tag may not be an `a` properly placed.
  // We'll also just check if there's any `<a class="..." href="#">Asociación Open Music</a>` and replace with `/` although we did that in previous passes.
  
  // Same for "Asociacin" just in case there's an encoding issue
  content = content.replace(/<(div|span)([^>]*)>\s*Asociacin Open Music\s*<\/\1>/g, '<a href="/"$2>Asociación Open Music</a>');

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Logo titles are now links to /');
