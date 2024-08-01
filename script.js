document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('product-modal');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close');

    // Función para abrir el modal
    function openModal(imageSrc, description) {
        modalImage.src = imageSrc;
        modalDescription.innerHTML = description;
        modal.style.display = 'block';
    }

    // Función para cerrar el modal
    function closeModalFn() {
        modal.style.display = 'none';
    }

    // Añadir evento al botón de cerrar
    closeModal.addEventListener('click', closeModalFn);

    // Añadir evento al hacer clic en cualquier parte del producto
    document.querySelectorAll('.producto').forEach(producto => {
        producto.addEventListener('click', () => {
            const imageSrc = producto.querySelector('img').src;
            const description = producto.getAttribute('data-description');
            openModal(imageSrc, description);
        });
    });

    // Cerrar el modal si el usuario hace clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModalFn();
        }
    });
});
