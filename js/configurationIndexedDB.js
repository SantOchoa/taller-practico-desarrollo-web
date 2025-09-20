
function configurarBaseDeDatos() {
    const solicitud = indexedDB.open('BaseDatosMemorama', 1)

    solicitud.onerror = (evento) => console.error("Error al abrir la base de datos:", evento.target.errorCode)

    solicitud.onupgradeneeded = (evento) => {
        baseDeDatos = evento.target.result
        const almacen = baseDeDatos.createObjectStore('puntuaciones', { keyPath: 'dificultad' })
        almacen.createIndex('intentos', 'intentos', { unique: false })
        almacen.createIndex('tiempo', 'tiempo', { unique: false })
        console.log("Base de datos configurada.")
    }

    solicitud.onsuccess = (evento) => {
        baseDeDatos = evento.target.result
        console.log("Base de datos abierta.")
        cargarMejoresPuntuaciones()
    }
}
function guardarPuntuacion(intentosFinal, tiempoFinal) {
    if (!baseDeDatos) return
    
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
    
    const transaccion = baseDeDatos.transaction(['puntuaciones'], 'readwrite')
    const almacen = transaccion.objectStore('puntuaciones')
    const solicitud = almacen.get(dificultad)

    solicitud.onsuccess = () => {
        const datos = solicitud.result;
        if (!datos || intentosFinal < datos.intentos || (intentosFinal === datos.intentos && tiempoFinal < datos.tiempo)) {
            almacen.put({ dificultad: dificultad, intentos: intentosFinal, tiempo: tiempoFinal })
        }
    };

    transaccion.oncomplete = () => {
        console.log("Puntuación guardada.")
        cargarMejoresPuntuaciones()
    };
    transaccion.onerror = (evento) => console.error("Error al guardar:", evento.target.errorCode)
}

function cargarMejoresPuntuaciones() {
    if (!baseDeDatos) return
    
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
    const transaccion = baseDeDatos.transaction(['puntuaciones'], 'readonly')
    const almacen = transaccion.objectStore('puntuaciones')
    const solicitud = almacen.get(dificultad)

    solicitud.onsuccess = (evento) => {
        const resultado = evento.target.result
        if (resultado) {
            mejorIntentosEl.textContent = resultado.intentos
            mejorTiempoEl.textContent = `${resultado.tiempo}s`
        } else {
            mejorIntentosEl.textContent = 'N/A'
            mejorTiempoEl.textContent = 'N/A'
        }
    }
    solicitud.onerror = (evento) => console.error("Error al cargar puntuaciones:", evento.target.errorCode)
}