const container = document.getElementById("root");

const getData= async(url)=>{
    var dataAPI= await fetch(url);
    console.log(dataAPI)
    var data= await dataAPI.text();   
    const card= document.createElement("div");
    card.classList= "card center mt-3 mb-3 rounded";

    if(dataAPI.status== 500){
        card.innerHTML= data;
        card.classList="bg-danger card center mt-3 mb-3 rounded"
        container.appendChild(card);
        return dataAPI.status;
    }
    if(dataAPI.status==200){ 
        card.innerHTML= data;
        container.appendChild(card);
        return dataAPI.status;
    }
    if(dataAPI.status==404){
        card.innerHTML= "Recurso no encontrado, se intento hacer una peticion a: " + dataAPI.url;
        card.classList= "card mt-3 mb-3 center rounded bg-warning"
        container.appendChild(card);
        return dataAPI.status;
    }
    
};
const getDataJSON= async(url)=>{
    var dataAPI= await fetch(url);
    var data= await dataAPI.json();
   
    const card= document.createElement("div");
    card.classList= "card center mb-3 mt-3 w-100";
    card.innerHTML= data.msg;
    container.appendChild(card);
    console.log(data); 
};

//getData("http://localhost:3000");
//getData("http://localhost:3000/suma/1/2");
//getData("http://localhost:3000/person/Francisco/19");
//getDataJSON("http://localhost:3000/json");

/*
TODO: HACER UN FORMULARIO QUE HAGA LA PETICION AL ENDPOINT SUMA Y SI ESTA BIEN LA RESPUESTA
      UN MODAL MOSTRAR EN VERDE Y SI ESTA MAL UN MODAL EN ROJO

*/




const $form= document.getElementById("form");
$form.addEventListener("submit", async(e)=>{
    e.preventDefault()
    const $number1= document.getElementById("number1").value;
    const $number2= document.getElementById("number2").value;
    
    const status= await getData(`http://localhost:3000/suma/${$number1}/${$number2}`);

    if(status==500)appendAlert('Error, revisa los datos que estas enviando', 'danger')
    if(status==200)appendAlert('Los datos se enviaron de manera exitosa', 'success')
    if(status==404)appendAlert('Recurso no encontrado', 'warning')
  
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


  
