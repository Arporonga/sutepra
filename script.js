document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slider-image');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    showImage(currentIndex);

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 5000); // Cambia la imagen cada 5 segundos
});
