// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');

    mobileMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');

        if (mobileMenu.classList.contains('open')) {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } else {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Initialize ScrollReveal
    ScrollReveal().reveal('.header_text', { delay: 200, origin: 'left' });
    ScrollReveal().reveal('.header_image', { delay: 400, origin: 'right' });
    ScrollReveal().reveal('.deals_card', { delay: 200, interval: 100 });
    ScrollReveal().reveal('.about_image', { delay: 200, origin: 'left' });
    ScrollReveal().reveal('.about_card', { delay: 300, interval: 100, origin: 'right' });
    ScrollReveal().reveal('.feature_card', { delay: 200, interval: 100 });
    ScrollReveal().reveal('.team_card', { delay: 200, interval: 100 });
    ScrollReveal().reveal('.cta_content', { delay: 200 });
    ScrollReveal().reveal('.contact_form', { delay: 200, origin: 'left' });
    ScrollReveal().reveal('.contact_info', { delay: 400, origin: 'right' });
});

// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Switch between Login and Register Modals
function switchToRegister() {
    closeModal('loginModal');
    openModal('registerModal');
}

function switchToLogin() {
    closeModal('registerModal');
    openModal('loginModal');
}

// Form Handlers
function handleLogin(event) {
    event.preventDefault();

    // Get form data
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const remember = document.querySelector('input[name="remember"]').checked;

    // Here you would typically send the data to your server
    console.log('Login attempt:', { email, password, remember });

    // For demo purposes, just show a success message
    alert('Login successful! Redirecting to dashboard...');
    closeModal('loginModal');

    // Reset form
    document.getElementById('loginForm').reset();
}

function handleRegister(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.querySelector('input[name="terms"]').checked;

    // Validate passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Here you would typically send the data to your server
    console.log('Registration attempt:', { name, email, phone, password, terms });

    // For demo purposes, just show a success message
    alert('Registration successful! Please check your email to verify your account.');
    closeModal('registerModal');

    // Reset form
    document.getElementById('registerForm').reset();
}

function handleContact(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    // Here you would typically send the data to your server
    console.log('Contact form submission:', { name, email, message });

    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'flex';

    // Reset form
    document.getElementById('contactForm').reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
}

function handleOrder(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('orderName').value;
    const email = document.getElementById('orderEmail').value;
    const phone = document.getElementById('orderPhone').value;
    const address = document.getElementById('orderAddress').value;
    const quantity = document.getElementById('orderQuantity').value;

    // Calculate total
    const prices = {
        '1': 2999,
        '2': 5499,
        '3': 7999
    };
    const total = prices[quantity];

    // Here you would typically send the data to your server
    console.log('Order submission:', { name, email, phone, address, quantity, total });

    // Close order modal and show success modal
    closeModal('orderModal');
    openModal('successModal');

    // Reset form
    document.getElementById('orderForm').reset();
}

// Update total when quantity changes
function updateTotal() {
    const quantity = document.getElementById('orderQuantity').value;
    const prices = {
        '1': 2999,
        '2': 5499,
        '3': 7999
    };

    const subtotal = prices[quantity];
    document.getElementById('subtotal').textContent = `₹${subtotal}`;
    document.getElementById('total').textContent = `₹${subtotal}`;
}

// Placeholder functions for social login
function loginWithGoogle() {
    console.log('Google login initiated');
    // In a real application, this would integrate with Google's OAuth API
    alert('Google login would be implemented here');
}

function registerWithGoogle() {
    console.log('Google registration initiated');
    // In a real application, this would integrate with Google's OAuth API
    alert('Google registration would be implemented here');
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}