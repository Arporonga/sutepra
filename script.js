// JavaScript to handle dropdown filter
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
var modal = document.getElementById("product-modal");
var modalImg = document.getElementById("modal-image");
var modalDescription = document.getElementById("modal-description");
var span = document.getElementsByClassName("close")[0];

document.querySelectorAll('.producto').forEach(function(product) {
    product.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.querySelector('img').src;
        modalDescription.innerHTML = this.dataset.description;
    });
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
