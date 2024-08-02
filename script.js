// Slider functionality
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Set initial styles for slides
function initializeSlides() {
    slides.forEach((slide, index) => {
        slide.style.width = '100%';
        slide.style.height = '100%';
        if (index === 0) {
            slide.classList.add('active'); // Set the first slide as active
        }
    });
}

// Show the slide at a specific index
function showSlide(index) {
    const offset = -100 * index; // Desplazar el slider para mostrar la slide actual
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Move to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// Initialize the slider
initializeSlides();
setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos

// Dropdown filter functionality
document.getElementById('filter-button').addEventListener('click', function() {
    document.getElementById('filter-dropdown').classList.toggle('show');
});

document.querySelectorAll('#filter-dropdown a').forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        filterProducts(this.id);
    });
});

function filterProducts(category) {
    let products = document.querySelectorAll('.producto');
    products.forEach(function(product) {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Modal functionality
const modal = document.getElementById("product-modal");
const modalImg = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll('.producto').forEach(function(product) {
    product.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.querySelector('img').src;
        modalDescription.innerHTML = this.dataset.description;
    });
});

closeBtn.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
