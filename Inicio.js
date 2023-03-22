
let miBoton = document.getElementById('elboton');

miBoton.addEventListener('click', function () {

  Swal.fire({
    title: 'Ingresá tu email y participá!',
    input: 'email',
    inputLabel: '🍀 Buena suerte 🍀',
    inputPlaceholder: 'email@email.com',
    confirmButtonText: 'PARTICIPAR',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        confirmButtonText: 'FINALIZAR',
        title: '¡Tu email ha sido confirmado!',
        text: 'Dentro de las 24hs recibirás un email con los pasos a seguir.',

      }


      )
    }
  })

  if (email) {
    Swal.fire(`Ingresá tu email: ${email}`)
  }

})
