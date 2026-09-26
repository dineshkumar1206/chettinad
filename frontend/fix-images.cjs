const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'home');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.jsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix imgloading typo
    content = content.replace(/<imgloading/g, '<img loading');
    content = content.replace(/<motion\.imgloading/g, '<motion.img loading');
    
    // Fix South.jsx specific size and position
    if (file === 'South.jsx') {
      content = content.replace(
        /lg:h-\[75%\] max-h-\[35vh\] lg:max-h-none drop-shadow-xl object-contain object-bottom lg:object-left-bottom translate-y-0/g,
        'lg:h-[60%] max-h-[35vh] lg:max-h-none drop-shadow-xl object-contain object-bottom lg:object-left-bottom translate-y-0 lg:translate-y-12'
      );
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
  }
});
console.log('Fixed files');
