document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq__question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const answer = this.nextElementSibling;

            if (isExpanded) {
                this.setAttribute('aria-expanded', 'false');
                answer.style.maxHeight = '0';
                answer.style.paddingTop = '0';
                answer.style.paddingBottom = '0';
            } else {
                this.setAttribute('aria-expanded', 'true');

                answer.style.maxHeight = 'none';
                answer.style.paddingTop = '1rem';
                answer.style.paddingBottom = '1rem';

                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});