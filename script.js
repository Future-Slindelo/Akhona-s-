let slideIndex = 0;
showSlides();

// Function to show slides
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }  // Loop back to the first slide
    slides[slideIndex - 1].style.display = "block";  // Show the current slide
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Function to change slides manually
function plusSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    slideIndex += n;  // Update slideIndex
    if (slideIndex > slides.length) { slideIndex = 1; }  // Reset to first slide if exceeds
    if (slideIndex < 1) { slideIndex = slides.length; }  // Reset to last slide if below one
    showSlides();  // Show the updated slide
}