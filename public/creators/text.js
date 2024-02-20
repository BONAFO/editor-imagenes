const container = document.getElementById("text-container");
let writting = false;
let on_writting = ''
// const profiles =[];
// document.onclick = (evt) => {

// }

const gen_Text =()=>{
    document.ondblclick=(evt)=>{
        const rect = evt.target.getBoundingClientRect();
        startX = evt.clientX - rect.left;
        startY = evt.clientY - rect.top;
        const input = document.createElement('textarea');
        input.style.position = "absolute"; 
        input.style.left = startX + "px";
        input.style.top = startY + "px";
        input.id = "cen" + "-" + counter;
        input.className = 'cen-ele';
        input.addEventListener("contextmenu", function (evt) {
            show_dropdown(evt)
        });
        on_writting ="cen" + "-" + counter;
        container.appendChild(input);
        counter++;
    }
}


const stop_Text =()=>{
    document.ondblclick=(evt)=>{}
}

document.getElementById("text").onclick=(evt)=>{
    document.getElementById("cens-sq").style.backgroundColor = '#ffffff';
    document.getElementById("cens-cir").style.backgroundColor = '#ffffff';
    document.getElementById("text") .style.backgroundColor= '#ffffff';

    writting = !writting;
    last_stance = "";
    draw_mode = false;

    if(writting){
        evt.target.style.backgroundColor = "orange";
gen_Text()
    }else{
        evt.target.style.backgroundColor = "#ffffff";
stop_Text()
    }
}

