let nomnbre= document.getElementById("name");
nomnbre.textContent= "Bienvenido "+ localStorage.getItem("user");
let photo= document.getElementById("photo");
photo.src= localStorage.getItem("photo");



