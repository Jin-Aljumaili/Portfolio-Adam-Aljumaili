// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select elements to animate
    const fadeIns = document.querySelectorAll('.fade-in');
    const slideIn = document.querySelector('.slide-in');

    // Delay animation timing for each element
    fadeIns.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 500); // Delay each fade-in by 500ms
    });

    // Slide in the social links with delay
    setTimeout(() => {
        slideIn.classList.add('visible');
    }, fadeIns.length * 500); // Slide in after fade-ins are done
});