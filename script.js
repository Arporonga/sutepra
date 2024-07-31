document.addEventListener('DOMContentLoaded', () => {
    const sliderImages = document.querySelector('.slider-images');
    const images = Array.from(document.querySelectorAll('.slider-image'));
    let currentIndex = 0;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function startSlider() {
        setInterval(showNextImage, 5000); // Cambia la imagen cada 5 segundos
    }

    startSlider();
});
