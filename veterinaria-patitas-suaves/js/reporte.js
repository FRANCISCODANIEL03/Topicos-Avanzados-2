var urlParams = new URLSearchParams(window.location.search);

// Obtener los valores de los parámetros
var titularName = urlParams.get('titularName');
var petName = urlParams.get('petName');
var petType = urlParams.get('petType');
var petCondition = urlParams.get('petCondition');
var numberOfContact = urlParams.get('numberOfContact');
var description = urlParams.get('description');
var imgPet = urlParams.get('imgPet');