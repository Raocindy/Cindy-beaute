var slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    
    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[slideIndex - 1].style.display = "block";  

    // Reset automatic slideshow timer
    clearInterval(autoSlide);
    autoSlide = setInterval(function() {
        plusSlides(1);
    }, 5000);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Automatic slideshow functionality
var autoSlide = setInterval(function() {
    plusSlides(1);
}, 5000);

// Pause slideshow when hovering over the slideshow container
document.querySelector(".slideshow-container").addEventListener("mouseenter", function() {
    clearInterval(autoSlide);
});

// Resume slideshow when leaving the slideshow container
document.querySelector(".slideshow-container").addEventListener("mouseleave", function() {
    autoSlide = setInterval(function() {
        plusSlides(1);
    }, 5000);
});




