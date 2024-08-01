// Script para mostrar y ocultar la descripción de los productos
document.querySelectorAll('.producto').forEach(product => {
    product.addEventListener('click', function() {
        // Alterna la clase 'active' en el producto clicado
        this.classList.toggle('active');
    });
});

// Función para ordenar los productos
function sortProducts(order) {
    const container = document.getElementById('productos-container');
    const products = Array.from(container.querySelectorAll('.producto'));

    products.sort((a, b) => {
        const priceA = parseFloat(a.getAttribute('data-price'));
        const priceB = parseFloat(b.getAttribute('data-price'));

        if (order === 'low-to-high') {
            return priceA - priceB;
        } else if (order === 'high-to-low') {
            return priceB - priceA;
        }
        return 0;
    });

    products.forEach(product => container.appendChild(product));
}

// Event listeners para los enlaces de ordenamiento
document.getElementById('sort-low-to-high').addEventListener('click', () => sortProducts('low-to-high'));
document.getElementById('sort-high-to-low').addEventListener('click', () => sortProducts('high-to-low'));

// Script para el slider automático
let currentIndex = 0;
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;

function showSlide(index) {
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    showSlide(currentIndex);
}

setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos

// Script para mostrar el modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("order-button");
var span = document.getElementsByClassName("close")[0];

// Abre el modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cierra el modal si el usuario hace clic fuera del modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
