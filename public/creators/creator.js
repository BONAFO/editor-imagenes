// const { ipcRenderer } = require('electron');


const hideUI =()=>{
    const ui_elements =document.getElementsByClassName("ui");
    for (let i = 0; i < ui_elements.length; i++) {
      ui_elements[i].style.display ='none'; 
        
    }
}



const showUI =()=>{
    const ui_elements =document.getElementsByClassName("ui");
    for (let i = 0; i < ui_elements.length; i++) {
     
   
        ui_elements[i].style.display ="inline-block";
    }
}



const ipcRenderer =window.electron.ipcRenderer ;

// const desktopCapturer =window.electron.desktopCapturer ;



console.log(ipcRenderer);

// console.log(desktopCapturer);
document.getElementById('captureButton').addEventListener('click', function() {

  // ipcRenderer.send('test');

    // document.getElementById('captureButton').addEventListener('click', () => {
    //   ipcRenderer.send('capture-screen');
    // });

    // ipcRenderer.send('capture-screen');

//     console.log();
// // Cadena base64 de la imagen
// var base64String = document.getElementById('background').src

// // Crear un elemento <img> para cargar la imagen
// var img = new Image();

// // Cuando la imagen se carga, podemos acceder a sus metadatos
// img.onload = function() {
//     // Obtener el nombre del archivo de la URL de la imagen
//     var filename = img.src.split('/').pop();
//     // Mostrar el nombre del archivo
//     console.log("Nombre de la imagen:", filename);
// };

// // Asignar la cadena base64 como fuente de la imagen
// img.src = "data:image/webp;base64," + base64String;



    hideUI()
    
    ipcRenderer.send('capture-screen-cens')
    setTimeout(() => {
      const cens = document.getElementsByClassName('cens');
      for (let i = 0; i < cens.length; i++) {
        cens[i].style.display ='none';
        
      }
      ipcRenderer.send('capture-screen-ori')
    }, 400);
    setTimeout(() => {
      const cens = document.getElementsByClassName('cens');
      for (let i = 0; i < cens.length; i++) {
        cens[i].style.display ='inline-block';
        
      }
      showUI()
    }, 1000);
  });



// const hideUI =()=>{
//     const ui_elements =document.getElementsByClassName("ui");
//     for (let i = 0; i < ui_elements.length; i++) {
//         ui_elements[i].style.opacity =0;
        
//     }
// }



// const showUI =()=>{
//     const ui_elements =document.getElementsByClassName("ui");
//     for (let i = 0; i < ui_elements.length; i++) {
     
//         ui_elements[i].style.opacity =1;
        
//     }
// }


// document.getElementById('captureButton').addEventListener('click', function() {
//     hideUI();

//     fetch('http://localhost:4000/capturar-pantalla')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Error al capturar la pantalla');
//     }
//     return response.text(); // Si necesitas algún tipo de respuesta desde el servidor
//   })
//   .then(data => {
//     console.log(data); // Maneja la respuesta del servidor si es necesario
//   })
//   .catch(error => {
//     console.error('Error al capturar la pantalla:', error);
//   });
//     // html2canvas(document.body).then(function(canvas) {
//     //     var imageData = canvas.toDataURL();
//     //     showUI();

//     //     var link = document.createElement('a');
//     //     link.href = imageData;
//     //     link.download = 'captura_de_pantalla.png';

//     //     link.click();
//     // });
// });