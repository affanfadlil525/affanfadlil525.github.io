/**
 * Pelayanan Haji & Umrah Kutai Barat
 * Script Logic - Clean Version
 */

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const track = document.getElementById('galleryTrack');

    // 1. HAMBURGER MENU TOGGLE
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Tutup menu saat link diklik (Mobile UX)
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        });
    });

    // 2. TYPING EFFECT PADA HERO
    const typingText = "Pelayanan Haji & Umrah Kutai Barat";
    let charIndex = 0;
    function typeWriter() {
        const target = document.getElementById("typing-text");
        if (target && charIndex < typingText.length) {
            target.innerHTML += typingText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // 3. NAVBAR SCROLL & ACTIVE LINK HIGHLIGHT
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const navbar = document.getElementById('navbar');

    window.addEventListener("scroll", () => {
        // Background Navbar
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Highlighting Active Link
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
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
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // 5. GALLERY DRAG & AUTO SCROLL
    if (track) {
        let isDown = false;
        let startX;
        let scrollLeft;

        track.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - track.offsetLeft;
            scrollLeft = track.parentElement.scrollLeft;
        });
        track.addEventListener('mouseleave', () => isDown = false);
        track.addEventListener('mouseup', () => isDown = false);
        track.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 2;
            track.parentElement.scrollLeft = scrollLeft - walk;
        });

        // Auto-Looping Animation
        setInterval(() => {
            const wrapper = track.parentElement;
            if (!isDown) {
                if (wrapper.scrollLeft >= (track.scrollWidth - wrapper.offsetWidth)) {
                    wrapper.scrollLeft = 0;
                } else {
                    wrapper.scrollLeft += 1;
                }
            }
        }, 30);
    }

    // 6. BACK TO TOP BUTTON
    const btnTop = document.createElement('button');
    btnTop.id = "backToTop";
    btnTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    document.body.appendChild(btnTop);

    window.addEventListener('scroll', () => {
        btnTop.style.display = window.scrollY > 500 ? 'flex' : 'none';
    });

    btnTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 7. DYNAMIC FOOTER CONTENT (Jam Layanan)
    const footer = document.querySelector('footer');
    if (footer) {
        const jamLayanan = `
            <div class="operating-hours">
                <i class="fa-solid fa-clock"></i> <strong>Jam Layanan:</strong><br>
                Senin - Kamis: 08:00 - 16:00 WITA<br>
                Jumat: 08:00 - 16:30 WITA
            </div>
        `;
        footer.insertAdjacentHTML('afterbegin', jamLayanan);
    }
});
