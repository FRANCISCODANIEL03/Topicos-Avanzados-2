// Extraer los parámetros de la URL
var urlParams = new URLSearchParams(window.location.search);

// Obtener los valores de los parámetros
var titularName = urlParams.get('titularName');
var petName = urlParams.get('petName');
var petType = urlParams.get('petType');
var petCondition = urlParams.get('petCondition');
var numberOfContact = urlParams.get('numberOfContact');
var description = urlParams.get('description');

// Llenar la tabla con los datos
document.getElementById('nombreTitular').textContent = titularName;
document.getElementById('nombreMascota').textContent = petName;
document.getElementById('tipoMascota').textContent = petType;
document.getElementById('padecimiento').textContent = petCondition;
document.getElementById('numeroContacto').textContent = numberOfContact;
document.getElementById('descripcion').textContent = description;