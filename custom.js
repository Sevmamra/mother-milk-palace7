// Mother Milk Palace - custom.js
// Animations, interactions, and dummy UI logic

// 1. Loader Animation
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hide");
    }, 900); // Loader visible for some time for effect
});

// 2. Navbar Active Link Highlight
function setActiveNav() {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.classList.remove('active');
        if (window.location.hash && link.getAttribute('href') === window.location.hash) {
            link.classList.add('active');
        }
    });
}
window.addEventListener('hashchange', setActiveNav);
setActiveNav();

// 3. GSAP Animations on Load
window.addEventListener("DOMContentLoaded", () => {
    // Hero Banner Animation
    gsap.from(".hero-content", {
        opacity: 0,
        y: 100,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
    });
    gsap.from(".hero-image img", {
        opacity: 0,
        scale: 0.85,
        duration: 1.2,
        delay: 0.45,
        ease: "back.out(1.6)"
    });
    // Category Cards Animation
    gsap.from(".category-card", {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 1,
        delay: 0.5,
        ease: "power2.out"
    });
    // Offer Cards Animation
    gsap.from(".offer-card", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 1,
        delay: 0.8,
        ease: "power2.out"
    });
});

// 4. Categories Card Hover Animation (bounce)
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.08, duration: 0.21, y: -10, ease: "back.out(2)" });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.19, y: 0, ease: "power2.out" });
    });
});

// 5. Offer Card Hover Animation (rotate)
document.querySelectorAll('.offer-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { rotateZ: 3, scale: 1.04, duration: 0.16, ease: "back.out(2)" });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { rotateZ: 0, scale: 1, duration: 0.13, ease: "power2.out" });
    });
});

// 6. Cart Sidebar Logic (dummy)
const cartBtn = document.querySelector('.cart-btn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCartBtn = document.querySelector('.close-cart');
const overlay = document.getElementById('overlay');

cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    gsap.from(cartSidebar, { x: 400, duration: 0.45, ease: "power3.out" });
});
closeCartBtn.addEventListener('click', closeCartSidebar);
overlay.addEventListener('click', () => {
    closeCartSidebar();
    closeLoginModal();
});

function closeCartSidebar() {
    cartSidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// 7. Add to Cart Animation (dummy, just UI)
document.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        let cartCount = document.querySelector('.cart-count');
        let count = parseInt(cartCount.textContent) || 0;
        cartCount.textContent = count + 1;

        // Floating animation effect
        gsap.fromTo(
            cartCount,
            { scale: 1.4, backgroundColor: "#32c5ff" },
            { scale: 1, backgroundColor: "#b621fe", duration: 0.45, ease: "elastic.out(1, 0.6)" }
        );
        // Show item in cart (dummy)
        const cartItems = document.querySelector('.cart-items');
        cartItems.innerHTML = `
            <div class="cart-item">
                <span><i class="fa fa-shopping-basket"></i> Dummy Product</span>
                <span>₹99</span>
            </div>
        `;
        document.querySelector('.cart-empty').style.display = "none";
        // Dummy total
        document.querySelector('.cart-total').textContent = "Total: ₹99";
    });
});

// 8. Login Modal Logic
const loginBtn = document.querySelector('.login-btn');
const loginModal = document.getElementById('loginModal');
const closeLoginBtn = document.querySelector('.close-login');

loginBtn.addEventListener('click', () => {
    loginModal.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    gsap.from(loginModal.querySelector('.login-content'), { scale: 0.85, opacity: 0, duration: 0.33, ease: "back.out(1.7)" });
});
closeLoginBtn.addEventListener('click', closeLoginModal);

function closeLoginModal() {
    loginModal.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Dummy login form prevent
document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    closeLoginModal();
    // Dummy login effect
    gsap.to('.login-btn', { backgroundColor: "#32c5ff", color: "#fff", duration: 0.3, yoyo: true, repeat: 1 });
});

// 9. Scroll To Top Button
const scrollBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});
scrollBtn.addEventListener('click', () => {
    gsap.to(window, { scrollTo: 0, duration: 0.7, ease: "power2.inOut" });
});

// 10. Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash) {
            e.preventDefault();
            gsap.to(window, {
                scrollTo: this.hash,
                duration: 0.7,
                ease: "power2.inOut"
            });
        }
    });
});

// 11. Newsletter & Contact Form dummy
document.querySelector('.newsletter-form').addEventListener('submit', e => {
    e.preventDefault();
    let email = e.target.querySelector('input[type="email"]').value;
    e.target.reset();
    gsap.to('.newsletter-content', {backgroundColor: "#32c5ff", color: "#fff", duration: 0.3, yoyo: true, repeat: 1});
    setTimeout(() => alert("Thank you for subscribing, " + email + " (dummy)!"), 400);
});
document.querySelector('.contact-form').addEventListener('submit', e => {
    e.preventDefault();
    e.target.reset();
    gsap.to('.contact-form', {backgroundColor: "#b621fe", color: "#fff", duration: 0.3, yoyo: true, repeat: 1});
    setTimeout(() => alert("Your message has been sent! (dummy)"), 400);
});

// 12. Animate About Section on scroll
function animateAboutSection() {
    const about = document.querySelector('.about-section');
    if (!about) return;
    let revealed = false;
    window.addEventListener('scroll', () => {
        let rect = about.getBoundingClientRect();
        if (!revealed && rect.top < window.innerHeight - 120) {
            gsap.from(".about-image img", { x: -60, opacity: 0, duration: 1, ease: "power3.out" });
            gsap.from(".about-text", { x: 60, opacity: 0, duration: 1, delay: 0.2, ease: "power3.out" });
            revealed = true;
        }
    });
}
animateAboutSection();

// 13. Animate Products on scroll
function animateProductsSection() {
    const products = document.querySelector('.products-section');
    if (!products) return;
    let revealed = false;
    window.addEventListener('scroll', () => {
        let rect = products.getBoundingClientRect();
        if (!revealed && rect.top < window.innerHeight - 120) {
            gsap.from(".product-card", {
                y: 40,
                opacity: 0,
                stagger: 0.10,
                duration: 1,
                ease: "power2.out"
            });
            revealed = true;
        }
    });
}
animateProductsSection();

// 14. Animate Offers Section on scroll
function animateOffersSection() {
    const offers = document.querySelector('.offers-section');
    if (!offers) return;
    let revealed = false;
    window.addEventListener('scroll', () => {
        let rect = offers.getBoundingClientRect();
        if (!revealed && rect.top < window.innerHeight - 120) {
            gsap.from(".offer-card", {
                y: 40,
                opacity: 0,
                stagger: 0.14,
                duration: 1,
                ease: "power2.out"
            });
            revealed = true;
        }
    });
}
animateOffersSection();

// 15. Animate Newsletter Section on scroll
function animateNewsletterSection() {
    const news = document.querySelector('.newsletter-section');
    if (!news) return;
    let revealed = false;
    window.addEventListener('scroll', () => {
        let rect = news.getBoundingClientRect();
        if (!revealed && rect.top < window.innerHeight - 100) {
            gsap.from(".newsletter-content", { scale: 0.9, opacity: 0, duration: 1, ease: "power3.out" });
            revealed = true;
        }
    });
}
animateNewsletterSection();

// 16. Animate Contact Section on scroll
function animateContactSection() {
    const contact = document.querySelector('.contact-section');
    if (!contact) return;
    let revealed = false;
    window.addEventListener('scroll', () => {
        let rect = contact.getBoundingClientRect();
        if (!revealed && rect.top < window.innerHeight - 100) {
            gsap.from(".contact-form", { x: -60, opacity: 0, duration: 1, ease: "power3.out" });
            gsap.from(".contact-info", { x: 60, opacity: 0, duration: 1, delay: 0.18, ease: "power3.out" });
            revealed = true;
        }
    });
}
animateContactSection();

// 17. Footer Animation on load
gsap.from("footer", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 1,
    ease: "power3.out"
});

// 18. Dummy Checkout Button
document.querySelector('.checkout-btn').addEventListener('click', e => {
    e.preventDefault();
    closeCartSidebar();
    setTimeout(() => alert("Thank you for shopping with us! (dummy)"), 600);
});

// END OF custom.js - More utility scripts and effect details can be added as needed for 2000+ lines.
