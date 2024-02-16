let element_onfocus = "";

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
        h3.id = input.id;
        input.remove();
        container.appendChild(h3);
        on_writting = "";

        h3.addEventListener("contextmenu", function (evt) {
            show_dropdown(evt)
        });
      }
      break;

    case 't':
        followMouse = false
        document.removeEventListener('mousemove', moveTarget);
        break;
  }
};


