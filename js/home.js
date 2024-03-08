let nomnbre= document.getElementById("name");
nomnbre.innerHTML= localStorage.getItem("user");
let photo= document.getElementById("photo");
photo.src= localStorage.getItem("photo");



