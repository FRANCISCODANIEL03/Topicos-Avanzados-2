document.addEventListener("DOMContentLoaded", ()=>{
    const form= document.getElementById('form');




    form.addEventListener("submit", async (e)=>{
        e.preventDefault();
        const numero1= document.getElementById('number1').value;
        const numero2= document.getElementById('number2').value;
        var objetoJson= {
            numero1,
            numero2
        }

        const url= 'http://localhost:3000/sumar'
        const cabeceras= {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(objetoJson)
        }

        const datosSinFormato = await fetch(url, cabeceras)
        const respuesta = await datosSinFormato.text();

        const container = document.getElementById("root");
        const card= document.createElement("div");
        card.classList= "card center mt-3 mb-3 rounded";

        if(datosSinFormato.status==500)appendAlert('Error, revisa los datos que estas enviando', 'danger')
        if(datosSinFormato.status==200){
            appendAlert('Los datos se enviaron de manera exitosa', 'success')
            card.innerHTML= respuesta;
            card.classList="bg-success card center mt-3 mb-3 rounded"
            container.appendChild(card);
        }
        if(datosSinFormato.status==404)appendAlert('Recurso no encontrado', 'warning')
    })



const alertPlaceholder = document.getElementById('alertPlaceholder')
const appendAlert = (message, type) => {
    let typelabel=''
    let xlink=''
    if(type=='success'){
        typelabel='Success';
        xlink= 'check-circle-fill'
    }
    if(type == 'danger'){
        typelabel='Danger';
        xlink='exclamation-triangle-fill'
    }
    if(type == 'warning'){
        typelabel='Warning'
        xlink='exclamation-triangle-fill'
    }
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
    `
    <div class="alert alert-${type} d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" role="img" aria-label="${typelabel}:"><use xlink:href="#${xlink}"/></svg>
        <div>
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
    `
    ].join('')

        alertPlaceholder.append(wrapper)
    }

})