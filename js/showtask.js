const table = document.createElement('table');

document.getElementById('showTasks').addEventListener('click', () => {
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const thFechaHeader = document.createElement('th');
thFechaHeader.textContent = 'Fecha y Hora';
const thOperacionHeader = document.createElement('th');
thOperacionHeader.textContent = 'Tarea';

headerRow.appendChild(thFechaHeader);
headerRow.appendChild(thOperacionHeader);
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement('tbody');

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('task_')) {
        const log = JSON.parse(localStorage.getItem(key));
        const tr = document.createElement('tr');
        const tdFecha = document.createElement('td');
        tdFecha.textContent = new Date(log.date).toLocaleString();
        const tdOperacion = document.createElement('td');
        tdOperacion.textContent = `${log.task}`;
        tr.appendChild(tdFecha);
        tr.appendChild(tdOperacion);
        tbody.appendChild(tr);
    }
}
table.appendChild(tbody);


// Añade la tabla al cuerpo del documento para que se muestre en la página
document.body.appendChild(table);
});