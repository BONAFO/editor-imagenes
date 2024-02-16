const options = [
  {
    id: "font-size",
    type: "text",
  },
  {
    id: "font-family",
    type: "text",
  },
  {
    id: "color",
    type: "color",
  },
  {
    id: "width",
    type: "text",
  },
  {
    id: "height",
    type: "text",
  },
  {
    id: "position",
    type: "select",
    options: [
      { id: "absolute" },
      { id: "fixed" },
      { id: "relative" },
      { id: "static" },
      { id: "sticky" },
    ],
  },
  {
    id: "background-color",
    type: "color",
  },
  {
    id: "display",
    type: "select",
    options: [
      { id: "none" },
      { id: "block" },
      { id: "contents" },
      { id: "flex" },
      { id: "inline" },
      { id: "inline-block" },
      { id: "inline-flex" },
      { id: "table" },
      { id: "inline-table" },
      { id: "grid" },
    ],
  },
  {
    id: "z-index",
    type: "text",
  },
  {
    id: "padding",
    type: "text",
  },
  {
    id: "left",
    type: "text",
  },
  {
    id: "right",
    type: "text",
  },
  {
    id: "top",
    type: "text",
  },
  {
    id: "bottom",
    type: "text",
  },
  {
    id: "border-radius",
    type: "text",
  },
  {
    id: "border",
    type: "text",
  },
];

const profiles = [];

const select_input = (input, input_selector, option) => {
  input.style.display = "none";
  input_selector.style.display = "none";

  switch (option.type) {
    case "text":
    case "color":
    case "number":
      input.style.display = "inline-block";
      input.type = option.type;
      input.name = option.id;
      break;

    case "select":
      input_selector.style.display = "inline-block";
      input_selector.innerHTML = "";
      add_options(option.options, input_selector);
      input.name = option.id;
      break;
  }
};

const add_modificator = (container) => {
  const modification_container = document.createElement('div');
  const selector = document.createElement("select");
  selector.className = "modal-selector";
  selector.onchange = (e) => {
    select_input(input, input_selector, options[e.target.value]);
  };
  const input = document.createElement("input");
  input.className = "modal-input";
  input.style.display = "none";

  const input_selector = document.createElement("select");
  input_selector.className = "modal-input";
  input_selector.style.display = "none";
 
  select_input(input, input_selector, options[0]);

  add_options(options, selector);

  const delete_change = document.createElement("button");
  delete_change.className = "delete-btn";
  delete_change.textContent ="X";
  delete_change.onclick=()=>{
    modification_container.remove()
  }

  container.append(modification_container);
  modification_container.append(selector);
  modification_container.append(input);
  modification_container.append(input_selector);
  modification_container.append(delete_change);

  modification_container.append(document.createElement("br"));
};

const add_options = (options = [], selector) => {
  options.map((option, i) => {
    const option_base = document.createElement("option");
    option_base.value = i;
    option_base.textContent = option.id;
    selector.append(option_base);
  });
};

const modal_style = () => {
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
  

  const selector = document.createElement("select");
  selector.className = "modal-selector";

  const option_base = document.createElement("option");
  option_base.value = "-1";
  option_base.textContent = "My Profiles";
  selector.append(option_base);

  const add_change_btn = document.createElement("button");
  add_change_btn.className = 'add-btn';
  
  add_change_btn.onclick=()=>{
    add_modificator(add_container);
  }
  add_change_btn.textContent = "+";

  const add_container = document.createElement("div");


  const save_change_btn = document.createElement("button");
  save_change_btn.className = 'save-btn';
  
  save_change_btn.onclick=()=>{
    const data ={};
    
    const inputs = document.getElementsByClassName('modal-input');


    for (let i = 0; i < inputs.length; i++) {
      data[inputs[i].name] = inputs[i].value ;
    }



    Object.keys(data).map(k =>{
      document.getElementById(element_onfocus).style[k] = data[k];
    })
    

  }
  save_change_btn.textContent = "save";


  container.append(modal_cont);
  modal_cont.append(delete_change);
  modal_cont.append(selector);
  modal_cont.append(button_move);
  modal_cont.append(document.createElement("br"));
  modal_cont.append(document.createElement("br"));
  modal_cont.append(add_container);
  add_modificator(add_container);
  modal_cont.append(add_change_btn);
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



