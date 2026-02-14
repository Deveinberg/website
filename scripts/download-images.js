const https = require('https');
const fs = require('fs');
const path = require('path');

// Images to download from devverma.com
const imagesToDownload = [
  {
    url: 'https://devverma.com/images/profile.jpg', // Placeholder URL
    filename: 'dev-profile.jpg',
    description: 'Dev Verma profile photo'
  },
  {
    url: 'https://devverma.com/images/fliq-project.jpg', // Placeholder URL
    filename: 'fliq-project.jpg',
    description: 'FLIQ 2025 project image'
  },
  {
    url: 'https://devverma.com/images/quantum-gates.jpg', // Placeholder URL
    filename: 'quantum-gates.jpg',
    description: 'Quantum gate decomposition project'
  },
  {
    url: 'https://devverma.com/images/vibration-analysis.jpg', // Placeholder URL
    filename: 'vibration-analysis.jpg',
    description: 'Vibration analysis project'
  },
  {
    url: 'https://devverma.com/images/glassy-systems.jpg', // Placeholder URL
    filename: 'glassy-systems.jpg',
    description: 'Glassy systems research'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, '..', 'public', 'images', filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Downloaded: ${filename}`);
          resolve();
        });
      } else {
        console.log(`❌ Failed to download ${filename}: ${response.statusCode}`);
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      console.log(`❌ Error downloading ${filename}:`, err.message);
      reject(err);
    });
  });
};

async function downloadAllImages() {
  console.log('🚀 Starting image download from devverma.com...\n');
  
  // Create images directory if it doesn't exist
  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
    console.log('📁 Created images directory');
  }
  
  for (const image of imagesToDownload) {
    try {
      console.log(`📥 Downloading ${image.description}...`);
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.log(`⚠️  Skipping ${image.filename} - will use placeholder`);
    }
  }
  
  console.log('\n✨ Image download process completed!');
  console.log('📝 Note: Update the image URLs in this script with actual URLs from devverma.com');
}

// Run the download
downloadAllImages().catch(console.error);

module.exports = { downloadAllImages, imagesToDownload }; 