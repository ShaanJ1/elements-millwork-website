document.addEventListener('DOMContentLoaded', function() {
    const viewport = document.getElementById('gallery-viewport');
    const previewItems = document.querySelectorAll('#gallery-preview li');
    const btnNext = document.getElementById('gallery-btn-next');
    const btnPrev = document.getElementById('gallery-btn-prev');
    
    if (!viewport || !btnNext || !btnPrev) return;
    
    let currentSlide = 0;
    const totalSlides = viewport.children.length;
    
    updateSlidePositions();
    
    updatePreviewStates();
    
    btnNext.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePositions();
        updatePreviewStates();
    });
    
    btnPrev.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlidePositions();
        updatePreviewStates();
    });
    
    previewItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentSlide = index;
            updateSlidePositions();
            updatePreviewStates();
        });
    });
    
    function updateSlidePositions() {
        for (let i = 0; i < totalSlides; i++) {
            const slide = viewport.children[i];
            const position = (i - currentSlide + totalSlides) % totalSlides;
            
            if (position === 0) {
                // Current slide
                slide.style.transform = 'translateX(0)';
                slide.style.opacity = '1';
                slide.style.zIndex = '1';
            } else {
                // Off-screen slides
                const direction = position <= totalSlides / 2 ? 1 : -1;
                slide.style.transform = `translateX(${direction * 100}%)`;
                slide.style.opacity = '0';
                slide.style.zIndex = '0';
            }
        }
    }
    
    function updatePreviewStates() {
        previewItems.forEach((item, index) => {
            if (index === currentSlide) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
});