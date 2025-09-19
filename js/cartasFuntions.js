function generarParesDeImagenes(numPares) {
    const imagenes = []
    for (let i = 1; i <= numPares; i++) {
        imagenes.push(i, i)
    }
    return imagenes
}

function mezclarCartas(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function crearElementoCarta(idImagen) {
    const carta = document.createElement('div');
    carta.classList.add('Carta');
    carta.dataset.id = idImagen;
    carta.innerHTML = `
        <div class="Cara Frontal"></div>
        <div class="Cara Trasera"><img src="images/image${idImagen}.jpg" alt="Image ${idImagen}"></div>
    `;
    carta.addEventListener('click', () => VoltearCarta(carta));
    return carta;
}
function iniciarTemporizador() {
    tiempoInicio = Date.now();
    intervaloTiempo = setInterval(() => {
        const tiempoTranscurrido = Math.floor((Date.now() - tiempoInicio) / 1000);
        contadorTiempo.textContent = `${tiempoTranscurrido}s`;
    }, 1000);
}

function VoltearCarta(carta) {
    if (bloqueoTablero || carta === primeraCarta || carta.classList.contains('Coincidencia')) return;
    if (!tiempoInicio) iniciarTemporizador();

    carta.classList.add('Volteada');
    if (!primeraCarta) {
        primeraCarta = carta;
        return;
    }
    segundaCarta = carta;
    intentos++;
    contadorIntentos.textContent = intentos;
    bloqueoTablero = true;
    verificarCoincidencia();
}

function verificarCoincidencia() {
    const esCoincidencia = primeraCarta.dataset.id === segundaCarta.dataset.id;
    esCoincidencia ? manejarCoincidencia() : manejarNoCoincidencia();
}

function manejarCoincidencia() {
    primeraCarta.classList.add('Coincidencia');
    segundaCarta.classList.add('Coincidencia');
    paresEncontrados++;
    reiniciarTurno();
    if (paresEncontrados === totalPares) finalizarJuego();
}
function manejarNoCoincidencia() {
    setTimeout(() => {
        primeraCarta.classList.remove('Volteada');
        segundaCarta.classList.remove('Volteada');
        reiniciarTurno();
    }, 1000);
}
function reiniciarTurno() {
    [primeraCarta, segundaCarta] = [null, null];
    bloqueoTablero = false;
}
