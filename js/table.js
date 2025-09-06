
document.getElementById('show').addEventListener('click', (event) => {
    event.preventDefault();
    table.textContent = '';
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const thFecha = document.createElement('th');
    thFecha.textContent = 'Fecha';
    const thOperacion = document.createElement('th');
    thOperacion.textContent = 'Operacion';
    tr.appendChild(thFecha);
    tr.appendChild(thOperacion);
    thead.appendChild(tr);
    table.appendChild(thead);
    const tbody = document.createElement('tbody');

    for (let i=0; i<localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('operacion_')) {
            const log = JSON.parse(localStorage.getItem(key));
            const tr = document.createElement('tr');
            const tdFecha = document.createElement('td');
            tdFecha.textContent = new Date(log.fecha).toLocaleString();
            const tdOperacion = document.createElement('td');   
            tdOperacion.textContent = `${log.operacion.factorA} * ${log.operacion.factorB} = ${log.operacion.res}`;
            tr.appendChild(tdFecha);
            tr.appendChild(tdOperacion);
            tbody.appendChild(tr);
        }   
    }
    table.appendChild(tbody);
    button.appendChild(table);
});