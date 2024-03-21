let nomnbre= document.getElementById("name");
<<<<<<< HEAD
nomnbre.textContent= "Bienvenido "+ localStorage.getItem("user");
=======
nomnbre.innerHTML= localStorage.getItem("user");
>>>>>>> c75c64f (Upload files)
let photo= document.getElementById("photo");
photo.src= localStorage.getItem("photo");


<<<<<<< HEAD
const sumaButton = document.getElementById("sum");
const restaButton = document.getElementById("rest");
const divisionButton = document.getElementById("div");
const multiplicacionButton = document.getElementById("multi");
const operacion = document.getElementById("operation");
const form = document.getElementById("form");
const resultado = document.getElementById("result");

form.addEventListener("reset", function() {
    resultado.textContent = "";
    operacion.textContent = "";
});

sumaButton.addEventListener("click", function(e) {
    e.preventDefault();
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    if (num1 === "" || num2 === "") {
        resultado.textContent = "Campos vacíos";
    } else {
        resultado.textContent = parseInt(num1) + parseInt(num2);
        operacion.textContent = "+";
    }
});

restaButton.addEventListener("click", function(e) {
    e.preventDefault();
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    if (num1 === "" || num2 === "") {
        resultado.textContent = "Campos vacíos";
    } else {
        resultado.textContent = parseInt(num1) - parseInt(num2);
        operacion.textContent = "-";
    }
});

divisionButton.addEventListener("click", function(e) {
    e.preventDefault();
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    if (num1 === "" || num2 === "") {
        resultado.textContent = "Campos vacíos";
    } else {
        resultado.textContent = parseInt(num1) / parseInt(num2);
        operacion.textContent = "/";
    }
});

multiplicacionButton.addEventListener("click", function(e) {
    e.preventDefault();
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    if (num1 === "" || num2 === "") {
        resultado.textContent = "Campos vacíos";
    } else {
        resultado.textContent = parseInt(num1) * parseInt(num2);
        operacion.textContent = "*";
    }
});
=======

>>>>>>> c75c64f (Upload files)
