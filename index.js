

const { desktopCapturer , ipcMain , app, BrowserWindow , dialog} = require('electron');
const fs = require('fs');
const path = require('path');
const url = require('url');5
const util = require('util');

const read = util.promisify(fs.readdir);
// async function captureScreen() {
//   try {
//     const sources = await desktopCapturer.getSources({ types: ['screen'] });
//     const stream = await navigator.mediaDevices.getUserMedia({
//       audio: false,
//       video: {
//         mandatory: {
//           chromeMediaSource: 'desktop',
//           chromeMediaSourceId: sources[0].id,
//           minWidth: 1280,
//           maxWidth: 1280,
//           minHeight: 720,
//           maxHeight: 720
//         }
//       }
//     });
//     const mediaRecorder = new MediaRecorder(stream);
//     const chunks = [];

//     mediaRecorder.ondataavailable = event => chunks.push(event.data);
//     mediaRecorder.onstop = () => {
//       const blob = new Blob(chunks, { type: 'image/png' });
//       const reader = new FileReader();
//       reader.onload = () => {
//         const buffer = Buffer.from(reader.result);
//         // Envía el buffer al proceso de renderizado (ventana) para su procesamiento adicional
//         mainWindow.webContents.send('captured-screen', buffer.toString('base64'));
//       };
//       reader.readAsDataURL(blob);
//     };

//     mediaRecorder.start();
//     setTimeout(() => {
//       mediaRecorder.stop();
//     }, 1000); // Tiempo suficiente para capturar la pantalla
//   } catch (error) {
//     console.error('Error al capturar la pantalla:', error);
//   }
// }




let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      // preload:  "C:\\Users\\Mauricio PC\\Desktop\\Proyectos Br\\practica\\Imagen Edit\\preload.js",
      preload: path.join(__dirname, 'preload.js'), // Especificar el archivo preload aquí
      nodeIntegration: false, // Asegúrate de deshabilitar nodeIntegration
      contextIsolation: true // Asegúrate de habilitar contextIsolation
    }
  });
  
  mainWindow.loadFile(  path.join(__dirname, '/public/index.html'));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});


const get_image_created =async ()=>{
  const images = await read(path.join(__dirname, './Finished/'))
  return Math.floor((images.length / 2) + 1)
}

get_image_created();



async function captureScreenCens() {
  const image = mainWindow.webContents.capturePage();
  const index = await get_image_created();
  image.then(img => {
    const filePath = path.join(__dirname, '/Finished/' + "cens_" + index + ".png");
    fs.writeFile(filePath, img.toPNG(), err => {
      if (err) {
        console.error('Error al guardar la captura de pantalla:', err);
      } else {
        console.log('Captura de pantalla guardada correctamente en:', filePath);
      }
    });
  }).catch(err => {
    console.error('Error al capturar la pantalla:', err);
  });
}


async function captureScreenOri() {
  const image = mainWindow.webContents.capturePage();
  const index = await get_image_created();
  image.then(img => {
    const filePath = path.join(__dirname, '/Finished/' + "orig_" + index + ".png");
    fs.writeFile(filePath, img.toPNG(), err => {
      if (err) {
        console.error('Error al guardar la captura de pantalla:', err);
      } else {
        mainWindow.webContents.send('capture-success', 'Captura Creada Satisfactoriamente.');
        console.log('Captura de pantalla guardada correctamente en:', filePath);
      }
    });
  }).catch(err => {
    console.error('Error al capturar la pantalla:', err);
  });
}



ipcMain.on('capture-screen-cens', (event, base64Image) => {
  captureScreenCens()
});

ipcMain.on('capture-screen-ori', (event, base64Image) => {
  captureScreenOri()
});


// ipcMain.on('test',(e)=>{
// console.log("HOLA DESDE BACKEND");
// e.sender.send("test-res", "I SEE YOU!!")
// })



