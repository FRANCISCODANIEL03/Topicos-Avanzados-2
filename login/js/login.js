const form= document.getElementById('form');

const evtForm = (evt)=>{
    evt.preventDefault();
    const user= document.getElementById("user");
    const pass= document.getElementById("pass");
    alert("Login exitoso");
}

form.addEventListener('submit', evtForm);