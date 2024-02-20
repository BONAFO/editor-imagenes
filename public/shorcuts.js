let element_onfocus = "";
let helper_bool =false;
let origin_display = [];


function handleKeyDown(event) {
  var isCtrlPressed = event.ctrlKey;
  var keyCode = event.keyCode;

  if (isCtrlPressed && keyCode === 90) {
    return 1;
  }

  return false;
}
window.onkeydown = (e) => {
  const conbination = handleKeyDown(e);
  if (conbination !== false) {
    switch (conbination) {
      case 1:
        console.log("CONTROLI");
        break;
    }
  }

  switch (e.key.toLowerCase()) {
    case "escape":
      if (on_writting !== "") {
        const input = document.getElementById(on_writting);
        const text = input.value;
        const h3 = document.createElement("h3");
        const dropdownMenu = document.getElementById("dropdownMenu");
        h3.style.position = "absolute";
        h3.style.left = input.style.left;
        h3.style.top = input.style.top;
        h3.textContent = text;
        h3.className = 'cen-ele';
        h3.id = input.id;
        input.remove();
        container.appendChild(h3);
        on_writting = "";

        h3.addEventListener("contextmenu", function (evt) {
            show_dropdown(evt)
        });
      }
      break;
  
      case 'h':
        const elements = document.getElementsByClassName('cen-ele');
        helper_bool = !helper_bool;
      
        // Si helper_bool es verdadero, guardamos los estilos originales
        if (helper_bool) {
          origin_display = [];
          for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            origin_display.push({
              id: element.id,
              style: {
                border: element.style.border,
                opacity: element.style.opacity
              }
            });
            // Modificamos los estilos para resaltar en verde
            element.style.border = '2px solid #72ff72';
            element.style.opacity = '1';
          }
        } else {
          // Si helper_bool es falso, restauramos los estilos originales
          for (let i = 0; i < elements.length; i++) {
            const origin_style = origin_display.find(ele => ele.id === elements[i].id);
            if (origin_style) {
              elements[i].style.border = origin_style.style.border;
              elements[i].style.opacity = origin_style.style.opacity;
            }
          }
        }
        break;
    case 't':
        followMouse = false
        document.removeEventListener('mousemove', moveTarget);
        break;
  }
};


