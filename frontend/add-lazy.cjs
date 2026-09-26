const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'home');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.jsx') && file !== 'Hero.jsx') {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace <img and <motion.img with loading="lazy" added
    const newContent = content.replace(/(<(img|motion\.img)\s)(?!loading="lazy")/g, '$1loading="lazy" ');
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
});

console.log('Done.');
