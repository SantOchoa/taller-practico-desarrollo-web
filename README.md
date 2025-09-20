# Memorama

![Icon Van](images/image13.jpg)

Este proyecto cumple con los siguientes requisitos:

- [x]  Mostrar cartas boca abajo que al hacer clic se volteen.
- [x]  Al voltear dos cartas, si son iguales permanecen descubiertas; si no, deben volver a taparse.
- [x]  El juego termina cuando todas las cartas se han encontrado.
- [x]  Al finalizar, debe mostrar cuántos intentos se hicieron.
- [x]  Contar el tiempo que tardó en completarse el juego.
- [x]  Guardar el mejor tiempo o el menor número de intentos alcanzados.
- [x]  Incluir un nivel de dificultad con más cartas. 4x4,  6x6, 10x10

---

## Descripción Detallada del Funcionamiento

### 1. **index.html**
Archivo principal donde puedes **elegir el nivel del juego**.  
Contiene los campos:
- Un selector de nivel
- Boton que conduce al nivel seleccionado

Al seleccionar uno de los nivele y oprimir el boton lo conduce al nivel correspondiente.

### 2. **js/index.js**
Este archivo gestiona el **transision a otras paginas despues del **:
- Escucha el evento `submit` del formulario.
- Obtiene los datos ingresados.
- Genera una clave única para cada tarea (`task_1`, `task_2`, ...).
- Guarda la tarea en Local Storage en formato JSON.

### 3. **showtask.html**
Página para **visualizar y gestionar las tareas**:
- Muestra una tabla con todas las tareas guardadas.
- Incluye un formulario para buscar tareas por nombre y filtrar por estado (todas, completadas, incompletas).
- Muestra contadores de tareas totales, completadas e incompletas.

### 4. **js/variables.js**
Define las **variables globales** usadas en la gestión de tareas:
- Referencias al formulario de búsqueda, tabla, y elementos de contador.

### 5. **js/showtask.js**
Controla la **visualización, filtrado, búsqueda, orden y eliminación de tareas**:
- `filldata`: Obtiene todas las tareas del Local Storage.
- `filterfun`: Filtra tareas por estado.
- `searchfun`: Busca tareas por nombre.
- `sortdatabydate`: Ordena las tareas por fecha.
- `countstatus`: Cuenta tareas por estado.
- `updateCounters`: Actualiza los contadores en pantalla.
- Renderiza la tabla de tareas, mostrando el nombre, descripción, fecha, estado (editable con `<select>`) y botón para eliminar.
- Al cambiar el estado de una tarea, se actualiza el Local Storage y los contadores.
- Al eliminar una tarea, se elimina del Local Storage y de la tabla.

---

## ¿Cómo funciona?

1. **Registrar tarea:**  
   Ve a la página principal, llena el formulario y guarda la tarea. Se almacena en Local Storage.

2. **Visualizar tareas:**  
   Ve a "Ver Tareas". Se muestran todas las tareas en una tabla ordenada por fecha.

3. **Filtrar y buscar:**  
   Usa el formulario para buscar por nombre o filtrar por estado.

4. **Cambiar estado:**  
   Usa el `<select>` en la columna "Estado" para marcar una tarea como completada o incompleta. Los contadores se actualizan automáticamente.

5. **Eliminar tarea:**  
   Haz clic en el botón "Eliminar" para borrar la tarea de la lista y del Local Storage.
