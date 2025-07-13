function openLightbox(element) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightbox.style.display = "flex";
    lightboxImg.src = element.src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
