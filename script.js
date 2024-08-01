document.addEventListener('DOMContentLoaded', function() {
    // Modal
    var modal = document.getElementById("product-modal");
    var closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.view-details').forEach(function(button) {
        button.addEventListener('click', function() {
            var producto = this.parentElement;
            var description = producto.getAttribute('data-description');
            var imgSrc = producto.querySelector('img').src;

            document.getElementById('modal-description').textContent = description;
            document.getElementById('modal-image').src = imgSrc;

            modal.style.display = "block";
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Ordenar productos por precio
    document.getElementById('sort-low-to-high').addEventListener('click', function() {
        sortProducts('asc');
    });

    document.getElementById('sort-high-to-low').addEventListener('click', function() {
        sortProducts('desc');
    });

    function sortProducts(order) {
        var container = document.getElementById('productos-container');
        var productos = Array.from(container.getElementsByClassName('producto'));

        productos.sort(function(a, b) {
            var priceA = parseFloat(a.getAttribute('data-price'));
            var priceB = parseFloat(b.getAttribute('data-price'));

            return order === 'asc' ? priceA - priceB : priceB - priceA;
        });

        productos.forEach(function(producto) {
            container.appendChild(producto);
        });
    }
});
