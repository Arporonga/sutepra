// script.js

document.addEventListener("DOMContentLoaded", function() {
    const sliderImages = document.querySelectorAll(".slider-image");
    const totalImages = sliderImages.length;
    let currentIndex = 0;

    function showNextImage() {
        // Ocultar la imagen actual
        sliderImages[currentIndex].style.opacity = 0;
        // Avanzar al siguiente índice
        currentIndex = (currentIndex + 1) % totalImages;
        // Mostrar la siguiente imagen
        sliderImages[currentIndex].style.opacity = 1;
        // Mover el contenedor de imágenes
        const sliderImagesContainer = document.querySelector(".slider-images");
        sliderImagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Inicializar la primera imagen
    sliderImages[currentIndex].style.opacity = 1;

    // Cambiar la imagen cada 4 segundos
    setInterval(showNextImage, 4000);
});
