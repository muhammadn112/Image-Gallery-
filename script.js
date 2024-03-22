let slideIndex = 1;

function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
    document.body.style.overflow = "hidden"; 
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
    document.body.style.overflow = "auto"; 
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


document.querySelectorAll('.prev, .next').forEach(item => {
    item.addEventListener('click', event => {
        event.stopPropagation();
    });
});


document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        event.stopPropagation();
    }
});
