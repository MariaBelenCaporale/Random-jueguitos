
let miBoton = document.getElementById('elboton');

miBoton.addEventListener('click', function() {
 
    Swal.fire({
        title: 'Ingresá tu email y participá!',
        input: 'email',
        inputLabel: 'Buena suerte :)',
        inputPlaceholder: 'Email',
        confirmButtonText: 'Participar'
      })
      
      if (email) {
        Swal.fire(`Ingresá tu email: ${email}`)
      }
     
  })
