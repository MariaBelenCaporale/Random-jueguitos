
let miBoton = document.getElementById('elboton');

miBoton.addEventListener('click', function () {

  Swal.fire({
    title: '¡Ingresá tu email y participá!',
    input: 'email',
    inputLabel: '🍀 Mucha suerte 🍀',
    inputPlaceholder: 'email@email.com',
    validationMessage: 'Campo obligatorio para participar',
    showCloseButton: true,
    confirmButtonText: 'PARTICIPAR',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Gracias por participar',
        confirmButtonText: false,
        confirmButton: false,
        showConfirmButton: false,
        text: 'Te enviaremos un email con los resultados del sorteo pronto 🤞🏼',
        showCloseButton: true
      }


      )
    }
  })

  if (email) {
    Swal.fire(`Ingresá tu email: ${email}`)
  }

})
