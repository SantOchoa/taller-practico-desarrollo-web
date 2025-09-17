
Este es un clásico juego del Ahorcado desarrollado con HTML, CSS y JavaScript puro. El jugador debe adivinar una palabra oculta de temática tecnológica seleccionando letras en un teclado virtual. Por cada letra incorrecta, se dibuja una parte del cuerpo del ahorcado. El juego termina cuando el jugador adivina la palabra o se completa el dibujo.

El proyecto utiliza localStorage para guardar el historial de partidas y la puntuación, y sessionStorage para gestionar la lista de palabras durante la sesión de juego.

✨ Características Principales
Selección Aleatoria de Palabras: Cada nueva partida selecciona una palabra al azar de una lista predefinida.

Teclado Virtual Interactivo: El jugador interactúa con un teclado en pantalla que deshabilita las letras ya utilizadas.

Dibujo del Ahorcado Progresivo: La figura del ahorcado se dibuja parte por parte con cada error del jugador.

Seguimiento de Puntuación: El juego guarda un registro persistente de las victorias y derrotas utilizando localStorage.

Historial de Partidas: Muestra un historial detallado de las últimas 10 partidas, incluyendo la palabra, el resultado y la fecha.

Juego Responsivo: El diseño se adapta a diferentes tamaños de pantalla para una buena experiencia de usuario.

💻 Tecnologías Utilizadas
HTML5: Para la estructura semántica del juego.

CSS3: Para el diseño y la apariencia visual, incluyendo el dibujo del ahorcado con SVG.

JavaScript (ES6+): Para toda la lógica del juego, manipulación del DOM y gestión del almacenamiento local.

Google Fonts: Para la tipografía personalizada (Bitcount Grid Double).

🚀 Cómo Jugar
No se requiere ninguna instalación especial ni servidor. Simplemente sigue estos pasos:

Descarga los archivos: Guarda los archivos index.html, principal.css y js.js en una misma carpeta, respetando la estructura de subcarpetas.

Abre el archivo HTML: Navega a la carpeta donde guardaste los archivos y abre index.html en tu navegador web preferido (como Chrome, Firefox, etc.).

¡Y listo para jugar! 🎉

📂 Estructura de Archivos
El proyecto está organizado de la siguiente manera para mantener el código ordenado y modular.

juego-ahorcado/
├── CSS/
│   └── principal.css     # Hoja de estilos principal
├── JS/
│   └── js.js             # Lógica completa del juego
└── index.html            # Estructura de la página