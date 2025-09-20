# 🃏 Memorama - Juego de Memoria Visual

![van](images/image13.jpg)

Un juego clásico de **Memorama** desarrollado con **HTML, CSS y JavaScript**, que además integra **IndexedDB** para guardar las estadísticas de cada jugador.  

---

## 🎯 Objetivo del Proyecto
Este proyecto busca poner en práctica:
- La manipulación del **DOM** de forma dinámica.
- El uso de **IndexedDB** para almacenamiento en el navegador.
- La implementación de lógica de juego interactiva.
- El diseño modular con **HTML, CSS y JS**.
- La gestión de distintos niveles de dificultad.

---

## 🕹️ Reglas del Juego
1. Se muestran todas las cartas **boca abajo**.
2. Al hacer clic en una carta, esta se **voltea**.
3. Si las dos cartas seleccionadas son **iguales**, permanecen descubiertas.
4. Si son **diferentes**, se vuelven a tapar automáticamente.
5. El juego termina cuando todas las cartas han sido encontradas.
6. Al finalizar, se muestra:
   - Número total de **intentos**.
   - **Tiempo total** que tardó en completarse.
7. Se guarda en **IndexedDB**:
   - El **mejor tiempo** alcanzado.
   - El **menor número de intentos**.

---

## 🎚️ Niveles de Dificultad
El jugador puede elegir entre diferentes tableros:
- 🟩 **3x3** → Nivel fácil.  
- 🟦 **6x6** → Nivel intermedio.  
- 🟥 **10x10** → Nivel avanzado.  

Cada nivel aumenta el número de cartas y la complejidad del juego.

---

## 📂 Estructura del Proyecto
```bash
TALLER-PRACTICO
│── css/
│   ├── dificultad.css          # Estilos para selector de dificultad
│   ├── index.css               # Estilos generales de la página principal
│   └── style.css               # Estilos de las cartas y tablero
│
│── images/                     # Carpeta de imágenes de las cartas
│
│── js/
│   ├── cartasFuntions.js       # Funciones principales del juego
│   ├── configurationIndexedDB.js # Configuración y manejo de IndexedDB
│   ├── eventDom.js             # Eventos del DOM (clics, interacciones)
│   ├── index.js                # Lógica inicial del proyecto
│   └── variable.js             # Variables globales
│
│── game_4x4.html               # Tablero 4x4 (modo clásico)
│── game_6x6.html               # Tablero 6x6 (intermedio)
│── game_10x10.html             # Tablero 10x10 (avanzado)
│── index.html                  # Página principal
│── README.md                   # Documentación del proyecto

