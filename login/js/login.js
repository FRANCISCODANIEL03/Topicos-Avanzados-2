const form= document.getElementById("form");
const email_input= document.getElementById("email");
const pass_input= document.getElementById("pass");
const mensaje= document.getElementById("mensaje");
const usersLocal= localStorage.getItem("user");

const Usuarios=[
{
    email: "deivid@icloud.com",
    name: "Deivid",
    password: "deivid123",
    photo: "/public/deivid.jpeg"
},
{
    email: "juan@gmail.com",
    name: "Juan",
    password: "juan123",
    photo: "/public/sesion.png"
},{
    email: "Eduardo@gmail.com",
    name: "Eduardo",
    password: "eduardo123",
    photo: "/public/lalo.jpg"
}];


const evtForm = (evt)=>{
    evt.preventDefault();
    let email= email_input.value;
    let pass= pass_input.value;
    let userFound= Usuarios.filter((Usuarios)=>Usuarios.email===email);
    let userFoundLoal= JSON.parse(usersLocal).filter((Usuarios)=>Usuarios.email===email);
    mensaje.textContent="";
    if(userFound.length>0){
        if(userFound[0].password===pass){
            alert("Bienvenido "+ userFound[0].user);
            window.location.href="pages/home.html";
            mensaje.style.display="none";
            localStorage.setItem("user", userFound[0].name);
            localStorage.setItem("photo", userFound[0].photo);
        }else{
            mensaje.style.display="block";
            mensaje.textContent="Contraseña incorrecta";
        }
    }else{
        mensaje.style.display="block";
        mensaje.textContent="Usuario no encontrado";
    }
}

form.addEventListener("submit", evtForm);