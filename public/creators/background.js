function previewImage(event) {
    const input = event.target;
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const preview = document.getElementById('background');
            preview.src = e.target.result;
        }

        reader.readAsDataURL(file);
    }
}


document.getElementById('background-select').onchange=(e)=>{
    previewImage(e)
}