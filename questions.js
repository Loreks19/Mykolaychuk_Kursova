document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq-item");

    faqs.forEach((faqItem) => {
        faqItem.addEventListener("click", () => {
            faqItem.classList.toggle("active");
        });
    });
});