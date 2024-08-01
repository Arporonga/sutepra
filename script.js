// Script para mostrar el modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("order-button");
var span = document.getElementsByClassName("close")[0];

// Abre el modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cierra el modal si el usuario hace clic fuera del modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Script para ordenar productos
document.getElementById("sort-low-to-high").addEventListener("click", function() {
    sortProducts("asc");
});

document.getElementById("sort-high-to-low").addEventListener("click", function() {
    sortProducts("desc");
});

function sortProducts(order) {
    var container = document.getElementById("productos-container");
    var products = Array.from(container.getElementsByClassName("producto"));

    products.sort(function(a, b) {
        var priceA = parseFloat(a.getAttribute("data-price"));
        var priceB = parseFloat(b.getAttribute("data-price"));

        return order === "asc" ? priceA - priceB : priceB - priceA;
    });

    products.forEach(function(product) {
        container.appendChild(product);
    });
}
