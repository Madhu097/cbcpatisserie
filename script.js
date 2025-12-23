// ===================================
// TRENDY INTERACTIVE EFFECTS
// ===================================

// Custom Cursor Trail Effect
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Smooth Page Load Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Enhanced Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero, .hero-content');

    parallaxElements.forEach(el => {
        if (scrolled < window.innerHeight) {
            el.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
});

// ===================================
// Navigation & Mobile Menu
// ===================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ===================================
// Menu Tabs
// ===================================
const menuTabs = document.querySelectorAll('.menu-tab');
const menuCategories = document.querySelectorAll('.menu-category');

menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const category = tab.getAttribute('data-category');

        // Remove active class from all tabs and categories
        menuTabs.forEach(t => t.classList.remove('active'));
        menuCategories.forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab and corresponding category
        tab.classList.add('active');
        document.getElementById(category).classList.add('active');
    });
});

// ===================================
// Gallery Generation
// ===================================
const galleryGrid = document.getElementById('galleryGrid');

// Gallery images data
const galleryImages = [
    {
        title: 'Artisan Bread & Croissants',
        category: 'bakery',
        image: 'assets/gallery/bakery_quality_1.png'
    },
    {
        title: 'French Pastries & Macarons',
        category: 'desserts',
        image: 'assets/gallery/pastries_quality_2.png'
    },
    {
        title: 'Gourmet Cupcakes',
        category: 'cakes',
        image: 'assets/gallery/cupcakes_quality_3.png'
    },
    {
        title: 'Cozy Café Ambience',
        category: 'ambience',
        image: 'assets/gallery/ambience_quality_4.png'
    },
    {
        title: 'Premium Coffee',
        category: 'beverages',
        image: 'assets/gallery/bakery_quality_1.png' // Reusing for now
    },
    {
        title: 'Fresh Baked Goods',
        category: 'bakery',
        image: 'assets/gallery/pastries_quality_2.png' // Reusing for now
    }
];

// Generate gallery items
function generateGallery() {
    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.animationDelay = `${index * 0.1}s`;

        galleryItem.innerHTML = `
            <img src="${image.image}" alt="${image.title}" style="width: 100%; height: 100%; object-fit: cover;">
            <div class="gallery-overlay"></div>
        `;

        galleryGrid.appendChild(galleryItem);
    });
}

// Helper function to adjust color brightness
function adjustColor(color, amount) {
    const num = parseInt(color.replace('#', ''), 16);
    const r = Math.min(255, Math.max(0, (num >> 16) + amount));
    const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
    const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

// Initialize gallery
generateGallery();

// ===================================
// Scroll Reveal Animation
// ===================================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.scroll-reveal');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add scroll-reveal class to elements
document.addEventListener('DOMContentLoaded', () => {
    const elementsToReveal = document.querySelectorAll('.feature-card, .menu-item, .review-card, .contact-card, .info-card');
    elementsToReveal.forEach(el => el.classList.add('scroll-reveal'));
    revealOnScroll(); // Initial check
});

// ===================================
// Back to Top Button
// ===================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Parallax Effect for Hero Section
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===================================
// Counter Animation for Stats (Optional)
// ===================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ===================================
// Loading Animation
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===================================
// Menu Item Hover Effects
// ===================================
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    item.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// Gallery Item Click Handler
// ===================================
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function () {
        // Add lightbox functionality here if needed
        console.log('Gallery item clicked');
    });
});

// ===================================
// Form Validation (if contact form is added)
// ===================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===================================
// Dynamic Year in Footer
// ===================================
const currentYear = new Date().getFullYear();
const copyrightText = document.querySelector('.footer-copyright');
if (copyrightText) {
    copyrightText.textContent = `© ${currentYear} CBC Patisserie. All rights reserved.`;
}

// ===================================
// Intersection Observer for Advanced Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .menu-item, .review-card, .gallery-item');
    animatedElements.forEach(el => observer.observe(el));
});

// ===================================
// Lazy Loading Images (when real images are added)
// ===================================
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// ===================================
// Performance Optimization
// ===================================
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    updateActiveNavLink();
    revealOnScroll();
}));

// ===================================
// Console Welcome Message
// ===================================
console.log('%c🍰 CBC Patisserie Website', 'font-size: 20px; font-weight: bold; color: #8B4513;');
console.log('%cBaked with Love, Brewed with Care', 'font-size: 14px; font-style: italic; color: #D4A574;');
console.log('%cWebsite developed with ❤️', 'font-size: 12px; color: #6B3410;');

// ===================================
// Google Reviews Integration (Placeholder)
// ===================================
// This function would fetch real Google reviews via API
async function fetchGoogleReviews() {
    // Placeholder for Google Reviews API integration
    // You would need to implement this with your Google Places API key
    console.log('Google Reviews integration ready');
}

// ===================================
// WhatsApp Click-to-Chat
// ===================================
function initWhatsAppChat() {
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Track WhatsApp click event (analytics)
            console.log('WhatsApp chat initiated');
        });
    });
}

initWhatsAppChat();

// ===================================
// Accessibility Enhancements
// ===================================
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Focus trap for mobile menu
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// ===================================
// Initialize All Features
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('CBC Patisserie website loaded successfully! ☕🍰');

    // Add any initialization code here
    fetchGoogleReviews();

    // Add entrance animations
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// Visuals Section - Video Reels
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const visualsFilters = document.querySelectorAll('.visuals-filter');
    const visualsReels = document.querySelectorAll('.visuals-reel');
    const reelsContainer = document.querySelector('.visuals-reels');
    const navLeft = document.querySelector('.visuals-nav-left');
    const navRight = document.querySelector('.visuals-nav-right');

    // Detect if device is mobile
    const isMobile = () => window.innerWidth <= 968;

    // Filter functionality
    visualsFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            const filterValue = filter.getAttribute('data-filter');

            // Update active filter
            visualsFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');

            // Filter reels
            visualsReels.forEach(reel => {
                const reelCategory = reel.getAttribute('data-category');

                if (filterValue === 'all' || reelCategory === filterValue) {
                    reel.style.display = 'block';
                    setTimeout(() => {
                        reel.style.opacity = '1';
                        reel.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    reel.style.opacity = '0';
                    reel.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        reel.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Navigation buttons
    if (navLeft && reelsContainer) {
        navLeft.addEventListener('click', () => {
            reelsContainer.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });
    }

    if (navRight && reelsContainer) {
        navRight.addEventListener('click', () => {
            reelsContainer.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
    }

    // Video play/pause functionality
    visualsReels.forEach(reel => {
        const video = reel.querySelector('.visuals-video');
        const playBtn = reel.querySelector('.visuals-play-btn');

        // Play button click (for mobile and desktop)
        if (playBtn) {
            playBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (video.paused) {
                    video.play();
                    reel.classList.add('playing');
                } else {
                    video.pause();
                    reel.classList.remove('playing');
                }
            });
        }

        // Desktop: Hover to play
        if (!isMobile()) {
            reel.addEventListener('mouseenter', () => {
                video.play();
                reel.classList.add('playing');
            });

            reel.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0; // Reset to beginning
                reel.classList.remove('playing');
            });
        }

        // Video ended event
        video.addEventListener('ended', () => {
            reel.classList.remove('playing');
        });
    });

    // Update behavior on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Pause all videos and reset state on resize
            visualsReels.forEach(reel => {
                const video = reel.querySelector('.visuals-video');
                video.pause();
                video.currentTime = 0;
                reel.classList.remove('playing');
            });
        }, 250);
    });
});
