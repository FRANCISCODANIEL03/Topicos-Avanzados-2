const back = document.getElementById("volver");
const form= document.getElementById("form");
back.addEventListener("click", function(e) {
    e.preventDefault();
    window.location.href = "../index.html";
});
form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    console.log("SI")
    names_input= document.getElementById("name");
    last_name= document.getElementById("last-name");
    email= document.getElementById("email");
    password= document.getElementById("password");
    confirm_password = document.getElementById("confirm-password");
    img= document.getElementById("img");
    if(password.value===confirm_password.value){
        confirm_password.style.backgroundColor = "white";
        password.style.backgroundColor = "white";
        const user= [
            {
                name: names_input,
                last_name: last_name,
                email: email,
                password: password,
                photo: img
            }
        ];
        localStorage.setItem("user", JSON.stringify(user));
    }else{
        confirm_password.style.backgroundColor = "red";
        password.style.backgroundColor = "red";
        alert("Las contraseñas no coinciden");
    }
});