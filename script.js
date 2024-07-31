// script.js
let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');
const totalImages = images.length;
const displayTime = 5000; // Tiempo en milisegundos para cada imagen (5 segundos)

// Función para mostrar la siguiente imagen
function showNextImage() {
    // Ocultar la imagen actual
    images[currentIndex].classList.remove('active');
    // Avanzar al siguiente índice
    currentIndex = (currentIndex + 1) % totalImages;
    // Mostrar la nueva imagen
    images[currentIndex].classList.add('active');
}

// Iniciar el slider
function startSlider() {
    // Mostrar la primera imagen
    images[currentIndex].classList.add('active');
    // Cambiar de imagen cada `displayTime` milisegundos
    setInterval(showNextImage, displayTime);
}

// Iniciar el slider al cargar la página
window.addEventListener('load', startSlider);
