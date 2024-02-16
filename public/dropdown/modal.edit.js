const modal_edit = () => {
    const container = document.getElementById("style-cont");
    const modal_cont = document.createElement("div");
    modal_cont.className = "modal-cont";
  
  
    const delete_change = document.createElement("button");
    delete_change.className = "delete-btn";
    delete_change.textContent ="X";
    delete_change.onclick=()=>{
      modal_cont.remove()
    }

    const button_move = document.createElement("button");
    button_move.className = "move-modal";
    button_move.id = "move-modal";
    button_move.textContent ="MOVE";
    
    const p = document.createElement("textarea");
    p.className = "text-modal";
    p.id = "text-modal";
    
  
    const save_change_btn = document.createElement("button");
    save_change_btn.className = 'save-btn';
    
    save_change_btn.onclick=()=>{
    //   const data ={};
      
    //   const inputs = document.getElementsByClassName('modal-input');
  
  
    //   for (let i = 0; i < inputs.length; i++) {
    //     data[inputs[i].name] = inputs[i].value ;
    //   }
  
  
  
    //   Object.keys(data).map(k =>{
    //     document.getElementById(element_onfocus).style[k] = data[k];
    //   })
    document.getElementById(element_onfocus).innerText = p.value;
  
    }
    save_change_btn.textContent = "save";
  
  
    container.append(modal_cont);
    modal_cont.append(delete_change);
    modal_cont.append(button_move);
    modal_cont.append(document.createElement("br"));
    modal_cont.append(document.createElement("br"));
    modal_cont.append(p);
    modal_cont.append(document.createElement("br"));
    modal_cont.append(save_change_btn);
  
  
  
    const modal = modal_cont; // Utiliza el elemento modal_cont que acabas de crear
    const dragHandle = button_move; // Utiliza el botón de movimiento que acabas de crear
    let isDragging = false;
    let initialX;
    let initialY;
    
    dragHandle.addEventListener('mousedown', startDrag);
    
    function startDrag(e) {
        isDragging = true;
        initialX = e.clientX - modal.offsetLeft;
        initialY = e.clientY - modal.offsetTop;
        document.addEventListener('mousemove', dragModal);
        document.addEventListener('mouseup', stopDrag);
    }
    
    function dragModal(e) {
        if (isDragging) {
            const newX = e.clientX - initialX;
            const newY = e.clientY - initialY;
            modal.style.left = newX + 'px';
            modal.style.top = newY + 'px';
        }
    }
    
    function stopDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', dragModal);
        document.removeEventListener('mouseup', stopDrag);
    }
  
  
  };
  
  
  
  