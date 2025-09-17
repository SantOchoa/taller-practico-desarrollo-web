const palabrasIniciales = ["HTML", "JAVASCRIPT", "DESARROLLO", "ALGORITMO", "CSS", "FRONTEND", "BACKEND", "SERVIDOR", "COMPUTADORA", "INTERNET", "PROGRAMACION", "VARIABLE"];

if (!sessionStorage.getItem('palabrasAhorcado')) {
    sessionStorage.setItem('palabrasAhorcado', JSON.stringify(palabrasIniciales));
}
const palabras = JSON.parse(sessionStorage.getItem('palabrasAhorcado'));

let palabraSeleccionada = '';
let letrasCorrectas = [];
let intentosFallidos = 0;
    
let victorias = parseInt(localStorage.getItem('victoriasAhorcado')) || 0;
let derrotas = parseInt(localStorage.getItem('derrotasAhorcado')) || 0;
let historialPartidas = JSON.parse(localStorage.getItem('historialAhorcado')) || [];

function iniciarJuego() {
    letrasCorrectas = [];
    intentosFallidos = 0;
    palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)].toUpperCase();
        
    mensajeJuegoEl.textContent = '';
    letrasUsadasEl.textContent = '';
    partesCuerpo.forEach(parte => parte.style.display = 'none');
        
    mostrarPalabra();
    crearTeclado();
    actualizarMarcador();
    mostrarHistorial();
}

function crearTeclado() {
    tecladoEl.innerHTML = '';
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    alfabeto.split('').forEach(letra => {
       const boton = document.createElement('button');
        boton.textContent = letra;
        boton.addEventListener('click', () => manejarIntento(letra));
        tecladoEl.appendChild(boton);
    });
}