const fileImgInput= document.getElementById('fileMascota');
const img= document.getElementById('mascota');
const form= document.getElementById('form');
const verRegistros= document.getElementById('displayRegis');

verRegistros.addEventListener('click', function(e){
    window.location.href= "pages/pets.html";
})

fileImgInput.addEventListener('change', function(){
    var reader= new FileReader();
    reader.onload= function(e){
        img.src= e.target.result;
        img.style.display= "block";
        fileImgInput.style.display= "none";
    }
    reader.readAsDataURL(this.files[0]);
});

form.addEventListener('submit', function(e){
    e.preventDefault();
    verRegistros.style.display= "block";
    //datos del form
    var nameTitular= document.getElementById('nameTitular').value;
    var namePet= document.getElementById('namePet').value;
    var typePet= document.getElementById('typePet').value;
    var padecimiento= document.getElementById('padecimiento').value;
    var description= document.getElementById('description').value;
    var numberOfContact= document.getElementById('numberOfContact').value;
    var imgPet= document.getElementById('fileMascota');

    var miModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    var modalLabel= document.getElementById("exampleModalLabel");
    

    var img= "";
    if(imgPet.files.length > 0){
        var reader= new FileReader();
        reader.onload= function(e){
            img = e.target.result;
            const submitPet=
            {
                titularName: nameTitular,
                petName: namePet,
                typePet: typePet,
                padecimiento: padecimiento,
                numberOfContact: numberOfContact,
                Description: description,
                imgPet: img
            };
            var exisitingPets= JSON.parse(localStorage.getItem('Pets')) || [];
            exisitingPets.push(submitPet);
            localStorage.setItem('Pets', JSON.stringify(exisitingPets));
            modalLabel.textContent="Mascota registrado exitosamente";
            miModal.show();
        }
        reader.readAsDataURL(imgPet.files[0]);
        
    }
});

