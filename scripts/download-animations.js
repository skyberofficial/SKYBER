const fs = require('fs');
const https = require('https');
const path = require('path');

const ANIMATIONS_DIR = path.join(__dirname, '../public/animations');

// Create animations directory if it doesn't exist
if (!fs.existsSync(ANIMATIONS_DIR)) {
  fs.mkdirSync(ANIMATIONS_DIR, { recursive: true });
}

const animations = [
  {
    name: 'pulse.json',
    url: 'https://assets5.lottiefiles.com/packages/lf20_ysf0jlrx.json'
  },
  {
    name: 'server.json',
    url: 'https://assets4.lottiefiles.com/private_files/lf30_w11f2rwn.json'
  },
  {
    name: 'security.json',
    url: 'https://assets9.lottiefiles.com/packages/lf20_yqfvqbqg.json'
  },
  {
    name: 'users.json',
    url: 'https://assets3.lottiefiles.com/packages/lf20_xl3e0zts.json'
  },
  {
    name: 'projects.json',
    url: 'https://assets5.lottiefiles.com/packages/lf20_0zblhebf.json'
  },
  {
    name: 'satisfaction.json',
    url: 'https://assets10.lottiefiles.com/packages/lf20_lk3ybf1l.json'
  }
];

animations.forEach(({ name, url }) => {
  const filePath = path.join(ANIMATIONS_DIR, name);
  
  https.get(url, (response) => {
    const file = fs.createWriteStream(filePath);
    response.pipe(file);
    
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded: ${name}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${name}:`, err.message);
  });
}); 