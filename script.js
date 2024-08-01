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
    if (event.target == modal) {
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

        if (order === 'low-to-high') {
            return priceA - priceB;
        } else if (order === 'high-to-low') {
            return priceB - priceA;
        }
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
