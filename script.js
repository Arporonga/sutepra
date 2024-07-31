document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    let index = 0;

    setInterval(() => {
        index = (index + 1) % 2;
        slides.style.transform = `translateX(-${index * 50}%)`;
    }, 5000);
});
