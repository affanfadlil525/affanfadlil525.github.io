// ==========================
// CEK NOMOR PORSI (SIMULASI)
// ==========================
document.getElementById("cekForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nomor = document.getElementById("nomorPorsi").value;
    const hasil = document.getElementById("hasil");

    if (nomor.length < 8) {
        hasil.innerHTML = "<p style='color:red'>Nomor porsi tidak valid</p>";
        return;
    }

    const estimasi = 2045 + Math.floor(Math.random() * 5);

    hasil.innerHTML = `
        <div class="result">
            <p><strong>Nomor Porsi:</strong> ${nomor}</p>
            <p><strong>Estimasi Keberangkatan:</strong> Tahun ${estimasi}</p>
            <small>*Simulasi, bukan data resmi</small>
        </div>
    `;
});

// ==========================
// BERITA DINAMIS
// ==========================
const berita = [
    "Pemerintah menetapkan kuota haji tahun berjalan",
    "Digitalisasi layanan haji semakin diperkuat",
    "Prioritas pelayanan jamaah lansia"
];

const list = document.getElementById("listBerita");

berita.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
});
