// Seleccionamos el botón y el overlay
const botonJugar = document.getElementById('jugar');
const pantallaInicio = document.getElementById('inicio');
const pantallaPreguntas = document.getElementById('preguntas');

// Función para iniciar el juego y ocultar la pantalla de inicio
botonJugar.addEventListener('click', () => {
    pantallaInicio.style.display = 'none';  // Ocultamos el overlay
    pantallaPreguntas.style.opacity = 1;    // Hacemos la pantalla de preguntas completamente visible
});

// Array Con las preguntas
const preguntas = [
    {
        pregunta: "¿Quien fue la primera persona de la comisión B en dejar la carrera?",
        opciones: {
            A: "Emi Alvarez (Miky Dressy)",
            B: "Melany",
            C: "Catriel",
            D: "Enzo"
        },
        respuestaCorrecta: "C"
    },
    {
        pregunta: "¿Cuál es el océano más grande?",
        opciones: {
            A: "Atlántico",
            B: "Índico",
            C: "Ártico",
            D: "Pacífico"
        },
        respuestaCorrecta: "D"
    },
    {
        pregunta: "¿Cuantas finales de Champions tiene el Bayern Munich?",
        opciones: {
            A: "8",
            B: "15",
            C: "11",
            D: "6"
        },
        respuestaCorrecta: "C"
    },
    {
        pregunta: "¿Cuál fue el primer presidente de la República Argentina?",
        opciones: {
            A: "Manuel Belgrano",
            B: "Bernardino Rivadavia",
            C: "Hipólito Yrigoyen",
            D: "Julio Argetino Roca"
        },
        respuestaCorrecta: "B"
    },
    {
        pregunta: "¿De qué país es esta bandera?",
        imagen: "img/niger.png", 
        opciones: {
            A: "Niger",
            B: "India",
            C: "Irlanda",
            D: "Kurdistan"
        },
        respuestaCorrecta: "A"
    },
    {
        pregunta: "¿De qué país es esta bandera?",
        imagen: "img/irak.png", 
        opciones: {
            A: "Yemen",
            B: "Egipto",
            C: "Irak",
            D: "Uganda"
        },
        respuestaCorrecta: "C"
    },
    {
        pregunta: "¿De qué país es esta bandera?",
        imagen: "img/sierra_leona.png", 
        opciones: {
            A: "Somalia",
            B: "Nicaragua",
            C: "Gabon",
            D: "Sierra Leona"
        },
        respuestaCorrecta: "D"
    },
    {
        pregunta: "¿Cuantas amiguitas tenía Barchiesi?",
        opciones: {
            A: "2",
            B: "8",
            C: "No eran amiguitas",
            D: "3.932.183,5"
        },
        respuestaCorrecta: "C"
    },
    {
        pregunta: "¿En que año nació Lamine Yamal?",
        opciones: {
            A: "2007",
            B: "2006",
            C: "2005",
            D: "2004"
        },
        respuestaCorrecta: "A"
    },
    {
        pregunta: "¿Cuál es la capital de Holanda?",
        opciones: {
            A: "Ámsterdam",
            B: "Rotterdam",
            C: "La Haya",
            D: "Utrecht"
        },
        respuestaCorrecta: "A"
    },
    {
        pregunta: "¿Cuál equipo es el mayor campeón la ''B''?",
        opciones: {
            A: "Ferro",
            B: "Quilmes",
            C: "Banfield",
            D: "Lanus"
        },
        respuestaCorrecta: "C"
    },
    {
        pregunta: "¿Como se llama este actor?",
        imagen: "img/Bob-Odenkirk.webp", 
        opciones: {
            A: "Saul Goodman",
            B: "Bob Odenkirk",
            C: "Bryan Cranston",
            D: "Jonathan Banks"
        },
        respuestaCorrecta: "B"
    },
    {
        pregunta: "¿Cuántas provincias tiene Argentina?",
        opciones: {
            A: "23",
            B: "19",
            C: "27",
            D: "24",
        },
        respuestaCorrecta: "A"
    },
    {
        pregunta: "¿Cómo se llama el edificio más alto del mundo?",
        opciones: {
            A: "Lotte World Tower",
            B: "Empire State",
            C: "Torre de Shanghai",
            D: "Burj Khalifa",
        },
        respuestaCorrecta: "D"
    },
    {
        pregunta: "¿Cúal es el nombre completo de Bart Simpson?",
        opciones: {
            A: "Bartholomew Simpson",
            B: "Bartholomew JoJo Simpson",
            C: "Bartholomew Joe Simpson",
            D: "Bartholomew Junior Simpson",
        },
        respuestaCorrecta: "B"
    },
    {
        pregunta: "¿Cúantas semanas tiene un año?",
        opciones: {
            A: "54",
            B: "60",
            C: "52",
            D: "24",
        },
        respuestaCorrecta: "C"
    },
    {
        pregunta: "¿Quien es este cantante?",
        imagen: "img/neo-pistea.webp", 
        opciones: {
            A: "Neo Pistea",
            B: "Khea",
            C: "Mesita",
            D: "Bhavi"
        },
        respuestaCorrecta: "A"
    },
];

let num_pregunta=0;
let preguntasMostradas = [];  // Array para registrar las preguntas mostradas

function iniciarJuego() {
    if (preguntasMostradas.length == 10) {
        deshabilitarBotones();
        mostrarResultados();
        return; // paramos el juego si no hay mas preguntas y se muestra el puntaje que acumulo el jugador
    }

    habilitarBotones();

    do {
        num_pregunta = Math.floor(Math.random() * preguntas.length); // Selecciona una pregunta aleatoria
    } while (preguntasMostradas.includes(num_pregunta));
    
    // metemos en el array el indice de la pregunta asi no se repite la pregunta
    preguntasMostradas.push(num_pregunta);
    mostrarPregunta(num_pregunta);
}

// nos traemos los botones que contienen las opciones
const botones = {
    A: document.getElementById("opcionA"),
    B: document.getElementById("opcionB"),
    C: document.getElementById("opcionC"),
    D: document.getElementById("opcionD")
};

const imagen = document.querySelector("#preguntas img"); // Referencia al <img>

// funcion que va cambiando las preguntas y las opciones
function mostrarPregunta(num_pregunta) {
    const preguntaTitulo = document.getElementById("preguntas__titulo");

    // Mostrar pregunta
    preguntaTitulo.innerText = preguntas[num_pregunta].pregunta;

    // Mostrar opciones
    // Object.entries(): Esta función toma un objeto y devuelve un array de sus propiedades en forma de pares clave-valor. En este caso es la opcion de la pregunta sea A, B, etc y el valor que contiene esa opcion. Se declara una variable anonima (sin nombre) que guarda esto que devuelve let [opcion, valor]. 
    for (let [opcion, valor] of Object.entries(preguntas[num_pregunta].opciones)) {
        botones[opcion].innerText = `${opcion}: ${valor}`;
        botones[opcion].style.display = "inline-block";
        botones[opcion].onclick = () => verificarRespuesta(opcion);
    }

    if (preguntas[num_pregunta].imagen) {
        imagen.src = preguntas[num_pregunta].imagen;
        imagen.style.display = "block";  // Mostrar imagen si tiene una bandera
    } else {
        imagen.style.display = "none";  // Ocultar imagen si no hay bandera
    }
}

let puntajeJugador = 0;
let preguntasAcertadas = 0;

function verificarRespuesta(opcion) {
    const respuestaCorrecta = preguntas[num_pregunta].respuestaCorrecta;

    if (opcion === respuestaCorrecta) {
        botones[opcion].style.backgroundColor = "#41a500";
        puntajeJugador += 100; //Se suman 100 puntos por cada respuesta correcta
        preguntasAcertadas ++;
    } else {
        botones[opcion].style.backgroundColor = "#ff0000";
        botones[respuestaCorrecta].style.backgroundColor = "#41a500";
        if (puntajeJugador != 0 ){
            puntajeJugador -= 50; //se restan 50 ptos por cada respuesta incorrecta, excepto si no tiene ptos
        }
    }

    deshabilitarBotones();

    setTimeout(() => {
        restablecerBotones();
        iniciarJuego(); // Llama a la siguiente pregunta
    }, 1500);
}

function restablecerBotones () {
    for (const boton of Object.values(botones)) { 
        boton.style.backgroundColor = ""; 
        // Habia problemas con el hover en dispositivos moviles
    }
}

//Object.values(botones) convierte las referencias de los botones de un objeto en un array.
//Basicamente en este caso te quedan solo los botones con las opciones, los cuales los recorre el for y los deshabilita
function deshabilitarBotones() {
    for (const boton of Object.values(botones)) { 
        boton.disabled = true; // Deshabilita los botones
    }
}

function habilitarBotones() {
    for (const boton of Object.values(botones)) {
        boton.style.display = "inline-block"; // Aseguramos que los botones estén visibles
        boton.disabled = false; // Habilitar los botones
    }
}

const resultados = document.getElementById('resultados');
const cerrarPantalla = document.getElementById('cerrarPantalla');
const reiniciarJuego = document.getElementById('reiniciar-juego');

function cerrarModal() {
    resultados.style.display = 'none';
}


function mostrarResultados() {
    resultados.style.display = 'flex'; // muestra el modal al terminar el juego

    const puntosJugador = document.getElementById("puntajeJugador");
    puntosJugador.innerText = `Tu puntaje es ${puntajeJugador}`;

    const preguntasCorrectas = document.getElementById("preguntasAcertadas");
    if (preguntasAcertadas == 0){
        preguntasCorrectas.innerText = `No le pegaste a ninguna! Volve a intentar`
    } else{
        preguntasCorrectas.innerText = `Le pegaste a ${preguntasAcertadas}/10 preguntas!`
    }

}

function jugarDeNuevo() {
    // reinicia las variables para empezar de 0
    num_pregunta = 0;
    preguntasMostradas = [];
    puntajeJugador = 0;
    preguntasAcertadas = 0;

    // oculta el modal con los resultados
    resultados.style.display = 'none';
    
    habilitarBotones();
    iniciarJuego(); 
    //vuelve a habilitar los botones y arranca de nuevo el juego
}