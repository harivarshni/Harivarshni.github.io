document.addEventListener('DOMContentLoaded', () => {

    // --- Loading Animation Logic ---
    const loader = document.querySelector('.loader');
    const content = document.querySelector('#content');

    // Use window.onload to ensure all assets (like images) are loaded
    window.onload = () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            content.style.display = 'block';
        }, 500);
    };


    // --- Scroll Animation Logic ---
    // Select all elements that should be animated on scroll
    const animatedElements = document.querySelectorAll('.scroll-animate');

    // Create an observer with enhanced options
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
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully visible
    });

    // Observe each animated element
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // --- Enhanced Interactions ---
    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;

        if (hero && scrolled < hero.offsetHeight) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add smooth scroll behavior for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add skill tags animation on scroll
    const skillTags = document.querySelectorAll('.skill-tag');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.6s ease-out forwards`;
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillTags.forEach(tag => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(20px)';
        skillObserver.observe(tag);
    });

    // Add navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(18, 18, 18, 0.95)';
        } else {
            navbar.style.background = 'rgba(18, 18, 18, 0.8)';
        }
    });

});