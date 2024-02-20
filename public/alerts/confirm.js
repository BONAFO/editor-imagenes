const confirm_sw = ({
    cb_success =()=>{},
    cb_cancel =()=>{},
    title = "Are you sure?",
    text = "",
    confirmButtonText = "Confirm",
    cancelButtonText = "Cancel",
    msj_success =()=>{},
    msj_cancel =()=>{},
  }) => {
    Swal.fire({
      title: title,
      text: text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText:  confirmButtonText,
      cancelButtonText:  cancelButtonText,
    }).then((result) => {
      if (result.isConfirmed) {
          cb_success()
          msj_success()
      } else {
          cb_cancel()
          msj_cancel()
      }
    });
  };
  
  