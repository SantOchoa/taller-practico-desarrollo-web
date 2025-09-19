let cartas = []
let primeraCarta = null
let segundaCarta = null
let bloqueoTablero = false
let intentos = 0
let paresEncontrados = 0
let totalPares = 0
let tiempoInicio
let intervaloTiempo
let baseDeDatos
let tablegame = document.getElementById('table')
let contadorIntentos = document.getElementById('attempts')
let contadorTiempo = document.getElementById('timer')
let mejorIntentosEl = document.getElementById('MejorIntentos');
let mejorTiempoEl = document.getElementById('MejorTiempo');
let timerInterval = null
let seconds = 0

function reiniciarVariables() {
        cartas = []
        primeraCarta = null
        segundaCarta = null
        bloqueoTablero = false
        intentos = 0
        paresEncontrados = 0
        contadorIntentos.textContent = '0'
        contadorTiempo.textContent = '0s'
        clearInterval(intervaloTiempo)
        tiempoInicio = null
        tablegame.innerHTML = ''
}
