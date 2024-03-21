var petData = JSON.parse(localStorage.getItem("Pets"));

// Generar dinámicamente las diapositivas del carrusel
var carouselInner = document.querySelector(".carousel-inner");

petData.forEach(function(pet, index) {
    var carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (index === 0) {
        carouselItem.classList.add("active");
    }

    var link= document.createElement("a");
    link.href = "/veterinaria-patitas-suaves/pages/reporte.html" +
                "?titularName=" + encodeURIComponent(pet.titularName) +
                "&petName=" + encodeURIComponent(pet.petName) +
                "&petType=" + encodeURIComponent(pet.typePet) +
                "&petCondition=" + encodeURIComponent(pet.padecimiento) +
                "&numberOfContact=" + encodeURIComponent(pet.numberOfContact) +
                "&description=" + encodeURIComponent(pet.Description) +
                "&imgPet=" + encodeURIComponent(pet.imgPet);


    var img = document.createElement("img");
    img.classList.add("d-block");
    img.src = pet.imgPet;
    img.alt = pet.petName;

    var namePet = document.createElement("h2");
    namePet.textContent= pet.petName;
    namePet.classList.add("text-center", "text-light");

    link.appendChild(img)
    carouselItem.appendChild(namePet);
    carouselItem.appendChild(link);
    carouselInner.appendChild(carouselItem);
});