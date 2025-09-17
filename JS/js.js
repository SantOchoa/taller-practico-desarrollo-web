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

    const contenedorPalabraEl = document.getElementById('ContenedorPalabra');
    const tecladoEl = document.getElementById('Teclado');
    const mensajeJuegoEl = document.getElementById('MensajeDeJuego');
    const botonJuegoNuevoEl = document.getElementById('BotonJuegoNuevo');
    const partesCuerpo = document.querySelectorAll('.ParteCuerpo');
    const letrasUsadasEl = document.getElementById('LetrasUsadas');
    const contadorVictoriasEl = document.getElementById('ContadorVictorias');
    const contadorDerrotasEl = document.getElementById('ContadorDerrotas');
    const contenedorHistorialEl = document.getElementById('ContenedorHistorial');

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
    botonJuegoNuevoEl.addEventListener('click', iniciarJuego);

    iniciarJuego();

    function mostrarPalabra() {
        contenedorPalabraEl.innerHTML = palabraSeleccionada.split('').map(letra => `
                <div class="EspacioDeLetra">
                    ${letrasCorrectas.includes(letra) ? letra : ''}
                </div>`).join('');
        const palabraRevelada = contenedorPalabraEl.innerText.replace(/\s+/g, '');
        if (palabraRevelada === palabraSeleccionada) {
            finalizarJuego(true);
        }
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
    function manejarIntento(letra) {
        if (letrasCorrectas.includes(letra) || intentosFallidos >= partesCuerpo.length) {
            return;
        }

        const botones = tecladoEl.getElementsByTagName('button');
        for (let boton of botones) {
            if (boton.textContent === letra) {
                boton.disabled = true;
            }
        }

        if (palabraSeleccionada.includes(letra)) {
            letrasCorrectas.push(letra);
        } else {
            intentosFallidos++;
            actualizarDibujoAhorcado();
            const letrasIncorrectas = letrasUsadasEl.textContent.split(', ').filter(l => l);
            if (!letrasIncorrectas.includes(letra)) {
                letrasIncorrectas.push(letra);
                letrasUsadasEl.textContent = letrasIncorrectas.join(', ');
            }
        }
        
        mostrarPalabra();
        verificarEstadoJuego();
    }

    function actualizarDibujoAhorcado() {
        if (intentosFallidos > 0) {
            partesCuerpo[intentosFallidos - 1].style.display = 'block';
        }
    }
    function verificarEstadoJuego() {
        if (intentosFallidos >= partesCuerpo.length) {
            finalizarJuego(false); 
        }
    }
    function finalizarJuego(esVictoria) {
        if (esVictoria) {
            mensajeJuegoEl.textContent = '¡Felicidades, ganaste! 🎉';
            mensajeJuegoEl.style.color = 'green';
            victorias++;
        } else {
            mensajeJuegoEl.textContent = `Perdiste. La palabra era: ${palabraSeleccionada}`;
            mensajeJuegoEl.style.color = 'red';
            derrotas++;
        }
        
        guardarHistorialPartida(esVictoria);
        tecladoEl.querySelectorAll('button').forEach(boton => boton.disabled = true);
        actualizarMarcador();
        mostrarHistorial();
    }

    function actualizarMarcador() {
        contadorVictoriasEl.textContent = victorias;
        contadorDerrotasEl.textContent = derrotas;
        localStorage.setItem('victoriasAhorcado', victorias);
        localStorage.setItem('derrotasAhorcado', derrotas);
    }
    
    function guardarHistorialPartida(esVictoria) {
        const registroPartida = {
            palabra: palabraSeleccionada,
            resultado: esVictoria ? 'Victoria' : 'Derrota',
            fecha: new Date().toLocaleString()
        };
        historialPartidas.unshift(registroPartida); 
        if (historialPartidas.length > 10) historialPartidas.pop();
        localStorage.setItem('historialAhorcado', JSON.stringify(historialPartidas));
    }

    function mostrarHistorial() {
        if (historialPartidas.length === 0) {
            contenedorHistorialEl.innerHTML = '<p>No hay partidas en el historial.</p>';
            return;
        }

        contenedorHistorialEl.innerHTML = historialPartidas.map(partida => `
            <div class="ElementoHistorial">
                <p><strong>Palabra:</strong> ${partida.palabra}</p>
                <p><strong>Resultado:</strong> <span class="${partida.resultado === 'Victoria' ? 'Victoria' : 'Derrota'}">${partida.resultado}</span></p>
                <p><strong>Fecha:</strong> ${partida.fecha}</p>
            </div>
        `).join('');
    }

    