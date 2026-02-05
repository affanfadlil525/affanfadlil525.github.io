/* ===== DARK MODE AUTO ===== */
const root = document.documentElement;
const saved = localStorage.getItem("theme");

if (saved) root.dataset.theme = saved;
else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    root.dataset.theme = "dark";

document.getElementById("toggle").onclick = () => {
    const t = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = t;
    localStorage.setItem("theme", t);
};

/* ===== TYPING EFFECT ===== */
const words = ["Web Developer", "Pranata Komputer", "IT Educator"];
let i=0,j=0;
const el=document.getElementById("typing");

function type(){
    if(j<words[i].length){
        el.textContent+=words[i][j++];
        setTimeout(type,80);
    } else setTimeout(erase,1500);
}

function erase(){
    if(j>0){
        el.textContent=words[i].slice(0,--j);
        setTimeout(erase,40);
    } else{
        i=(i+1)%words.length;
        setTimeout(type,500);
    }
}
type();

/* ===== PROJECT DATA DINAMIS ===== */
const projects = [
    {
        title:"Web Barbershop Laravel",
        desc:"Booking online + multi user system."
    },
    {
        title:"WhatsApp Bot Haji",
        desc:"Cek estimasi keberangkatan otomatis."
    },
    {
        title:"Landing Page Instansi",
        desc:"Company profile modern responsif."
    }
];

const container = document.getElementById("projects");

projects.forEach((p,idx)=>{
    const card=document.createElement("div");
    card.className="card";
    card.innerHTML=`<h3>${p.title}</h3><p>${p.desc}</p>`;
    container.appendChild(card);

    setTimeout(()=>card.classList.add("show"), idx*200);
});
