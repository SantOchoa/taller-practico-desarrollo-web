 function iniciarJuego() {
    let dificultad =0
    if (window.location.href.includes('game_4x4.html')){
        dificultad = 4
    }
    else if (window.location.href.includes('game_6x6.html')){
        dificultad = 6
    }
    else if (window.location.href.includes('game_10x10.html')){
        dificultad = 10
    }

    totalPares = (dificultad * dificultad) / 2
    
    reiniciarVariables()
    configurarTablero(dificultad)
    
    const imagenes = generarParesDeImagenes(totalPares)
    const cartasMezcladas = mezclarCartas(imagenes)
    
    cartasMezcladas.forEach(idImagen => {
        const carta = crearElementoCarta(idImagen)
        tablegame.appendChild(carta)
        cartas.push(carta)
    });
}

function configurarTablero(dificultad) {
    tablegame.className = 'JuegoMemorama'
    if (dificultad === 4) tablegame.classList.add('Facil')
    else if (dificultad === 6) tablegame.classList.add('Medio')
    else tablegame.classList.add('Dificil')
} 

function finalizarJuego() {
    clearInterval(intervaloTiempo);
    const tiempoFinal = Math.floor((Date.now() - tiempoInicio) / 1000)
    document.getElementById('modalIntentos').textContent = intentos
    document.getElementById('modalTiempo').textContent = tiempoFinal
    document.getElementById('resultadoModal').classList.remove('hidden')
    guardarPuntuacion(intentos, tiempoFinal)
}

function cerrarModal() {
    document.getElementById('resultadoModal').classList.add('hidden')
    location.reload()
}


document.addEventListener("DOMContentLoaded", () => {
    configurarBaseDeDatos()
    iniciarJuego()
})