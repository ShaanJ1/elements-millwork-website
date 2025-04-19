document.addEventListener('DOMContentLoaded', function() {
    const changeSlideEvery = 5_000;

    const heroSlideshow = document.getElementById('hero-slideshow');
    const pickerButtons = document.querySelectorAll('.picker-btn');
    
    if (!heroSlideshow || !pickerButtons.length) return;
    
    let currentSlide = 0;
    const slides = heroSlideshow.querySelectorAll('picture');
    const totalSlides = slides.length;
    let slideInterval;
    
    updateSlideVisibility();
    updatePickerButtons();
    
    startSlideRotation();
    
    pickerButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            currentSlide = index;
            updateSlideVisibility();
            updatePickerButtons();
            resetSlideRotation();
        });
    });
    
    function updateSlideVisibility() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.style.opacity = '1';
                slide.style.zIndex = '2';
                slide.classList.add('active');
            } else {
                slide.style.opacity = '0';
                slide.style.zIndex = '1';
                slide.classList.remove('active');
            }
        });
    }
    
    function updatePickerButtons() {
        pickerButtons.forEach((button, index) => {
            if (index === currentSlide) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
    
    function startSlideRotation() {
        slideInterval = setInterval(function() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlideVisibility();
            updatePickerButtons();
        }, changeSlideEvery);
    }
    
    function resetSlideRotation() {
        clearInterval(slideInterval);
        startSlideRotation();
    }
});