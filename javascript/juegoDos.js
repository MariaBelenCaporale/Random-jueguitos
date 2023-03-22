let puntosUsuario = 0;
let puntosPC = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elegiTuArma = document.querySelector("#elegi-tu-arma");

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-computadora");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {
    
    let eleccionPC = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;


    if (eleccionPC === 0) {
        eleccionPC = "piedra✊🏽";
    } else if (eleccionPC === 1) {
        eleccionPC = "papel🖐🏽"
    } else if (eleccionPC === 2) {
        eleccionPC = "tijera✌🏽"
    }


    if (
        (eleccionUsuario === "piedra✊🏽" && eleccionPC === "tijera✌🏽") ||
        (eleccionUsuario === "tijera✌🏽" && eleccionPC === "papel🖐🏽") ||
        (eleccionUsuario === "papel🖐🏽" && eleccionPC === "piedra✊🏽")
    ) {
        ganaUsuario();
    } else if (
        (eleccionPC === "piedra✊🏽" && eleccionUsuario === "tijera✌🏽") ||
        (eleccionPC === "tijera✌🏽" && eleccionUsuario === "papel🖐🏽") ||
        (eleccionPC === "papel🖐🏽" && eleccionUsuario === "piedra✊🏽")
    ) {
        ganaPC();
    } else {
        empate();
    }

    
    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPC.innerText = eleccionPC;

  
    if (puntosUsuario === 5 || puntosPC === 5) {

        if (puntosUsuario === 5) {
            instrucciones.innerText = "🔥 ¡Ganaste el juego! 🔥"
            Swal.fire({
                title: '🔥 ¡Ganaste! 🔥',
                imageUrl: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51K0iUuh+gL.jpg',
                imageWidth: 400,
                imageHeight: 250,
                imageAlt: 'Custom image',
                footer: '¡Gracias por jugar Piedra, papel o tijera!',
                button: true, 
                confirmButtonText: 'Reiniciar'
              })
              .then(() => {
                swal(`The returned value is: ${reiniciarJuego()}`);
              });
            
        }

        if (puntosPC === 5) {
            instrucciones.innerText = "😭 ¡La computadora ganó el juego! 😭"
            Swal.fire({
                title: '😭 ¡Perdiste! 😭',
                imageUrl: 'https://ih1.redbubble.net/image.891076273.4449/st,small,845x845-pad,1000x1000,f8f8f8.jpg',
                imageWidth: 400,
                imageHeight: 250,
                imageAlt: 'Custom image',
                footer: '¡Gracias por jugar Piedra, papel o tijera!',
                button: true,
                confirmButtonText: 'Reiniciar'
              }) 
              .then(() => {
                swal(`The returned value is: ${reiniciarJuego()}`);
              });
        }

        

        /* boton reservar */
        reservar.classList.remove("disabled");
        reservar.addEventListener("click") 
    }
}

function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "¡Ganaste un punto! 🌈"
}

function ganaPC() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "¡La compu ganó un punto! 😭"
}

function empate() {
    contenedorGanaPunto.innerText = "¡Empate! 😱"
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    elegiTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");


    puntosUsuario = 0;
    puntosPC = 0;
    

    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;

    instrucciones.innerText = "El primero en llegar a 5 puntos gana."
}

