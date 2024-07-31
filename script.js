// script.js

document.addEventListener("DOMContentLoaded", function() {
    const sliderImages = document.querySelectorAll(".slider-image");
    let currentIndex = 0;

    function showNextImage() {
        sliderImages[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % sliderImages.length;
        sliderImages[currentIndex].classList.add("active");
        const offset = -100 * currentIndex;
        document.querySelector(".slider-images").style.transform = `translateX(${offset}%)`;
    }

    // Inicializar la primera imagen como activa
    sliderImages[currentIndex].classList.add("active");

    // Cambiar la imagen cada 5 segundos
    setInterval(showNextImage, 5000);
});
