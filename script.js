// Parallax scrolling effect for hero background and zoom effect on hero image
window.addEventListener('scroll', function() {
    const hero = document.getElementById('hero');
    const heroImage = document.querySelector('.hero-image');
    const scrollPosition = window.pageYOffset;
    const parallaxSpeed = 0.5; // Adjust speed as needed

    // Apply parallax effect to background position
    hero.style.backgroundPositionY = -(scrollPosition * parallaxSpeed) + 'px';

    // Zoom effect on hero image
    const zoomFactor = 1 + (scrollPosition * 0.0005); // Subtle zoom
    heroImage.style.transform = `scale(${zoomFactor})`;
});

// Particle animation (existing code)
const particlesContainer = document.getElementById('particles');
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particlesContainer.appendChild(particle);
}

// Image upload functionality (if needed for future use)
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const hero = document.getElementById('hero');
            hero.style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
    }
}

// Scroll animations using Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Typing animation for description
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Observe description and cards container
document.addEventListener('DOMContentLoaded', () => {
    const description = document.querySelector('.description');
    const cardsContainer = document.querySelector('.cards-container');
    const portfolioSection = document.querySelector('.portfolio-section');

    if (description) {
        observer.observe(description);
        // Start typing animation after description is visible
        const descObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const text = entry.target.querySelector('p').textContent;
                    typeWriter(entry.target.querySelector('p'), text);
                    descObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        descObserver.observe(description);
    }
    if (cardsContainer) observer.observe(cardsContainer);
    if (portfolioSection) observer.observe(portfolioSection);
});

// Ripple effect for CTA buttons
document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            this.appendChild(ripple);

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
            ripple.style.top = e.clientY - rect.top - size / 2 + 'px';

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Uncomment below if you want to add image upload functionality
// document.getElementById('imageUpload').addEventListener('change', handleImageUpload);
