// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    const slides = document.querySelector('.slides');
    let currentIndex = 0;
    const slideCount = document.querySelectorAll('.slide').length;
    const slideWidth = document.querySelector('.slide').offsetWidth;

    function showSlide(index) {
        slides.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
    }, 3000);

    // Ordenar por precio
    document.getElementById('order-button').addEventListener('click', function() {
        const dropdown = document.querySelector('.dropdown-content');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.getElementById('sort-low-to-high').addEventListener('click', function() {
        sortProducts('asc');
    });

    document.getElementById('sort-high-to-low').addEventListener('click', function() {
        sortProducts('desc');
    });

    function sortProducts(order) {
        const container = document.getElementById('productos-container');
        const products = Array.from(container.getElementsByClassName('producto'));
        products.sort((a, b) => {
            const priceA = parseFloat(a.getAttribute('data-price'));
            const priceB = parseFloat(b.getAttribute('data-price'));
            return order === 'asc' ? priceA - priceB : priceB - priceA;
        });
        products.forEach(product => container.appendChild(product));
    }
});
