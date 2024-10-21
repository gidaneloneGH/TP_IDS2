// script.js

// Seleccionamos el botón y el overlay
const botonJugar = document.getElementById('jugar');
const pantallaInicio = document.getElementById('inicio');
const pantallaPreguntas = document.getElementById('preguntas');

// Función para iniciar el juego y ocultar la pantalla de inicio
botonJugar.addEventListener('click', () => {
    pantallaInicio.style.display = 'none';  // Ocultamos el overlay
    pantallaPreguntas.style.opacity = 1;    // Hacemos la pantalla de preguntas completamente visible
});
