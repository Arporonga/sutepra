// script.js

document.addEventListener('DOMContentLoaded', function() {
    const sliderImages = document.querySelectorAll('.slider-image');
    let currentIndex = 0;
    const imageCount = sliderImages.length;

    function showNextImage() {
        sliderImages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % imageCount;
        sliderImages[currentIndex].classList.add('active');
    }

    // Ajusta el intervalo para mostrar imágenes solo entre panel.jpg y panel4.jpg
    setInterval(showNextImage, 4000); // Cambiar cada 4 segundos
});
