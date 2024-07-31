document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    let index = 0;

    setInterval(() => {
        index = (index + 1) % 3;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }, 5000);
});

function sortProductsByPrice() {
    const container = document.getElementById('productos-container');
    const products = Array.from(container.getElementsByClassName('producto'));
    products.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
    container.innerHTML = '';
    products.forEach(product => container.appendChild(product));
}
