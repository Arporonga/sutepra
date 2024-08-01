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

// Eventos para los botones de ordenamiento
document.getElementById('sort-low-to-high').addEventListener('click', () => {
    sortProducts('low-to-high');
});

document.getElementById('sort-high-to-low').addEventListener('click', () => {
    sortProducts('high-to-low');
});
