// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Modal functionality
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close');

    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
        producto.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImage.src = producto.querySelector('img').src;
            modalTitle.textContent = producto.querySelector('h3').textContent;
            modalDescription.textContent = producto.dataset.description;
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Ordenar productos
    const sortLowToHigh = document.getElementById('sort-low-to-high');
    const sortHighToLow = document.getElementById('sort-high-to-low');
    const productosContainer = document.getElementById('productos-container');

    function sortProducts(order) {
        const productosArray = Array.from(productosContainer.children);
        productosArray.sort((a, b) => {
            const priceA = parseFloat(a.dataset.price);
            const priceB = parseFloat(b.dataset.price);
            return order === 'low-to-high' ? priceA - priceB : priceB - priceA;
        });
        productosContainer.innerHTML = '';
        productosArray.forEach(producto => productosContainer.appendChild(producto));
    }

    sortLowToHigh.addEventListener('click', () => {
        sortProducts('low-to-high');
    });

    sortHighToLow.addEventListener('click', () => {
        sortProducts('high-to-low');
    });
});
