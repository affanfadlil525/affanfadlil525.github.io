/**
 * Pelayanan Haji & Umrah Kutai Barat
 * Script Logic - Clean Version
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. NAVBAR & HAMBURGER ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Tutup menu saat link diklik
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
        });
    });

    // --- 2. TYPING EFFECT ---
    const text = "Pelayanan Haji & Umrah Kutai Barat";
    let i = 0;
    const typingTarget = document.getElementById("typing-text");

    function typeWriter() {
        if (typingTarget && i < text.length) {
            typingTarget.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // --- 3. SCROLL EFFECTS (Navbar & Active Link) ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener("scroll", () => {
        // Navbar Scrolled
        if (window.scrollY > 50) {
            navbar?.classList.add("scrolled");
        } else {
            navbar?.classList.remove("scrolled");
        }

        // Active Link Highlighting
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

    // --- 4. REVEAL ANIMATION ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // --- 5. FAQ ACCORDION ---
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            faqItem.classList.toggle('active');
        });
    });

    // --- 6. GALLERY DRAG & AUTO SCROLL ---
    const track = document.getElementById('galleryTrack');
    if (track) {
        let isDown = false;
        let startX, scrollLeft;

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

        // Auto Scroll
        setInterval(() => {
            if (!isDown) {
                const wrapper = track.parentElement;
                if (wrapper.scrollLeft >= (track.scrollWidth - wrapper.offsetWidth)) {
                    wrapper.scrollLeft = 0;
                } else {
                    wrapper.scrollLeft += 1;
                }
            }
        }, 30);
    }

    // --- 7. BACK TO TOP ---
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = "backToTop";
    backToTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        backToTopBtn.style.display = window.scrollY > 500 ? 'flex' : 'none';
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- 8. FOOTER JAM LAYANAN ---
    const footer = document.querySelector('footer');
    if (footer && !document.querySelector('.operating-hours')) {
        const jamLayanan = `
            <div class="operating-hours">
                <i class="fa-solid fa-clock"></i> <strong>Jam Layanan Kantor:</strong><br>
                Senin - Kamis: 08:00 - 16:00 WITA<br>
                Jumat: 08:00 - 16:30 WITA
            </div>
        `;
        footer.insertAdjacentHTML('afterbegin', jamLayanan);
    }
});
