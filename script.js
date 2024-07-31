// script.js

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider-background');
    let currentIndex = 0;

    function updateSlider() {
        if (currentIndex === 0) {
            slider.style.backgroundImage = 'url("panel.jpg")';
        } else {
            slider.style.backgroundImage = 'url("panel4.jpg")';
        }
    }

    // Inicializa el slider
    updateSlider();

    setInterval(function() {
        currentIndex = (currentIndex + 1) % 2;
        updateSlider();
    }, 4000); // Cambiar cada 4 segundos
});
