// script.js

// Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.slider-indicator');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    indicators[slideIndex - 1].className += ' active';
    setTimeout(showSlides, 5000); // Cambiar de imagen cada 5 segundos
}

showSlides();

// Obtener el modal
const modal = document.getElementById('product-modal');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const span = document.getElementsByClassName('close')[0];

// Función para abrir el modal
function openModal(imageSrc, description) {
    modal.style.display = 'block';
    modalImage.src = imageSrc;
    modalDescription.innerHTML = description;
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none';
}

// Al hacer clic en el botón de cerrar, se cierra el modal
span.onclick = function() {
    closeModal();
}

// Al hacer clic fuera del contenido del modal, se cierra el modal
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

// Añade eventos de clic a los productos para abrir el modal
document.querySelectorAll('.producto').forEach(producto => {
    producto.addEventListener('click', () => {
        const imgSrc = producto.querySelector('img').src;
        const description = producto.getAttribute('data-description');
        openModal(imgSrc, description);
    });
});

// Funcionalidad para el botón de ordenación
document.getElementById('sort-low-to-high').addEventListener('click', () => {
    sortProducts('low-to-high');
});

document.getElementById('sort-high-to-low').addEventListener('click', () => {
    sortProducts('high-to-low');
});

function sortProducts(order) {
    const container = document.getElementById('productos-container');
    let products = Array.from(container.getElementsByClassName('producto'));

    products.sort((a, b) => {
        const priceA = parseFloat(a.getAttribute('data-price'));
        const priceB = parseFloat(b.getAttribute('data-price'));

        return order === 'low-to-high' ? priceA - priceB : priceB - priceA;
    });

    products.forEach(product => {
        container.appendChild(product);
    });
}

// Funcionalidad del menú desplegable
document.getElementById('order-button').addEventListener('click', () => {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
});

// Cerrar el menú desplegable si se hace clic fuera de él
window.addEventListener('click', (event) => {
    if (!event.target.matches('#order-button')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        Array.from(dropdowns).forEach(dropdown => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
});

// Funcionalidad para los filtros del menú desplegable
document.getElementById('filter-button').addEventListener('click', () => {
    const filterDropdown = document.getElementById('filter-dropdown');
    filterDropdown.classList.toggle('show');
});

// Filtrar los productos al seleccionar una opción del menú desplegable
document.querySelectorAll('#filter-dropdown a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const filterCategory = event.target.id;

        const productosContainer = document.getElementById('productos-container');
        const productos = Array.from(productosContainer.getElementsByClassName('producto'));

        productos.forEach(producto => {
            const category = producto.getAttribute('data-category');
            if (filterCategory === 'all' || filterCategory === category) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });

        // Cerrar el menú desplegable después de aplicar el filtro
        document.getElementById('filter-dropdown').classList.remove('show');
    });
});
