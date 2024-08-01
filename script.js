document.addEventListener("DOMContentLoaded", function() {
    const orderButton = document.getElementById("order-button");
    const dropdownContent = document.querySelector(".dropdown-content");

    orderButton.addEventListener("click", function() {
        dropdownContent.classList.toggle("show");
    });

    const sortLowToHigh = document.getElementById("sort-low-to-high");
    const sortHighToLow = document.getElementById("sort-high-to-low");
    const productosContainer = document.getElementById("productos-container");
    const productos = Array.from(productosContainer.getElementsByClassName("producto"));

    sortLowToHigh.addEventListener("click", function() {
        sortProducts(true);
        dropdownContent.classList.remove("show");
    });

    sortHighToLow.addEventListener("click", function() {
        sortProducts(false);
        dropdownContent.classList.remove("show");
    });

    function sortProducts(asc) {
        productos.sort((a, b) => {
            const priceA = parseInt(a.getAttribute("data-price"));
            const priceB = parseInt(b.getAttribute("data-price"));
            return asc ? priceA - priceB : priceB - priceA;
        });

        productos.forEach(producto => productosContainer.appendChild(producto));
    }

    // Modal functionality
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modal-img");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.getElementsByClassName("close")[0];

    productos.forEach(producto => {
        producto.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.querySelector("img").src;
            modalDescription.textContent = this.getAttribute("data-description");
        });
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
