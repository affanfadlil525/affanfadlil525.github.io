/**
 * Kementerian Haji & Umrah Kab. Kutai Barat
 * Final Refined Script
 */

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

/* --- VARIABLES --- */
:root {
    --gold: #c5a059;
    --gold-dark: #a68545;
    --dark: #1a1a1a;
    --white: #ffffff;
    --light-bg: #f8f9fa;
    --transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Plus Jakarta Sans', sans-serif; }
html { scroll-behavior: smooth; }
body { background: var(--white); color: var(--dark); overflow-x: hidden; }

/* --- NAVBAR --- */
nav { position: fixed; top: 0; width: 100%; z-index: 1000; padding: 20px 0; transition: var(--transition); }
nav.scrolled { background: rgba(255, 255, 255, 0.98); padding: 12px 0; box-shadow: 0 5px 20px rgba(0,0,0,0.1); backdrop-filter: blur(10px); }

.nav-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 20px; }
.logo-wrapper { display: flex; align-items: center; gap: 10px; text-decoration: none; flex-shrink: 1; }
.logo-img { height: 42px; width: auto; }
.logo-text { color: var(--white); font-weight: 800; text-transform: uppercase; line-height: 1.1; font-size: 13px; letter-spacing: 0.5px; }
.logo-text span { display: block; color: var(--gold); font-size: 10px; font-weight: 400; }
nav.scrolled .logo-text { color: var(--dark); }

.nav-menu { display: flex; align-items: center; }
.nav-menu a { color: var(--white); text-decoration: none; margin-left: 20px; font-weight: 600; font-size: 13px; transition: 0.3s; }
nav.scrolled .nav-menu a { color: var(--dark); }
.nav-highlight { background: var(--gold); color: white !important; padding: 6px 15px; border-radius: 5px; }

/* --- DROPDOWN PC --- */
.dropdown { position: relative; display: inline-block; margin-left: 20px; }
.dropbtn i { font-size: 10px; margin-left: 5px; }
.dropdown-content {
    display: none; position: absolute; background-color: white; min-width: 180px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; top: 30px;
}
.dropdown-content a { color: var(--dark) !important; padding: 12px 16px; margin: 0; display: block; border-bottom: 1px solid #f0f0f0; }
.dropdown:hover .dropdown-content { display: block; }
.dropdown-content a:hover { background: #f9f9f9; color: var(--gold) !important; }

/* --- GALLERY SCROLLER --- */
.gallery-scroller-wrapper { width: 100%; overflow-x: auto; padding: 20px 0 40px; scrollbar-width: none; cursor: grab; }
.gallery-scroller-wrapper::-webkit-scrollbar { display: none; }
.gallery-track { display: flex; gap: 25px; padding-left: 50px; }
.gallery-card { flex: 0 0 350px; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); transition: 0.3s; }
.gallery-card:hover { transform: translateY(-10px); }
.gallery-card img { width: 100%; height: 220px; object-fit: cover; }
.gallery-info { padding: 20px; }
.gallery-info h3 { font-size: 18px; margin-bottom: 10px; }
.gallery-info p { font-size: 14px; color: #666; }

/* --- COMMON SECTIONS --- */
.hero { position: relative; height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; color: var(--white); background: url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop') center/cover fixed; }
.hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); }
.hero-content { position: relative; z-index: 2; max-width: 850px; padding: 20px; }
.hero h1 { font-size: clamp(2rem, 5vw, 4rem); font-weight: 800; margin-bottom: 20px; }
.hero-action-wrapper { display: flex; align-items: center; justify-content: center; gap: 20px; margin-top: 30px; }
.action-card { display: flex; align-items: center; padding: 15px 20px; border-radius: 15px; text-decoration: none; min-width: 260px; text-align: left; transition: 0.3s; color: white; }
.action-card.primary { background: var(--gold); }
.action-card.secondary { background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); }
.action-card:hover { transform: translateY(-5px); }
.action-icon { width: 40px; height: 40px; border-radius: 10px; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 18px; }

.section { padding: 80px 20px; }
.bg-light { background: #f4f6f9; }
.container { max-width: 1100px; margin: 0 auto; }
.section-header { text-align: center; margin-bottom: 50px; }
.card { background: white; padding: 40px; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.card-inner-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
.list-check li { list-style: none; margin-bottom: 12px; display: flex; align-items: center; gap: 15px; }
.list-check i { color: #27ae60; }

.contact-section { background: #111; color: white; }
.contact-card { background: white; padding: 30px; border-radius: 20px; text-align: center; color: var(--dark); }
.contact-btn { display: inline-block; margin-top: 15px; padding: 10px 25px; background: var(--gold); color: white; text-decoration: none; border-radius: 5px; font-weight: 700; }

/* --- RESPONSIVE MOBILE --- */
@media (max-width: 768px) {
    .nav-container { padding: 0 15px; }
    .hamburger { display: flex; flex-direction: column; gap: 5px; cursor: pointer; }
    .hamburger span { width: 25px; height: 3px; background: white; transition: 0.3s; }
    nav.scrolled .hamburger span { background: var(--dark); }

    .nav-menu {
        position: fixed; top: 0; right: -100%; width: 80%; height: 100vh;
        background: white; flex-direction: column; justify-content: center;
        align-items: flex-start; padding-left: 40px; transition: 0.4s;
    }
    .nav-menu.active { right: 0; }
    .nav-menu a, .dropdown { color: var(--dark) !important; margin: 15px 0; font-size: 18px; display: block; width: 100%; margin-left: 0; }
    
    .dropdown-content { position: static; box-shadow: none; display: block; padding-left: 20px; background: none; }
    .dropdown-content a { font-size: 16px; padding: 10px 0; }
    .dropbtn i { display: none; }

    .hero h1 { font-size: 28px; }
    .hero-action-wrapper { flex-direction: column; }
    .action-card { min-width: 100%; }
    .gallery-card { flex: 0 0 280px; }
    .gallery-track { padding-left: 20px; }
}

.fade-in { opacity: 0; transform: translateY(20px); transition: 0.6s ease-out; }
.fade-in.appear { opacity: 1; transform: translateY(0); }
footer { padding: 40px; text-align: center; background: #0a0a0a; color: #666; font-size: 13px; }
// Membuka & Menutup Menu Mobile
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Tutup menu saat link diklik (Agar tidak menutupi saat scroll ke section)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Efek Scroll Navbar
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. TYPING EFFECT PADA HERO
const text = "Pelayanan Haji & Umrah Kutai Barat";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// 3. NAVBAR SCROLL EFFECT & ACTIVE LINK HIGHLIGHT
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener("scroll", () => {
    // Background Navbar
    const nav = document.getElementById("navbar");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

    // Highlighting Active Link
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active-link");
        if (a.getAttribute('href').includes(current)) {
            a.classList.add("active-link");
        }
    });
});

// 4. REVEAL ANIMATION (INTERSECTION OBSERVER)
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear");
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// 5. SMOOTH SCROLLING WITH OFFSET
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === "#") return;
        
        const target = document.querySelector(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

/** 
 * Script Update: Auto-Loop Simulation & Drag Scroll 
 */

const track = document.getElementById('galleryTrack');
let isDown = false;
let startX;
let scrollLeft;

// Drag to Scroll Logic
track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.classList.add('active');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.parentElement.scrollLeft;
});
track.addEventListener('mouseleave', () => { isDown = false; });
track.addEventListener('mouseup', () => { isDown = false; });
track.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.parentElement.scrollLeft = scrollLeft - walk;
});

// Auto-Looping Animation (Simulasi sederhana)
function autoScroll() {
    const wrapper = track.parentElement;
    if (!isDown) {
        if (wrapper.scrollLeft >= (track.scrollWidth - wrapper.offsetWidth)) {
            wrapper.scrollLeft = 0;
        } else {
            wrapper.scrollLeft += 1;
        }
    }
}
setInterval(autoScroll, 30); // Kecepatan scroll otomatis

// (Gunakan script Typing Effect & Scroll Reveal dari revisi sebelumnya)

// FAQ Accordion Logic
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
    });
});

// Tombol Back to Top
const btnTop = document.createElement('button');
btnTop.id = "backToTop";
btnTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
document.body.appendChild(btnTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        btnTop.style.display = 'flex';
    } else {
        btnTop.style.display = 'none';
    }
});

btnTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Penambahan Jam Layanan di Footer (Otomatis)
const footer = document.querySelector('footer');
const jamLayanan = `
    <div class="operating-hours">
        <i class="fa-solid fa-clock"></i> <strong>Jam Layanan:</strong><br>
        Senin - Kamis: 08:00 - 16:00 WITA<br>
        Jumat: 08:00 - 16:30 WITA
    </div>
`;
footer.insertAdjacentHTML('afterbegin', jamLayanan);

// Back to Top Logic
const backToTopBtn = document.createElement('button');
backToTopBtn.id = "backToTop";
backToTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Run typewriter on load
window.onload = typeWriter;




