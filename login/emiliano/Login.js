const formulario = document.getElementById("formularioLogin");
let emailI=document.getElementById("correo");
let passwordI=document.getElementById("contraseña");
const mensaje_error= document.getElementById("mensaje");


const usuarios=[{
    usuario : "hola@gmail.com",
    contraseña : "Hola123"
}]


const eventoFormulario= (evt)=>{
    evt.preventDefault();
    console.log(evt);
    let email=emailI.value;
    let password=passwordI.value;
    let coincidencias=usuarios.filter((usuario)=> usuario.usuario===email);

    if(coincidencias.length >0){
        if(coincidencias[0].password===password){
            window.location="/home.html";
            mensaje_error.textContent="Contraseña Incorrecta";
        }

    }else{
        mensaje_error.textContent="Usuario incorrecto";
    }
}
formulario.addEventListener("submit", eventoFormulario); 

