document.getElementById('option-delete').onclick=()=>{
    // if(confirm('Are you sure you want delete this element?')){
        
        confirm_sw({
            cb_success:()=> {document.getElementById(element_onfocus).remove()},
            msj_success: ()=>{alert_sw({title: 'Element eliminated!'})}

        })
        document.getElementById('dropdownMenu').style.display = 'none';

}