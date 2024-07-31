// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

setInterval(nextSlide, 5000); // Auto slide every 5 seconds

// Product details functionality
function showDetails(productId) {
    const details = {
        'lover-silver-bracelet': {
            name: 'Lover Silver Bracelet',
            color: 'Plateado',
            width: '9mm',
            description: 'Combinable con charms. Acero inoxidable (No se despinta).'
        },
        'golden-bracelet': {
            name: 'Golden Bracelet',
            color: 'Dorado',
            width: '10mm',
            description: 'Elegante y duradero. Ideal para cualquier ocasión.'
        },
        'silver-bracelet': {
            name: 'Silver Bracelet',
            color: 'Plateado',
            width: '8mm',
            description: 'Diseño sofisticado y versátil. Perfecto para combinar con otros accesorios.'
        },
        'star-silver-bracelet': {
            name: 'Star Silver Bracelet',
            color: 'Plateado con estrella',
            width: '11mm',
            description: 'Añade un toque estrellado a tu estilo. Acero inoxidable de alta calidad.'
        },
        'butterfly-silver-bracelet': {
            name: 'Butterfly Silver Bracelet',
            color: 'Plateado con mariposa',
            width: '12mm',
            description: 'Un diseño delicado con mariposas. Ideal para un look elegante.'
        }
    };

    const product = details[productId];
    if (product) {
        alert(`Nombre: ${product.name}\nColor: ${product.color}\nMedida: ${product.width}\nDescripción: ${product.description}`);
    }
}

// Sort products
function sortProducts() {
    const sortValue = document.getElementById('sort').value;
    const container = document.querySelector('.productos-container');
    const products = Array.from(container.children);

    products.sort((a, b) => {
        const priceA = parseInt(a.querySelector('span').textContent.replace('Precio: ', '').replace(' soles', ''));
        const priceB = parseInt(b.querySelector('span').textContent.replace('Precio: ', '').replace(' soles', ''));

        return sortValue === 'low-to-high' ? priceA - priceB : priceB - priceA;
    });

    products.forEach(product => container.appendChild(product));
}
