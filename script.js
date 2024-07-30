let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function toggleRetroOptions() {
    const retroOptions = document.getElementById("retro-options");
    if (retroOptions.style.display === "none" || retroOptions.style.display === "") {
        retroOptions.style.display = "block";
    } else {
        retroOptions.style.display = "none";
    }
}
