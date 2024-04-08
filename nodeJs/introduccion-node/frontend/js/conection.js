const container = document.getElementById("root");

const getData= async(url)=>{
    var dataAPI= await fetch(url);
    console.log(dataAPI.status)
    var data= await dataAPI.text();   
    const card= document.createElement("div");
    card.classList= "card center";

    if(dataAPI.status== 500){
        card.innerHTML= data;
        container.appendChild(card);
        return dataAPI.status;
    }else{ 
        card.innerHTML= data;
        container.appendChild(card);
        return dataAPI.status;
    }
    
};
const getDataJSON= async(url)=>{
    var dataAPI= await fetch(url);
    var data= await dataAPI.json();
   
    const card= document.createElement("div");
    card.classList= "card center";
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
    console.log($number1, $number2, status);
    if(status==500){
        alert("ROJO")
    }else{
        alert("VERDE");
    }
  
})