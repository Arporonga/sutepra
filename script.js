document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.getElementById('order-button');
    const dropdownContent = document.querySelector('.dropdown-content');
    const productosContainer = document.getElementById('productos-container');
    const sortLowToHigh = document.getElementById('sort-low-to-high');
    const sortHighToLow = document.getElementById('sort-high-to-low');

    orderButton.addEventListener('click', () => {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    sortLowToHigh.addEventListener('click', () => {
        sortProducts('asc');
    });

    sortHighToLow.addEventListener('click', () => {
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
