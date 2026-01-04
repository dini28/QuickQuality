const adulterantsData = [
    {
        icon: 'ri-water-percent-line',
        className: 'urea',
        name: 'Urea',
        riskLevel: 'High Risk',
        riskClass: 'high',
        description: 'Artificially boosts protein readings. Prolonged exposure leads to severe kidney dysfunction and tissue damage.'
    },
    {
        icon: 'ri-drop-line',
        className: 'water',
        name: 'Contaminated Water',
        riskLevel: 'Nutrient Loss',
        riskClass: 'med',
        description: 'The most common adulterant. Dilutes essential nutrients and often introduces harmful bacteria into the supply.'
    },
    {
        icon: 'ri-contrast-drop-line',
        className: 'detergent',
        name: 'Detergents',
        riskLevel: 'Critical',
        riskClass: 'critical',
        description: 'Used to emulsify added oils. Contains surfactants that cause gastrointestinal inflammation and long-term toxicity.'
    },
    {
        icon: 'ri-flask-line',
        className: 'starch',
        name: 'Starch',
        riskLevel: 'Low Risk',
        riskClass: 'med',
        description: 'Used to increase thickness and "richness." While less toxic, it significantly reduces the natural nutritional value.'
    },
    {
        icon: 'ri-medicine-bottle-line',
        className: 'formalin',
        name: 'Formalin',
        riskLevel: 'Carcinogen',
        riskClass: 'critical',
        description: 'A preservative used in morgues. Highly toxic and classified as a potent carcinogen if ingested over time.'
    },
    {
        icon: 'ri-test-tube-line',
        className: 'peroxide',
        name: 'Hydrogen Peroxide',
        riskLevel: 'High Risk',
        riskClass: 'high',
        description: 'Masks spoilage by killing bacteria. Causes internal oxidative stress and irritation to the digestive tract.'
    }
];

const featuresData = [
    {
        icon: 'ri-time-line',
        colorClass: 'icon_green',
        title: 'Instant Results',
        description: 'Get forensic-level milk purity analysis and adulterant detection in under 30 seconds.'
    },
    {
        icon: 'ri-smartphone-line',
        colorClass: 'icon_green',
        title: 'Smart Connectivity',
        description: 'Syncs wirelessly with the Quick Quality app to track historical data and purity trends.'
    },
    {
        icon: 'ri-shield-check-line',
        colorClass: 'icon_green',
        title: '99.9% Accuracy',
        description: ' calibrated to detect trace amounts of urea, detergent, and other harmful chemicals.'
    },
    {
        icon: 'ri-hand-coin-line',
        colorClass: 'icon_green',
        title: 'Cost Effective',
        description: 'One-time investment for a lifetime of safety. Save on potential medical costs.'
    },
    {
        icon: 'ri-flask-line',
        colorClass: 'icon_green',
        title: 'Lab-Grade Sensors',
        description: 'Miniaturized spectral analysis technology brings the laboratory to your kitchen.'
    },
    {
        icon: 'ri-customer-service-2-line',
        colorClass: 'icon_green',
        title: 'Expert Support',
        description: '24/7 access to dairy experts and technical support for result interpretation.'
    },
    {
        icon: 'ri-battery-2-charge-line',
        colorClass: 'icon_green',
        title: 'Long Battery Life',
        description: 'Rechargeable battery lasts up to 30 days on a single charge with daily testing use.'
    },
    {
        icon: 'ri-leaf-line',
        colorClass: 'icon_green',
        title: 'Food Safe Materials',
        description: 'Constructed with FDA-approved, non-toxic materials safe for contact with consumables.'
    }
];

const teamData = [
    {
        name: 'Manish Sahu',
        role: 'Hardware Engineer',
        roleData: 'Hardware',
        image: 'assets/images/manish.jpg'
    },
    {
        name: 'Mahak Rahi',
        role: 'UI/UX Designer',
        roleData: 'Design',
        image: 'assets/images/mahak.jpg'
    },
    {
        name: 'Dipesh Soni',
        role: 'Web Developer',
        roleData: 'Web Dev',
        image: 'assets/images/dipesh.jpg'
    },
    {
        name: 'Shubham Vaishnav',
        role: 'Hardware Engineer',
        roleData: 'Hardware',
        image: 'assets/images/shubham.jpg'
    },
    {
        name: 'Manish Sen',
        role: 'Web Developer',
        roleData: 'Web Dev',
        image: 'assets/images/sen.jpg'
    },
    {
        name: 'Amrit Jha',
        role: 'Hardware Engineer',
        roleData: 'Hardware',
        image: 'assets/images/amrit.jpg'
    }
];

const App = {
    init() {
        this.renderAll();

        // Wait for DOM to be fully ready before setting up interactions
        requestAnimationFrame(() => {
            this.setupObservers();
            this.setupEventListeners();
            this.setupMobileMenu();
            this.setupScrollSpy();
            this.setupForms();
            this.registerServiceWorker();
            this.injectStyles();
        });
    },

    renderAll() {
        this.renderAdulterants();
        this.renderFeatures();
        this.renderTeam();
    },

    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('ServiceWorker registration successful');
                    })
                    .catch(err => {
                        console.log('ServiceWorker registration failed: ', err);
                    });
            });
        }
    },

    setupForms() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = contactForm.querySelector('button');
                const originalText = btn.innerHTML;

                btn.innerHTML = '<i class="ri-loader-4-line spin"></i> Sending...';
                btn.disabled = true;

                // In production, replace this with actual API call
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    contactForm.reset();

                    const toast = document.getElementById('successMessage');
                    if (toast) {
                        toast.style.display = 'flex';
                        setTimeout(() => {
                            toast.style.display = 'none';
                        }, 5000);
                    }
                }, 1500);
            });
        }

        const orderForm = document.getElementById('orderForm');
        if (orderForm) {
            orderForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = orderForm.querySelector('.place_order_btn');
                const originalText = btn.innerHTML;

                btn.innerHTML = '<i class="ri-loader-4-line spin"></i> Processing...';
                btn.disabled = true;

                setTimeout(() => {
                    btn.innerHTML = '<i class="ri-check-line"></i> Order Confirmed!';
                    btn.style.background = '#4CAF50';

                    setTimeout(() => {
                        window.closeModal('orderModal');
                        orderForm.reset();
                        btn.innerHTML = originalText;
                        btn.style.background = '';
                        btn.disabled = false;
                        alert('Order placed successfully! Check your email for details.');
                    }, 2000);
                }, 2000);
            });
        }
    },

    renderAdulterants() {
        const container = document.querySelector('.hazards_grid');
        if (!container) return;

        container.innerHTML = adulterantsData.map(item => `
            <div class="hazard_card scroll-reveal">
                <div class="hazard_icon ${item.className}"><i class="${item.icon}"></i></div>
                <div class="hazard_meta">
                    <h4>${item.name}</h4>
                    <span class="risk_tag ${item.riskClass}">${item.riskLevel}</span>
                </div>
                <p>${item.description}</p>
            </div>
        `).join('');
    },

    renderFeatures() {
        const container = document.querySelector('.features_bento_grid');
        if (!container) return;

        container.innerHTML = featuresData.map(item => `
            <div class="feature_box ${item.highlight ? 'highlight_box' : ''} scroll-reveal">
                <div class="feature_icon_wrapper ${item.colorClass}">
                    <i class="${item.icon}"></i>
                </div>
                <div class="feature_info">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');
    },

    renderTeam() {
        const container = document.querySelector('.team_grid');
        if (!container) return;

        container.innerHTML = teamData.map(item => `
            <div class="team_card scroll-reveal">
                <div class="team_image_wrapper">
                    <img src="${item.image}" alt="${item.name}" loading="lazy" />
                </div>
                <div class="team_info" data-role="${item.roleData}">
                    <h4>${item.name}</h4>
                    <p>${item.role}</p>
                    <div class="team_social">
                        <a href="#" aria-label="LinkedIn"><i class="ri-linkedin-fill"></i></a>
                        <a href="#" aria-label="Instagram"><i class="ri-instagram-fill"></i></a>
                    </div>
                </div>
            </div>
        `).join('');
    },

    setupObservers() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.scroll-reveal');
        if (elements.length > 0) {
            elements.forEach((el, index) => {
                // Stagger the animations so they don't all happen at once
                el.style.transitionDelay = `${(index % 3) * 0.1}s`;
                observer.observe(el);
            });
        }

        document.querySelectorAll('.section_header_group').forEach(el => observer.observe(el));
    },

    setupEventListeners() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            window.addEventListener('scroll', () => {
                navbar.classList.toggle('scrolled', window.scrollY > 50);
            });
        }

        document.addEventListener('click', (e) => {
            const link = e.target.closest('.team_social a');
            if (link) {
                e.preventDefault();
                this.createRipple(e, link);
            }
        });
    },

    setupMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const navOverlay = document.getElementById('nav-overlay');
        const navClose = document.getElementById('nav-close');
        const navLinks = document.querySelectorAll('.nav-link');

        if (!hamburger || !navMenu) return;

        const toggleMenu = () => {
            const isActive = hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            navOverlay.classList.toggle('active');
            document.body.style.overflow = isActive ? 'hidden' : '';
        };

        hamburger.addEventListener('click', toggleMenu);
        if (navClose) navClose.addEventListener('click', toggleMenu);
        if (navOverlay) navOverlay.addEventListener('click', toggleMenu);

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) toggleMenu();
            });
        });
    },

    setupScrollSpy() {
        const sections = document.querySelectorAll('section[id], header[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            const scrollValues = window.scrollY;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                // Adjust for navbar height to highlight links at the right time
                if (scrollValues >= (sectionTop - 150)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    },

    createRipple(e, element) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        ripple.classList.add('ripple-effect');

        element.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    },

    injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .ripple-effect {
                position: absolute;
                background: rgba(255, 255, 255, 0.6);
                border-radius: 50%;
                pointer-events: none;
                transform: scale(0);
                animation: ripple 0.6s linear;
            }
            @keyframes ripple {
                to { transform: scale(4); opacity: 0; }
            }
            .scroll-reveal {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            .scroll-reveal.visible {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());

window.openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        void modal.offsetWidth; // Force browser to recalculate layout
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

window.closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    }
};

window.switchToRegister = () => {
    window.closeModal('loginModal');
    setTimeout(() => {
        window.openModal('registerModal');
    }, 300);
};

window.switchToLogin = () => {
    window.closeModal('registerModal');
    setTimeout(() => {
        window.openModal('loginModal');
    }, 300);
};