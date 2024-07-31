document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slider-image');
    const totalImages = images.length;
    let currentIndex = 0;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        const offset = -currentIndex * 100;
        document.querySelector('.slider-images').style.transform = `translateX(${offset}%)`;
    }

    // Establece el intervalo para cambiar la imagen
    setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos
});
