let draw_circle = false;
let last_stance = "";
let isDrawing = false;
let circle;
let startX, startY;
let counter = 0;

const allow_draw = () => {
  if (draw_mode) {
    Cens();
  } else {
    stop_Cen();
  }
};

const stop_Cen = () => {
  document.onmousedown = () => {};
  document.onmousemove = () => {};

  document.onmouseup = () => {};
};
// const Cens = () => {
//   function updateCircleSize(x, y) {
//     // Calcular el radio como la mitad de la distancia entre startX/startY y la posición actual
//     const radiusX = Math.abs(x - startX) / 2;
//     const radiusY = Math.abs(y - startY) / 2;

//     // Calcular el centro del círculo
//     const centerX = startX + radiusX;
//     const centerY = startY + radiusY;

//     // Establecer el ancho y alto del círculo
//     circle.style.width = 2 * radiusX + "px";
//     circle.style.height = 2 * radiusY + "px";

//     // Establecer la posición del centro del círculo
//     circle.style.left = centerX - radiusX + "px";
//     circle.style.top = centerY - radiusY + "px";
//   }

//   document.onmousedown = (evt) => {
//     isDrawing = true;
//     startX = evt.clientX;
//     startY = evt.clientY;
//     circle = document.createElement("div");
//     circle.classList.add(last_stance);
//     circle.style.left = startX + "px";
//     circle.style.top = startY + "px";
//     circle.id = "cen" + "-" + counter;
   
//     circle.addEventListener("contextmenu", function (evt) {
//       show_dropdown(evt)
//     });

//     document.getElementById("container").appendChild(circle);
//     counter++;
//   };

//   document.onmousemove = (evt) => {
//     if (isDrawing) {
//       updateCircleSize(evt.clientX, evt.clientY);
//     }
//   };

//   document.onmouseup = () => {
//     isDrawing = false;
//     circle.style.backgroundColor = "transparent";
//     circle.style.filter = 'blur(20px)';
//   };
// };

const Cens = () => {
  // Declarar variables para el círculo y la máscara
  let circle;
  let mask;


  function updateCircleSize(x, y) {
      // Calcula el radio y la posición del círculo
      const radiusX = Math.abs(x - startX) / 2;
      const radiusY = Math.abs(y - startY) / 2;
      const centerX = startX + radiusX;
      const centerY = startY + radiusY;

      // Establece el tamaño y la posición del círculo
      circle.style.width = 2 * radiusX + "px";
      circle.style.height = 2 * radiusY + "px";
      circle.style.left = centerX - radiusX + "px";
      circle.style.top = centerY - radiusY + "px";

      // Actualiza la máscara para que coincida con el círculo
      mask.style.width = 2 * radiusX + "px";
      mask.style.height = 2 * radiusY + "px";
      mask.style.left = centerX - radiusX + "px";
      mask.style.top = centerY - radiusY + "px";
    // if(last_stance == 'circle'){
    //   mask.style.borderRadius = "50%";
    // }
  }

  document.onmousedown = (evt) => {
      isDrawing = true;
      startX = evt.clientX;
      startY = evt.clientY;
      circle = document.createElement("div");
      circle.classList.add(last_stance);
      circle.style.left = startX + "px";
      circle.style.top = startY + "px";
      document.getElementById("container").appendChild(circle);

      // Crea la máscara y la agrega al cuerpo del documento
      mask = document.createElement("div");
      mask.style.position = "absolute";
      mask.style.backgroundColor = "rgba(255, 255, 255, 0)"; // Fondo transparente
    if(last_stance == 'circle'){
      mask.style.borderRadius = "50%";
    }
      mask.id= 'cens-' + counter;
      mask.className ="cens cen-ele";
      mask.style.backdropFilter = "blur(10px)"; // Aplica un filtro de desenfoque
      document.body.appendChild(mask);
      counter++
  };



  document.onmousemove = (evt) => {
      if (isDrawing) {
          updateCircleSize(evt.clientX, evt.clientY);
      }
  };

  document.onmouseup = () => {
      isDrawing = false;
      mask.addEventListener("contextmenu", function (evt) {
        show_dropdown(evt)
    });
      // Remueve el círculo y la máscara del cuerpo del documento
      circle.remove();
      stop_Cen()
      // mask.remove();
  };
};


document.getElementById("cens-cir").onclick = (evt) => {
  document.getElementById("cens-sq").style.backgroundColor = '#ffffff';
  document.getElementById("cens-cir").style.backgroundColor = '#ffffff';
  document.getElementById("text") .style.backgroundColor= '#ffffff';
  if(last_stance == "circle"){
    draw_mode = false;
  }else{
    draw_mode = true;
  }
  
writting = false
stop_Text()
  if (draw_mode) {
    evt.target.style.backgroundColor = "orange";
    last_stance = "circle";
    allow_draw();
  } else {
    evt.target.style.backgroundColor = "#ffffff";
    last_stance = "";
    stop_Cen()
  }
};



document.getElementById("cens-sq").onclick = (evt) => {
  document.getElementById("cens-sq").style.backgroundColor = '#ffffff';
  document.getElementById("cens-cir").style.backgroundColor = '#ffffff';
  document.getElementById("text") .style.backgroundColor= '#ffffff';
  if(last_stance == "square"){
    draw_mode = false;
  }else{
    draw_mode = true;
  }
  

writting = false
stop_Text()
  if (draw_mode) {
    evt.target.style.backgroundColor = "orange";
    last_stance = "square";
    allow_draw();
  } else {
    evt.target.style.backgroundColor = "#ffffff";
    last_stance = "";
    stop_Cen()
  }
};


