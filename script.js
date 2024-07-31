document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.getElementById('order-button');
    const dropdownContent = document.querySelector('.dropdown-content');
    const productosContainer = document.getElementById('productos-container');
    const sortLowToHigh = document.getElementById('sort-low-to-high');
    const sortHighToLow = document.getElementById('sort-high-to-low');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close');

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

    document.querySelectorAll('.producto').forEach(producto => {
        producto.addEventListener('click', () => {
            const imgSrc = producto.querySelector('img').src;
            const title = producto.querySelector('h3').textContent;
            const description = producto.getAttribute('data-description');
            modalImage.src = imgSrc;
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
