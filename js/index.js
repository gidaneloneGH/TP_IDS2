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
            A: "Emi Alvarez (Milky Dresy)",
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
    }
];

let num_pregunta=0;
let preguntasMostradas = [];  // Array para registrar las preguntas mostradas

function iniciarJuego() {
    if (preguntasMostradas.length === preguntas.length) {
        alert("No mas preguntas bro");
        return; // paramos el jeugo si no hay mas preguntas
    }

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
}

function verificarRespuesta(opcion) {
    const respuestaCorrecta = preguntas[num_pregunta].respuestaCorrecta;

    if (opcion === respuestaCorrecta) {
        alert("¡Correcto!");
    } else {
        alert("Incorrecto. La respuesta correcta era: " + respuestaCorrecta);
    }

    // Iniciar siguiente pregunta
    iniciarJuego();
}