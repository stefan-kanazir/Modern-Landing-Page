const faqContainer = document.querySelector('.faq-container');
const answer = document.querySelector('.faq-answer');
const question = document.querySelector('.faq-question');
const iconDown = document.querySelector('.faq-icon')

faqContainer.addEventListener('click', () => {
    answer.classList.toggle('hidden');
    question.classList.toggle("border-b");
    iconDown.classList.toggle('fa-chevron-up');
})