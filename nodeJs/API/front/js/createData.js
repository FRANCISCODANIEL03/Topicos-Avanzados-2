const form= document.getElementById('form');

form.addEventListener('submit', async function(e){
    e.preventDefault();
    const URL= 'http://localhost:3000';
    const name= document.getElementById('name');
    const msg= document.getElementById('msg');
    const data= JSON.stringify({
        nombre: name.value
    });
    console.log(data);
   const dataFetch= await fetch(URL, {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const response= await dataFetch.json();
    msg.textContent= response.message;
});