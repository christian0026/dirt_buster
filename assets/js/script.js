// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Form validation for booking page
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            let isValid = true;
            
            // Validate required fields
            const requiredFields = bookingForm.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });
            
            // Validate email format
            const emailField = bookingForm.querySelector('input[type="email"]');
            if (emailField && !/^\S+@\S+\.\S+$/.test(emailField.value)) {
                isValid = false;
                emailField.classList.add('is-invalid');
            }
            
            if (!isValid) {
                e.preventDefault();
                e.stopPropagation();
            }
            
            bookingForm.classList.add('was-validated');
        });
    }

    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            let isValid = true;
            
            // Validate required fields
            const requiredFields = contactForm.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });
            
            // Validate email format
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && !/^\S+@\S+\.\S+$/.test(emailField.value)) {
                isValid = false;
                emailField.classList.add('is-invalid');
            }
            
            if (!isValid) {
                e.preventDefault();
                e.stopPropagation();
            }
            
            contactForm.classList.add('was-validated');
        });
    }

    // Service price calculator (for booking page)
    const serviceSelect = document.getElementById('serviceType');
    const durationSelect = document.getElementById('serviceDuration');
    const frequencySelect = document.getElementById('serviceFrequency');
    const totalPriceElement = document.getElementById('totalPrice');
    
    if (serviceSelect && durationSelect && frequencySelect && totalPriceElement) {
        // Price calculation function
        function calculatePrice() {
            const servicePrice = parseFloat(serviceSelect.value) || 0;
            const durationMultiplier = parseFloat(durationSelect.value) || 1;
            const frequencyDiscount = parseFloat(frequencySelect.value) || 1;
            
            const total = servicePrice * durationMultiplier * frequencyDiscount;
            totalPriceElement.textContent = '₱' + total.toFixed(2);
        }
        
        // Add event listeners
        serviceSelect.addEventListener('change', calculatePrice);
        durationSelect.addEventListener('change', calculatePrice);
        frequencySelect.addEventListener('change', calculatePrice);
        
        // Calculate initial price
        calculatePrice();
    }

    // Initialize carousels
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        new bootstrap.Carousel(carousel, {
            interval: 5000,
            pause: 'hover'
        });
    });
});