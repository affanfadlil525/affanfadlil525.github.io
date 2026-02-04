/* ======================
   DATA (BISA DARI API)
====================== */
const typingTexts = [
    "Web Developer",
    "Pranata Komputer",
    "Educator"
];

const skillsData = [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 75 },
    { name: "Laravel", level: 80 }
];

const portfolioData = [
    { title: "Web Barbershop", desc: "Booking online berbasis Laravel" },
    { title: "Bot Haji", desc: "Estimasi keberangkatan via WhatsApp" },
    { title: "Landing Page", desc: "Company profile modern" }
];

/* ======================
   DARK MODE DINAMIS
====================== */
const root = document.documentElement;
const toggle = document.getElementById("darkToggle");

const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    root.dataset.theme = savedTheme;
} else if (systemDark) {
    root.dataset.theme = "dark";
}

toggle.onclick = () => {
    const newTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
};

/* ======================
   TYPING EFFECT DINAMIS
====================== */
let textIndex = 0, charIndex = 0;
const typingEl = document.getElementById("typing");

function typingLoop() {
    if (charIndex < typingTexts[textIndex].length) {
        typingEl.textContent += typingTexts[textIndex][charIndex++];
    } else {
        setTimeout(() => eraseLoop(), 1500);
        return;
    }
    setTimeout(typingLoop, 100);
}

function eraseLoop() {
    if (charIndex > 0) {
        typingEl.textContent =
            typingTexts[textIndex].slice(0, --charIndex);
        setTimeout(eraseLoop, 60);
    } else {
        textIndex = (textIndex + 1) % typingTexts.length;
        setTimeout(typingLoop, 500);
    }
}

typingLoop();

/* ======================
   RENDER SKILLS
====================== */
const skillsEl = document.getElementById("skills");

skillsData.forEach(skill => {
    const div = document.createElement("div");
    div.className = "skill";
    div.innerHTML = `
        <span>${skill.name}</span>
        <div class="bar">
            <div class="fill" style="width:${skill.level}%"></div>
        </div>
    `;
    skillsEl.appendChild(div);
});

/* ======================
   RENDER PORTFOLIO
====================== */
const portEl = document.getElementById("portfolio");

portfolioData.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p>`;
    portEl.appendChild(card);
});
