const util = require('util');
const asciiImage = util.promisify(require('image-to-ascii'));

async function outputImage(fileName) {
  try {
    const image = await asciiImage(`./images/${fileName}`, {
      size: { height: 80 }
    });
    console.log(image);
  } catch (error) {
    console.log('Error: ' + error.stack);
  }
}

async function generateAsciiArt() {
  try {
    const fileNames = ['nasa.jpg', 'space-apps.jpg'];
    const selectedFileIndex = Math.round(Math.random());
    outputImage(fileNames[selectedFileIndex]);
  } catch (error) {
    console.log('Error: ' + error);
  }
}

generateAsciiArt();
