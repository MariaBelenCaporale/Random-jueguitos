
let miBoton = document.getElementById('elboton');

miBoton.addEventListener('click', function () {

  Swal.fire({
    title: 'Ingresá tu email y participá!',
    input: 'email',
    inputLabel: 'Campo obligatorio para participar',
    inputPlaceholder: 'email@email.com',
    validationMessage: 'Ingresá tu mail para participar',
    confirmButtonText: 'PARTICIPAR',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        confirmButtonText: false,
        confirmButton: false,
        showConfirmButton: false,
        title: 'Gracias por participar',
        text: 'Te enviaremos un mail con los resultados del sorteo pronto 🤞🏼',
        showCloseButton: true
        

      }


      )
    }
  })

  if (email) {
    Swal.fire(`Ingresá tu email: ${email}`)
  }

})
