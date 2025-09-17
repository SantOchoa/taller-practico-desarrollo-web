const palabrasIniciales = ["HTML", "JAVASCRIPT", "DESARROLLO", "ALGORITMO", "CSS", "FRONTEND", "BACKEND", "SERVIDOR", "COMPUTADORA", "INTERNET", "PROGRAMACION", "VARIABLE"];
    
    if (!sessionStorage.getItem('palabrasAhorcado')) {
        sessionStorage.setItem('palabrasAhorcado', JSON.stringify(palabrasIniciales));
    }
    