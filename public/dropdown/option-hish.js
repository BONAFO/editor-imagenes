document.getElementById('option-hish').onclick=()=>{
    const stade = document.getElementById(element_onfocus).style.opacity;
    if(stade == '1' || stade.trim() == ''){
        document.getElementById(element_onfocus).style.opacity = '0';
    }else{
        document.getElementById(element_onfocus).style.opacity = '1';

    }
    document.getElementById('dropdownMenu').style.display = 'none';
}