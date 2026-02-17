document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // 1. Hamburger Menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 2. Typing Effect
    const typingTarget = document.getElementById("typing-text");
    const text = "Pelayanan Haji & Umrah Kutai Barat";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typingTarget.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // 3. Navbar & Back to Top Scroll Logic
    const btnTop = document.createElement('button');
    btnTop.id = "backToTop";
    btnTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    document.body.appendChild(btnTop);

    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        // Navbar change
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');

        // Back to top visibility
        if (window.scrollY > 500) btnTop.style.display = 'flex';
        else btnTop.style.display = 'none';
    });

    btnTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 4. Reveal Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('appear');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // 5. Gallery Auto Scroll Logic
    const track = document.getElementById('galleryTrack');
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
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 2;
        track.parentElement.scrollLeft = scrollLeft - walk;
    });

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
});
