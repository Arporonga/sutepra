// script.js

// Función para abrir el modal
function openModal(imageSrc, description) {
    document.getElementById('modal-image').src = imageSrc;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('product-modal').style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

// Configurar eventos para los productos
document.querySelectorAll('.producto').forEach(producto => {
    producto.addEventListener('click', () => {
        const imageSrc = producto.querySelector('img').src;
        const description = producto.getAttribute('data-description');
        openModal(imageSrc, description);
    });
});

// Configurar evento para cerrar el modal
document.querySelector('.close').addEventListener('click', closeModal);

// Configurar eventos para ordenar productos
document.getElementById('sort-low-to-high').addEventListener('click', () => {
    sortProducts('asc');
});
document.getElementById('sort-high-to-low').addEventListener('click', () => {
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

    container.innerHTML = '';
    products.forEach(product => container.appendChild(product));
}

// Función para filtrar productos por categoría
function filterProducts(category) {
    const container = document.getElementById('productos-container');
    const products = Array.from(container.getElementsByClassName('producto'));

    products.forEach(product => {
        const isVisible = category === 'all' || product.classList.contains(category);
        product.style.display = isVisible ? 'block' : 'none';
    });
}

// Configurar eventos para botones de categoría
document.getElementById('sort-low-to-high').addEventListener('click', () => {
    filterProducts('all'); // Muestra todos los productos antes de ordenar
    sortProducts('asc');
});
document.getElementById('sort-high-to-low').addEventListener('click', () => {
    filterProducts('all'); // Muestra todos los productos antes de ordenar
    sortProducts('desc');
});
document.getElementById('category-italian-bracelets').addEventListener('click', () => {
    filterProducts('italian-bracelets');
});
document.getElementById('category-lentes').addEventListener('click', () => {
    filterProducts('lentes');
});

// Slider functionality
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides");
    const slideCount = document.querySelectorAll(".slide").length;
    let currentIndex = 0;

    function showSlide(index) {
        slides.style.transform = `translateX(-${index * 100}%)`; // Usar comillas invertidas para el string
        updateIndicators(index);
    }

    function updateIndicators(index) {
        document.querySelectorAll(".slider-indicator").forEach((indicator, i) => {
            indicator.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
    }

    // Start automatic slide transition every 5 seconds
    setInterval(nextSlide, 5000);

    // Create indicators
    const indicators = document.createElement("div");
    indicators.className = "slider-indicators";
    for (let i = 0; i < slideCount; i++) {
        const indicator = document.createElement("div");
        indicator.className = "slider-indicator";
        indicator.addEventListener("click", () => {
            currentIndex = i;
            showSlide(currentIndex);
        });
        indicators.appendChild(indicator);
    }
    document.querySelector(".slider").appendChild(indicators);

    // Initialize
    showSlide(currentIndex);
});
