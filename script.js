// Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const offset = -index * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 5000);

// Ordenar productos
document.getElementById('order-button').addEventListener('click', () => {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('sort-low-to-high').addEventListener('click', () => {
    sortProducts(true);
});

document.getElementById('sort-high-to-low').addEventListener('click', () => {
    sortProducts(false);
});

function sortProducts(lowToHigh) {
    const container = document.getElementById('productos-container');
    const productos = Array.from(container.querySelectorAll('.producto'));

    productos.sort((a, b) => {
        const priceA = parseFloat(a.getAttribute('data-price'));
        const priceB = parseFloat(b.getAttribute('data-price'));
        return lowToHigh ? priceA - priceB : priceB - priceA;
    });

    productos.forEach(producto => container.appendChild(producto));
}

// Mostrar especificaciones del producto
document.querySelectorAll('.product-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const producto = e.target.closest('.producto');
        document.getElementById('product-title').textContent = producto.querySelector('h3').textContent;
        document.getElementById('product-image').src = producto.querySelector('img').src;
        document.getElementById('product-description').textContent = producto.getAttribute('data-description');
        document.getElementById('product-price').textContent = producto.querySelector('span').textContent;
        document.getElementById('product-specifications').classList.remove('hidden');
    });
});

document.querySelector('.close-specifications').addEventListener('click', () => {
    document.getElementById('product-specifications').classList.add('hidden');
});
