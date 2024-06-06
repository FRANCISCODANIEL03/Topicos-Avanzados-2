const form= document.getElementById('form');

form.addEventListener('submit', async function(e){
    e.preventDefault();
    const URL= 'https://api-topicos-77j7.onrender.com/';
    const name= document.getElementById('name');
    const msg= document.getElementById('msg');
    const data= JSON.stringify({
        nombre: name.value
    });

   const dataFetch= await fetch(URL, {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const response= await dataFetch.json();
    if(dataFetch.status===200){
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Usuario creado correctamente",
            showConfirmButton: false,
            timer: 1500
          });
    }else{
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Error al crear usuario",
            showConfirmButton: false,
            timer: 1500
          });
    }
});