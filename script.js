// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Ordenar productos
    const orderButton = document.getElementById('order-button');
    const dropdownContent = document.querySelector('.dropdown-content');
    const productosContainer = document.getElementById('productos-container');

    orderButton.addEventListener('click', function () {
        dropdownContent.classList.toggle('show');
    });

    document.getElementById('sort-low-to-high').addEventListener('click', function () {
        sortProducts('asc');
    });

    document.getElementById('sort-high-to-low').addEventListener('click', function () {
        sortProducts('desc');
    });

    function sortProducts(order) {
        const productos = Array.from(productosContainer.getElementsByClassName('producto'));

        productos.sort((a, b) => {
            const priceA = parseFloat(a.getAttribute('data-price'));
            const priceB = parseFloat(b.getAttribute('data-price'));
            return order === 'asc' ? priceA - priceB : priceB - priceA;
        });

        productos.forEach(producto => productosContainer.appendChild(producto));
    }
});
