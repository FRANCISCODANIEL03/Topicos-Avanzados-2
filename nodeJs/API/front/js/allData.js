document.addEventListener('DOMContentLoaded', async function(e) {
    const URL = 'http://localhost:3000';
    const tbody = document.getElementById('data');
    const dataFetch = await fetch(URL);
    const data = await dataFetch.json();

    // Función para cargar contenido SVG desde un archivo
    async function cargarSVG(url) {
        const response = await fetch(url);
        const svgData = await response.text();
        const parser = new DOMParser();
        const svgElement = parser.parseFromString(svgData, 'image/svg+xml').documentElement;
        return svgElement;
    }

    // Cargar íconos SVG
    const iconoEliminar = await cargarSVG('../resources/svgDelete.svg');
    const iconoActualizar = await cargarSVG('../resources/svgUpdate.svg');

    for(let i = 0; i < data.length; i++){
        const $tr = document.createElement('tr');

        const $thID = document.createElement('th');
        const $thName = document.createElement('th');

        const $inputName= document.createElement('input');
        $inputName.setAttribute('type', 'text');
        $inputName.setAttribute('value', data[i].nombre);
        $inputName.value= data[i].nombre;

        $thID.textContent = data[i].id;
        $thName.appendChild($inputName)

        // Crear botones de acción
        const $thActualizar = document.createElement('th');
        const $thEliminar = document.createElement('th');


        const $btnActualizar = document.createElement('button');
        $btnActualizar.appendChild(iconoActualizar.cloneNode(true)); // Clonar ícono SVG
        $btnActualizar.addEventListener('click', function() {
            // Lógica para actualizar aquí
            console.log('Actualizar acción para el usuario ID:', data[i].id);
        });

        const $btnEliminar = document.createElement('button');
        $btnEliminar.appendChild(iconoEliminar.cloneNode(true)); // Clonar ícono SVG
        $btnEliminar.addEventListener('click', function() {
            // Lógica para eliminar aquí
            console.log('Eliminar acción para el usuario ID:', data[i].id);
        });

        // Agregar botones de acción a las celdas correspondientes

        $thActualizar.appendChild($btnActualizar);
        $thEliminar.appendChild($btnEliminar);

        // Agregar celdas a la fila
        $tr.appendChild($thID);
        $tr.appendChild($thName);
        $tr.appendChild($thActualizar);
        $tr.appendChild($thEliminar);

        // Agregar fila a la tabla
        tbody.appendChild($tr);
    }
});
