let preguntas_aleatorias = true;
let mostrar_pantalla_juego_términado = true;
let reiniciar_puntos_al_reiniciar_el_juego = true;

window.onload = function () {
  base_preguntas = readText("../base-preguntas.json");
  interprete_bp = JSON.parse(base_preguntas);
  escogerPreguntaAleatoria();
};

let pregunta;
let posibles_respuestas;
btn_correspondiente = [
  select_id("btn1"),
  select_id("btn2"),
  select_id("btn3"),

];
let npreguntas = [];

let preguntas_hechas = 0;
let preguntas_correctas = 0;


function escogerPreguntaAleatoria() {
  let n;
  if (preguntas_aleatorias) {
    n = Math.floor(Math.random() * interprete_bp.length);
  } else {
    n = 0;
  }

  while (npreguntas.includes(n)) {
    n++;
    if (n >= interprete_bp.length) {
      n = 0;
      // alert("respuesta incorrecta")
    }
    if (npreguntas.length == interprete_bp.length) {

      // se reinicia
      if (mostrar_pantalla_juego_términado) {
        if (contador > contadorDos) {
          Swal.fire({
            title: '🥳 🤓 ¡Ganaste! 🤓 🥳 ',
            text: 'Respuestas correctas: ' + (contador) + '\n' + 'Respuestas incorrectas: ' + (contadorDos),
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_Uqd5MEmryyePcXRtnb9gUqAx9TypfymtQ&usqp=CAU',
            imageWidth: 400,
            imageHeight: 250,
            imageAlt: 'Custom image',
            showCloseButton: true,
            confirmButtonText: 'REINICIAR',
            footer: '¡Gracias por jugar a Preguntas Random 90s!'
          })
        } if (contador < contadorDos) {
          Swal.fire({
            title: '🤬 🤡 ¡Perdiste! 🤡 🤬',
            text: 'Respuestas correctas: ' + (contador) + '\n' + 'Respuestas incorrectas: ' + (contadorDos),
            imageUrl: 'https://ih1.redbubble.net/image.891076273.4449/st,small,845x845-pad,1000x1000,f8f8f8.jpg',
            imageWidth: 400,
            imageHeight: 250,
            imageAlt: 'Custom image',
            footer: '¡Gracias por jugar a Preguntas Random 90s!',
            showCloseButton: true,
            confirmButtonText: 'REINICIAR',
          })
        } if (contador == contadorDos) {
          {
            Swal.fire({
              title: '💩 ¡Empate! 💩',
              text: 'Respuestas correctas: 3 \n Respuestas incorrectas: 3',
              imageUrl: 'https://i.imgflip.com/1dvzjt.jpg',
              imageWidth: 400,
              imageHeight: 250,
              imageAlt: 'Custom image',
              footer: '¡Gracias por jugar a Preguntas Random 90s!',
              showCloseButton: true,
              confirmButtonText: 'REINICIAR',
              footer: 'Gracias por jugar Preguntas Random 90s'
            })
          }
        }
      }



      if (reiniciar_puntos_al_reiniciar_el_juego) {
        preguntas_correctas = 0 //aciertos
        preguntas_hechas = 0 //errores
        contador= 0
        contadorDos= 0
      }       

      npreguntas = [];
    }

  }



  npreguntas.push(n);
  preguntas_hechas++;

  escogerPregunta(n);
}


function escogerPregunta(n) {
  pregunta = interprete_bp[n];
  select_id("categoria").innerHTML = pregunta.categoria;
  select_id("pregunta").innerHTML = pregunta.pregunta;
  select_id("numero").innerHTML = n;
  // let pc = preguntas_correctas;
  // if (preguntas_hechas = 1) {
  //   select_id("puntaje").innerHTML = pc + "/" + (preguntas_hechas - 1);
  // } else {
  //   select_id("puntaje").innerHTML = pc + "/" + (preguntas_hechas - 1);
  // }


  style("imagen").objectFit = pregunta.objectFit;
  desordenarRespuestas(pregunta);
  if (pregunta.imagen) {
    select_id("imagen").setAttribute("src", pregunta.imagen);
    style("imagen").height = "200px";
    style("imagen").width = "";
  } else {
    style("imagen").height = "0px";
    style("imagen").width = "0px";
    setTimeout(() => {
      select_id("imagen").setAttribute("src", "");
    }, 500);
  }
}













function desordenarRespuestas(pregunta) {
  posibles_respuestas = [
    pregunta.respuesta,
    pregunta.incorrecta1,
    pregunta.incorrecta2,
    pregunta.incorrecta3,
  ];
  posibles_respuestas.sort(() => Math.random() - 0.5);

  select_id("btn1").innerHTML = posibles_respuestas[0];
  select_id("btn2").innerHTML = posibles_respuestas[1];
  select_id("btn3").innerHTML = posibles_respuestas[2];
}

let suspender_botones = false;

function confettiFY() {
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti({
    confettiColors: [
      "#gg54jf",
      "#ff0a54",
      "#ff0a54",
      "#ff0a54",
      "#ff0a54",
    ]
  })
}

let contador = 0;
let contadorDos = 0;
function oprimir_btn(i) {
  if (suspender_botones) {
    return;
  }
  suspender_botones = true;
  if (posibles_respuestas[i] == pregunta.respuesta) {
    // alert('acertaste');
    contador++;


    confettiFY();

    preguntas_correctas++;
    btn_correspondiente[i].style.background = "";
  } else {
    // alert("Le erraste feo")
    contadorDos++;
    btn_correspondiente[i].style.background = "#f29592";
  }
  for (let j = 0; j < 4; j++) {
    if (posibles_respuestas[j] == pregunta.respuesta) {
      btn_correspondiente[j].style.background = "#c2f1d4";
      break;
    }


  }
  setTimeout(() => {
    reiniciar();
    suspender_botones = false;
  }, 1000);
}

let reinicia;

function reiniciar() {
  for (const btn of btn_correspondiente) {
    btn.style.background = "";
  }
  escogerPreguntaAleatoria();
}

function select_id(id) {
  return document.getElementById(id);
}

function style(id) {
  return select_id(id).style;
}

function readText(ruta_local) {
  let texto = null;
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", ruta_local, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    texto = xmlhttp.responseText;
  }
  return texto;
}
