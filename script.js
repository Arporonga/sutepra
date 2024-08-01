document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    // Función para mostrar la imagen actual
    function showSlide(index) {
        const offset = -index * 100; // Calcula el desplazamiento para mostrar la imagen actual
        document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    }

    // Función para avanzar a la siguiente imagen
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // Cambiar de imagen cada 5 segundos
    setInterval(nextSlide, 5000);

    // Mostrar la primera imagen al cargar la página
    showSlide(currentIndex);
});

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

        if (order === 'asc') {
            return priceA - priceB;
        } else if (order === 'desc') {
            return priceB - priceA;
        }
        return 0;
    });

    products.forEach(product => container.appendChild(product));
}

// Eventos para los botones de ordenamiento
document.getElementById('sort-low-to-high').addEventListener('click', () => {
    sortProducts('asc');
});

document.getElementById('sort-high-to-low').addEventListener('click', () => {
    sortProducts('desc');
});

// Código para el modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("order-button");
const span = document.getElementsByClassName("close")[0];

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
