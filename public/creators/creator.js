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
    hideUI()
    ipcRenderer.send('capture-screen')
    setTimeout(() => {
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