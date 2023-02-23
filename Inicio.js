
let miBoton = document.getElementById('elboton');

miBoton.addEventListener('click', function() {
 
    Swal.fire({
        title: 'Buena suerte!',
        input: 'email',
        inputLabel: 'Ingresá tu email y participá',
        inputPlaceholder: 'Email',
        confirmButtonText: 'Confirmar'
      })
      
      if (email) {
        Swal.fire(`Ingresá tu email: ${email}`)
      }
     
  })
