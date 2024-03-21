const form= document.getElementById("form");
<<<<<<< HEAD
const email_input= document.getElementById("email");
const pass_input= document.getElementById("pass");
const mensaje= document.getElementById("mensaje");
const usersLocal = JSON.parse(localStorage.getItem("users")) || [];

const Usuarios=[
{
    email: "deivid@icloud.com",
    name: "Deivid",
=======
const user_input= document.getElementById("user");
const pass_input= document.getElementById("pass");
const mensaje= document.getElementById("mensaje");
const Usuarios=[
{
    user: "deivid",
>>>>>>> c75c64f (Upload files)
    password: "deivid123",
    photo: "/public/deivid.jpeg"
},
{
<<<<<<< HEAD
    email: "juan@gmail.com",
    name: "Juan",
    password: "juan123",
    photo: "/public/sesion.png"
},{
    email: "Eduardo@gmail.com",
    name: "Eduardo",
=======
    user: "juan",
    password: "juan123",
    photo: "/public/sesion.png"
},{
    user: "Eduardo",
>>>>>>> c75c64f (Upload files)
    password: "eduardo123",
    photo: "/public/lalo.jpg"
}];

<<<<<<< HEAD
const allUsers = [...usersLocal, ...Usuarios];
const modalLabel= document.getElementById("exampleModalLabel");

const evtForm = (evt)=>{
    evt.preventDefault();
    let email= email_input.value;
    let pass= pass_input.value;
    let userFound= allUsers.filter((usuario)=>usuario.email===email);
    
    mensaje.textContent="";
    if(userFound.length>0){
        if(userFound[0].password===pass){
            var miModal = new bootstrap.Modal(document.getElementById('exampleModal'));
            modalLabel.textContent="Bienvenido "+userFound[0].name;
            miModal.show();
            document.getElementById('btnGracias').addEventListener('click', function() {
                window.location.href="pages/home.html";
                mensaje.style.display="none";
            });
            localStorage.setItem("user", userFound[0].name);
            localStorage.setItem("photo", userFound[0].photo);
=======

const evtForm = (evt)=>{
    evt.preventDefault();
    let user= user_input.value;
    let pass= pass_input.value;
    let userFound= Usuarios.filter((Usuarios)=>Usuarios.user===user);
    mensaje.textContent="";
    if(userFound.length>0){
        if(userFound[0].password===pass){
            alert("Bienvenido "+userFound[0].user);
            window.location.href="pages/home.html";
            mensaje.style.display="none";
            localStorage.setItem("user",userFound[0].user);
            localStorage.setItem("photo",userFound[0].photo);
>>>>>>> c75c64f (Upload files)
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