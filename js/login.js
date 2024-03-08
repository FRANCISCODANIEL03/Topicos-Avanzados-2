const form= document.getElementById("form");
const user_input= document.getElementById("user");
const pass_input= document.getElementById("pass");
const mensaje= document.getElementById("mensaje");
const Usuarios=[
{
    user: "deivid",
    password: "deivid123",
    photo: "/public/deivid.jpeg"
},
{
    user: "juan",
    password: "juan123",
    photo: "/public/sesion.png"
},{
    user: "Eduardo",
    password: "eduardo123",
    photo: "/public/lalo.jpg"
}];


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