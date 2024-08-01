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

        if (order === 'asc') {
            return priceA - priceB;
        } else {
            return priceB - priceA;
        }
    });

    container.innerHTML = '';
    products.forEach(product => container.appendChild(product));
}
