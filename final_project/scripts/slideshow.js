let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    // If slideIndex exceeds number of slides, reset it to the first slide
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
    // Change slide every 4 seconds
    setTimeout(showSlides, 4000);
}

// Start the slideshow
showSlides();
