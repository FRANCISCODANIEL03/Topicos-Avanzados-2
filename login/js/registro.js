<<<<<<< HEAD
const back = document.getElementById("volver");
const form= document.getElementById("form");
back.addEventListener("click", function(e) {
    e.preventDefault();
    window.location.href = "../index.html";
});
form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    var names_input = document.getElementById("name").value;
    var last_name = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm-password").value;
    var img_input = document.getElementById("file"); // Input de la imagen

    const miModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    const modalLabel= document.getElementById("exampleModalLabel");
    const btnOkey = document.getElementById('btn-okey');
    
    if (password === confirm_password) {
        document.getElementById("confirm-password").style.backgroundColor = "white";
        document.getElementById("password").style.backgroundColor = "white";

        var img = ""; 
        if (img_input.files.length > 0) {
            var reader = new FileReader();
            reader.onload = function(event) {
                img = event.target.result;
                var user = {
                    name: names_input,
                    last_name: last_name,
                    email: email,
                    password: password,
                    photo: img 
                };
                var existingUsers = JSON.parse(localStorage.getItem("users")) || [];
                existingUsers.push(user);
                localStorage.setItem("users", JSON.stringify(existingUsers));

                modalLabel.textContent="Usuario registrado exitosamente";
                miModal.show();
                btnOkey.addEventListener('click', function() {
                    window.location.href="../index.html";
                });
            };
            reader.readAsDataURL(img_input.files[0]);
        } else {
            var user = {
                name: names_input,
                last_name: last_name,
                email: email,
                password: password,
                photo: "" 
            };
            var existingUsers = JSON.parse(localStorage.getItem("users")) || [];
            existingUsers.push(user);
            localStorage.setItem("users", JSON.stringify(existingUsers));

            modalLabel.textContent="Usuario registrado exitosamente";
            miModal.show();
            btnOkey.addEventListener('click', function() {
                window.location.href="../index.html";
            });
        }
    } else {
        document.getElementById("confirm-password").style.backgroundColor = "red";
        document.getElementById("password").style.backgroundColor = "red";
        modalLabel.textContent="Las contraseñas no coinciden";
        miModal.show();
    }
});

=======
const volver= document.getElementById('volver');
volver.addEventListener('click',()=>{
    window.location.href="home.html";
});
>>>>>>> c75c64f (Upload files)
