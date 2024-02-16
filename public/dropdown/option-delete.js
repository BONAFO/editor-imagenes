document.getElementById('option-delete').onclick=()=>{
    if(confirm('Are you sure you want delete this element?')){
        document.getElementById(element_onfocus).remove()
        document.getElementById('dropdownMenu').style.display = 'none';
    }
}