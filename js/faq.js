document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq__question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            
            const answer = this.nextElementSibling;
            if (isExpanded) {
                answer.style.maxHeight = '0';
                answer.style.opacity = '0';
                answer.style.marginTop = '0';
                answer.style.padding = '0';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.opacity = '1';
                answer.style.marginTop = '10px';
                answer.style.padding = '5px 0 15px';
            }
        });
    });
});