// document.addEventListener("DOMContentLoaded", function() {
//     const target = document.getElementById('target');
//     const toggleButton = document.getElementById('toggleButton');
  
//     let followMouse = false;
  
//     toggleButton.addEventListener('click', function() {
//       followMouse = !followMouse;
//       if (followMouse) {
//         // Activar el seguimiento del cursor
//         document.addEventListener('mousemove', moveTarget);
//       } else {
//         // Desactivar el seguimiento del cursor
//         document.removeEventListener('mousemove', moveTarget);
//       }
//     });
  
//     function moveTarget(event) {
//       target.style.left = event.clientX + 'px';
//       target.style.top = event.clientY + 'px';
//     }
  
//     target.addEventListener('click', function(event) {
//       // Posicionar el elemento en la ubicación del clic
//       target.style.left = event.clientX + 'px';
//       target.style.top = event.clientY + 'px';
//       // Desactivar el seguimiento del cursor
//       followMouse = false;
//       toggleButton.innerText = 'Toggle Follow';
//       document.removeEventListener('mousemove', moveTarget);
//     });
//   });

let followMouse = false;

let target_move_element= "";


function moveTarget(evt) {
    target_move_element.style.left = evt.clientX + 'px';
    target_move_element.style.top = evt.clientY + 'px';
  }





    document.getElementById('option-move').onclick=()=>{
        document.getElementById('dropdownMenu').style.display = 'none';
        target_move_element = document.getElementById(element_onfocus);
 
        followMouse = !followMouse;
        if (followMouse) {
          // Activar el seguimiento del cursor
          document.addEventListener('mousemove', moveTarget);
        } 
        target_move_element.addEventListener('click', function(evt) {
            // Posicionar el elemento en la ubicación del clic
            target_move_element.style.left = evt.clientX + 'px';
            target_move_element.style.top = evt.clientY + 'px';
            // Desactivar el seguimiento del cursor
            followMouse = false;
            toggleButton.innerText = 'Toggle Follow';
            document.removeEventListener('mousemove', moveTarget);
          });
        

        
    }            

