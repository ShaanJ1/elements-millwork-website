document.addEventListener('DOMContentLoaded', function() {
    const changeSlideEvery = 6_000;
    
    const testimonialsContainer = document.querySelector('.testimonials__container');
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');
    
    if (!testimonialsContainer || !testimonials.length || !prevBtn || !nextBtn) return;
    
    let currentTestimonial = 0;
    const totalTestimonials = testimonials.length;
    let testimonialInterval;
    
    updateTestimonialPositions();
    startTestimonialRotation();
    
    nextBtn.addEventListener('click', function() {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        updateTestimonialPositions();
        resetTestimonialRotation();
    });
    
    prevBtn.addEventListener('click', function() {
        currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
        updateTestimonialPositions();
        resetTestimonialRotation();
    });
    
    function updateTestimonialPositions() {
        testimonials.forEach((testimonial, index) => {
            if (index === currentTestimonial) {
                testimonial.style.opacity = '1';
                testimonial.style.transform = 'translateX(0)';
            } else if (index < currentTestimonial) {
                testimonial.style.opacity = '0';
                testimonial.style.transform = 'translateX(-50px)';
            } else {
                testimonial.style.opacity = '0';
                testimonial.style.transform = 'translateX(50px)';
            }
        });
    }
    
    function startTestimonialRotation() {
        testimonialInterval = setInterval(function() {
            currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
            updateTestimonialPositions();
        }, changeSlideEvery);
    }
    
    function resetTestimonialRotation() {
        clearInterval(testimonialInterval);
        startTestimonialRotation();
    }
});