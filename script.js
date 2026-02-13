// 1. Efek Mengetik
const text = "Kementerian Haji & Umrah Kab. Kutai Barat";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Toggle Menu
hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Mencegah bubbling
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Tutup menu saat klik di luar (Penting untuk HP)
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Highlight menu aktif saat scroll (Membuat web terasa "hidup")
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(a => {
        a.classList.remove('active-link');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active-link');
        }
    });
});

// 2. Scroll Navbar
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// 3. Reveal Animation on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear");
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// 4. Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

window.onload = typeWriter;


