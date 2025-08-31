document.addEventListener('DOMContentLoaded', () => {

    // --- Loading Animation Logic ---
    const loader = document.querySelector('.loader');
    const content = document.querySelector('#content');

    // Use window.onload to ensure all assets (like images) are loaded
    window.onload = () => {
        loader.classList.add('hidden');
        content.style.display = 'block';
    };


    // --- Scroll Animation Logic ---
    // Select all elements that should be animated on scroll
    const animatedElements = document.querySelectorAll('.scroll-animate');

    // Create an observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing the element once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe each animated element
    animatedElements.forEach(el => {
        observer.observe(el);
    });

});