const promp_sw = ({
  cb_success = () => {},
  cb_cancel = () => {},
  title = "",
  text = "",
  input_type = "text",
  inputAttributes = {},
  placeholder = "",
  confirmButtonText = "Confirm",
  cancelButtonText = "Cancel",
  msj_success = () => {},
  msj_cancel = () => {},
}) => {
  Swal.fire({
    title: title,
    text: text,
    input: input_type,
    inputAttributes: inputAttributes,
    inputPlaceholder: placeholder,
    showCancelButton: true,
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText,
    showLoaderOnConfirm: true,
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      //   // Aquí puedes utilizar el valor ingresado por el usuario
      //   const nombre = result.value;
      //   Swal.fire(`¡Hola, ${nombre}!`, '', 'success');
      cb_success(result);
      msj_success(result);
    }
  });
};

// 'Name of the file?'
// inputAttributes: {
//     name: 'filename' // Aquí puedes establecer el atributo name
//   },

// inputPlaceholder: 'Filename',
