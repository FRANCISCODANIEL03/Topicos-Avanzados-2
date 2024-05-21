document.addEventListener('DOMContentLoaded', async function(e) {
    reloadDataTable(e);
});


async function fetchDelete(id){
    const URL= 'http://localhost:3000';
    const data= JSON.stringify({
        id: id
    });
    const dataFetch= await fetch(URL, {
        method: 'DELETE',
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const response= await dataFetch.json();
    reloadDataTable();
}
async function fetchUpdate(id, nombre){
    const URL= 'http://localhost:3000';
    const data= JSON.stringify({
        id: id,
        nombre: nombre
    });
    const dataFetch= await fetch(URL, {
        method: 'PATCH',
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const response= await dataFetch.json();
    reloadDataTable();
}
async function reloadDataTable(e){

    console.log('Recargando datos...');
    const URL = 'http://localhost:3000';
    const tbody = document.getElementById('data');
    const dataFetch = await fetch(URL);
    const data = await dataFetch.json();

    tbody.innerHTML = '';

    async function cargarSVG(url) {
        const response = await fetch(url);
        const svgData = await response.text();
        const parser = new DOMParser();
        const svgElement = parser.parseFromString(svgData, 'image/svg+xml').documentElement;
        return svgElement;
    }


    const iconoEliminar = await cargarSVG('../resources/svgDelete.svg');
    const iconoActualizar = await cargarSVG('../resources/svgUpdate.svg');
    const iconoSave = await cargarSVG('../resources/svgSave.svg');

    for(let i = 0; i < data.length; i++){
        const $tr = document.createElement('tr');

        const $thID = document.createElement('th');
        const $thName = document.createElement('th');

        const $inputName= document.createElement('input');
        $inputName.setAttribute('type', 'text');
        $inputName.setAttribute('value', data[i].nombre);
        $inputName.setAttribute('readonly', 'true');
        $inputName.value= data[i].nombre;

        $thID.textContent = data[i].id;
        $thID.style.textAlign = 'center';
        $thName.appendChild($inputName)
        


        const $thActualizar = document.createElement('th');
        const $thEliminar = document.createElement('th');


        const $btnActualizar = document.createElement('button');
        $btnActualizar.appendChild(iconoActualizar.cloneNode(true)); 
        let click = 0;
        $btnActualizar.addEventListener('click', function(e) {
            e.preventDefault();
            click++;
            console.log(click);
            if(click==1){
                $inputName.removeAttribute('readonly');
                $btnActualizar.removeChild($btnActualizar.firstChild);
                $btnActualizar.appendChild(iconoSave.cloneNode(true));
                $inputName.focus();
                $inputName.select();
            }
            if(click==2){
                const id= data[i].id;
                const nombre= $inputName.value;
                fetchUpdate(id, nombre);
               $inputName.setAttribute('readonly', 'true'); 
               click=0;
                $btnActualizar.removeChild($btnActualizar.firstChild);
                $btnActualizar.appendChild(iconoActualizar.cloneNode(true));
            }
        });

        let clickDelete=0;
        const $btnEliminar = document.createElement('button');
        $btnEliminar.appendChild(iconoEliminar.cloneNode(true));
        $btnEliminar.value = 'Eliminar';
        $btnEliminar.addEventListener('click', function(e) {
            e.preventDefault();
            clickDelete++;
            if(clickDelete==2){
                const id= data[i].id;
                fetchDelete(id);
            }

        });

        

        $thActualizar.appendChild($btnActualizar);
        $thEliminar.appendChild($btnEliminar);


        $tr.appendChild($thID);
        $tr.appendChild($thName);

        const tr = document.createElement('tr');
        tr.style.display = 'flex';
        tr.style.justifyContent = 'center';
        tr.style.alignItems = 'center';
        
        tr.appendChild($thActualizar);
        tr.appendChild($thEliminar);

        $tr.appendChild(tr);


        tbody.appendChild($tr);
        }
    }