document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideImages = ['panel2.jpg', 'panel4.jpg', 'panel3.jpg'];
    let index = 0;

    function showSlide() {
        index = (index + 1) % slideImages.length;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(showSlide, 5000);

    document.getElementById('sort-low-to-high').addEventListener('click', function() {
        sortProductsByPrice('asc');
    });

    document.getElementById('sort-high-to-low').addEventListener('click', function() {
        sortProductsByPrice('desc');
    });

    function sortProductsByPrice(order) {
        const container = document.getElementById('productos-container');
        const products = Array.from(container.getElementsByClassName('producto'));
        products.sort((a, b) => {
            const priceA = parseFloat(a.dataset.price);
            const priceB = parseFloat(b.dataset.price);
            return order === 'asc' ? priceA - priceB : priceB - priceA;
        });
        container.innerHTML = '';
        products.forEach(product => container.appendChild(product));
    }
});
