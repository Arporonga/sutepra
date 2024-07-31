// script.js
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    let currentSlide = 0;

    function showSlide(index) {
        if (index >= totalSlides) currentSlide = 0;
        if (index < 0) currentSlide = totalSlides - 1;
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function previousSlide() {
        showSlide(currentSlide - 1);
    }

    // Cambiar automáticamente de slide cada 5 segundos
    setInterval(nextSlide, 5000);

    // Añadir controles para el slider (opcional)
    const prevButton = document.createElement('button');
    prevButton.textContent = '‹';
    prevButton.className = 'slider-control prev';
    prevButton.addEventListener('click', previousSlide);
    document.querySelector('.slider').appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.textContent = '›';
    nextButton.className = 'slider-control next';
    nextButton.addEventListener('click', nextSlide);
    document.querySelector('.slider').appendChild(nextButton);
});
