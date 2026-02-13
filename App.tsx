
import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import AIChatBot from './components/AIChatBot';
import { SERVICES, MOCK_NEWS } from './constants';
// Added X to the list of imports from lucide-react
import { 
  Search, MapPin, Phone, Mail, Facebook, Instagram, Youtube, 
  ArrowRight, ExternalLink, Loader2, CheckCircle2, 
  Globe, Shield, Heart, Award, ChevronUp, X
} from 'lucide-react';

const App: React.FC = () => {
  const [portionNumber, setPortionNumber] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchPortion = () => {
    if (portionNumber.length < 10) {
      inputRef.current?.focus();
      return;
    }
    setIsSearching(true);
    setSearchResult(null);
    
    // Simulate API call to Siskohat
    setTimeout(() => {
      setIsSearching(false);
      setSearchResult(`Nomor Porsi ${portionNumber} terdaftar atas nama Jamaah asal Kutai Barat. Estimasi Keberangkatan: Tahun 1457H / 2036M. Informasi ini bersifat estimasi, silakan hubungi Seksi PHU Kemenag Kutai Barat untuk validasi data terbaru.`);
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-inter selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      
      {/* Hero Section */}
      <header id="beranda" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1565552645632-d7c5f76a16be?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover brightness-[0.35] scale-105 animate-[pulse_15s_infinite_alternate]"
            alt="Kaaba Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-transparent to-slate-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-white/20 shadow-2xl">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
            Pelayanan Haji Terintegrasi
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9] drop-shadow-2xl">
            Menuju Haji <br/>
            <span className="text-amber-400 font-serif italic font-normal lowercase tracking-normal">yang</span> <span className="text-white">Mabrur</span>
          </h1>
          <p className="text-lg md:text-2xl text-emerald-50/90 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
            Memberikan pendampingan ibadah dari pendaftaran hingga kepulangan bagi masyarakat Kabupaten Kutai Barat.
          </p>
          
          <div id="cek-porsi" className="bg-white/10 backdrop-blur-xl p-3 rounded-[40px] border border-white/20 shadow-2xl max-w-2xl mx-auto ring-12 ring-black/10 transform transition-all hover:scale-[1.02]">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-500 w-6 h-6" />
                <input 
                  ref={inputRef}
                  type="text" 
                  value={portionNumber}
                  onChange={(e) => setPortionNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="Masukkan 10 Digit Nomor Porsi" 
                  className="w-full pl-16 pr-6 py-6 rounded-[32px] bg-white text-slate-800 focus:outline-none focus:ring-4 focus:ring-amber-500/50 transition-all font-black text-xl placeholder:font-bold placeholder:text-slate-300"
                />
              </div>
              <button 
                onClick={handleSearchPortion}
                disabled={isSearching}
                className="bg-amber-500 hover:bg-amber-600 disabled:bg-slate-400 text-white font-black py-6 px-12 rounded-[32px] transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 min-w-[200px]"
              >
                {isSearching ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Lacak Porsi'}
              </button>
            </div>
          </div>

          {searchResult && (
            <div className="mt-8 animate-in zoom-in-95 duration-500 bg-white/95 backdrop-blur-md text-slate-900 p-8 rounded-[40px] max-w-2xl mx-auto border-4 border-emerald-500/30 shadow-2xl text-left relative">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600">
                   <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-black text-lg mb-2 text-emerald-800 uppercase tracking-widest">Data Ditemukan</h4>
                  <p className="text-base font-bold text-slate-600 leading-relaxed">{searchResult}</p>
                </div>
              </div>
              <button onClick={() => setSearchResult(null)} className="absolute top-6 right-6 text-slate-300 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity" onClick={() => scrollToSection('tentang-kami')}>
          <div className="w-10 h-16 border-4 border-white rounded-full flex justify-center p-2">
            <div className="w-2 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section id="statistik-quick" className="relative -mt-20 z-20 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Kuota Kaltim', value: '1.245', sub: 'Jamaah 1446H', color: 'bg-emerald-600', icon: <Globe className="w-5 h-5" /> },
            { label: 'Jamaah KuBar', value: '102', sub: 'Berangkat 2024', color: 'bg-white', icon: <Heart className="w-5 h-5" /> },
            { label: 'Masa Tunggu', value: '31', sub: 'Tahun Rata-rata', color: 'bg-white', icon: <Award className="w-5 h-5" /> },
            { label: 'Akreditasi', value: 'A+', sub: 'Indeks Kepuasan', color: 'bg-white', icon: <Shield className="w-5 h-5" /> }
          ].map((stat, i) => (
            <div key={i} className={`${stat.color === 'bg-emerald-600' ? 'bg-emerald-600 text-white shadow-emerald-200' : 'bg-white text-slate-900 shadow-slate-200'} p-10 rounded-[40px] shadow-2xl flex flex-col items-center text-center transform hover:-translate-y-4 transition-all duration-500 border border-slate-50 relative group`}>
              <div className={`mb-6 p-3 rounded-2xl ${stat.color === 'bg-emerald-600' ? 'bg-white/10' : 'bg-emerald-50 text-emerald-600'}`}>
                {stat.icon}
              </div>
              <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${stat.color === 'bg-emerald-600' ? 'text-emerald-200' : 'text-emerald-600'}`}>{stat.label}</span>
              <span className="text-5xl font-black mb-2 tracking-tighter">{stat.value}</span>
              <span className={`text-xs font-bold ${stat.color === 'bg-emerald-600' ? 'text-emerald-200/60' : 'text-slate-400'}`}>{stat.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="tentang-kami" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-emerald-600/10 rounded-[64px] blur-2xl group-hover:bg-emerald-600/20 transition-all duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1000&auto=format&fit=crop" 
                alt="Kantor Kemenag" 
                className="relative z-10 w-full h-[600px] object-cover rounded-[56px] shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 z-20 bg-amber-500 text-white p-12 rounded-[48px] shadow-2xl hidden md:block max-w-xs">
                <p className="text-4xl font-black mb-2">24/7</p>
                <p className="text-sm font-bold opacity-80 uppercase tracking-widest leading-relaxed">Siap Melayani Konsultasi Jamaah Kutai Barat</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <h2 className="text-emerald-600 font-black text-sm tracking-[0.4em] uppercase mb-6">Tentang PHU KuBar</h2>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-[1.1]">Dedikasi untuk <br/> <span className="text-emerald-600">Pelayanan Terbaik</span></h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                Seksi Penyelenggaraan Haji dan Umrah (PHU) Kantor Kementerian Agama Kabupaten Kutai Barat adalah instansi yang bertanggung jawab penuh dalam tata kelola keberangkatan dan kepulangan jamaah haji serta pengawasan umrah.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase text-xs tracking-wider mb-2">Pendaftaran Haji</h4>
                    <p className="text-slate-400 text-sm font-medium">Proses pendaftaran mudah melalui layanan satu atap.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase text-xs tracking-wider mb-2">Manasik Intensif</h4>
                    <p className="text-slate-400 text-sm font-medium">Bimbingan ibadah terstruktur oleh pembimbing bersertifikat.</p>
                  </div>
                </div>
              </div>
              <button className="bg-slate-900 text-white px-10 py-5 rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-emerald-600 transition-all self-start shadow-xl active:scale-95">
                Visi & Misi Kami
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-32 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-emerald-600 font-black text-sm tracking-[0.4em] uppercase mb-4">Solusi Digital</h2>
            <p className="text-4xl md:text-6xl font-black text-slate-900">Portal Layanan Terpadu</p>
            <div className="w-32 h-2.5 bg-amber-500 mx-auto mt-10 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-white p-12 rounded-[56px] shadow-sm hover:shadow-4xl transition-all duration-700 border border-slate-100 relative overflow-hidden flex flex-col transform hover:-translate-y-4">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-50 rounded-bl-full -mr-24 -mt-24 transition-all group-hover:bg-emerald-100 group-hover:scale-125 duration-700"></div>
                <div className="relative z-10 flex-1">
                  <div className="bg-emerald-600 text-white w-20 h-20 rounded-[32px] flex items-center justify-center mb-10 shadow-2xl group-hover:rotate-12 transition-all group-hover:bg-amber-500 duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-emerald-600 transition-colors leading-tight">{service.title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                    {service.description}
                  </p>
                </div>
                <div className="relative z-10">
                  <button 
                    onClick={() => scrollToSection(service.link.replace('#', ''))}
                    className="inline-flex items-center bg-slate-50 text-emerald-600 px-8 py-4 rounded-2xl font-black text-sm group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300"
                  >
                    Akses Sekarang <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Umrah Alert */}
      <section id="umrah-info" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-emerald-950 rounded-[72px] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative shadow-inner group">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')] opacity-10 animate-[pulse_10s_infinite]"></div>
             <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] group-hover:bg-emerald-500/20 transition-all duration-1000"></div>
            
            <div className="flex-1 text-white relative z-10">
              <div className="inline-block bg-amber-500/20 text-amber-400 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-amber-500/30">
                Peringatan Keamanan Ibadah
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-10 leading-[1.1] tracking-tighter">Pastikan Ibadah Umrah <br/> <span className="text-amber-400 italic font-serif font-normal lowercase tracking-normal">tetap</span> <span className="text-white">Legal & Berkah</span></h2>
              <p className="text-emerald-100/70 text-xl mb-12 max-w-2xl leading-relaxed font-medium">
                Gunakan hanya jasa Penyelenggara Perjalanan Ibadah Umrah (PPIU) resmi. Jangan tergiur paket harga tidak rasional tanpa jaminan keberangkatan dari Siskopatuh.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="bg-amber-500 text-white px-12 py-6 rounded-[32px] font-black hover:bg-amber-600 transition-all flex items-center gap-4 shadow-2xl hover:scale-105 active:scale-95 text-base">
                  <ExternalLink className="w-6 h-6" /> Cek PPIU Resmi
                </button>
                <button className="bg-white/10 border border-white/20 backdrop-blur-md text-white px-12 py-6 rounded-[32px] font-bold hover:bg-white/20 transition-all text-base">
                  5 Pasti Umrah
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center relative">
              <div className="absolute inset-0 bg-emerald-500/30 blur-[120px] rounded-full animate-pulse"></div>
              <img src="https://haji.go.id/media/v1/logo-kemenag.png" alt="Kemenag Logo" className="w-72 h-auto brightness-0 invert opacity-40 drop-shadow-3xl relative z-10 group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="informasi" className="py-32 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
            <div className="max-w-3xl">
              <h2 className="text-emerald-600 font-black text-sm tracking-[0.4em] uppercase mb-6">Warta Terkini</h2>
              <p className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter">Kabar Haji & Umrah <br/> Kabupaten Kutai Barat</p>
            </div>
            <button className="group bg-white text-emerald-600 px-10 py-5 rounded-[24px] font-black text-sm flex items-center gap-4 shadow-xl hover:shadow-2xl transition-all border border-slate-100">
              Warta Lainnya <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {MOCK_NEWS.map((news) => (
              <article key={news.id} className="bg-white rounded-[56px] overflow-hidden shadow-sm hover:shadow-4xl transition-all duration-700 border border-slate-100 group flex flex-col h-full transform hover:-translate-y-4">
                <div className="h-72 overflow-hidden relative">
                  <img 
                    src={news.imageUrl} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-8 left-8">
                    <span className="bg-emerald-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-2xl">
                      {news.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-12 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-slate-400 text-xs font-black uppercase tracking-widest mb-8">
                    <span className="bg-slate-50 px-4 py-2 rounded-xl text-slate-500">{news.date}</span>
                    <span className="text-emerald-500 animate-pulse">•</span>
                    <span>Humas Kemenag</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-8 leading-tight group-hover:text-emerald-600 transition-colors flex-1">
                    {news.title}
                  </h3>
                  <p className="text-slate-500 text-lg mb-10 line-clamp-2 font-medium leading-relaxed">
                    {news.excerpt}
                  </p>
                  <button className="text-slate-900 font-black text-sm flex items-center gap-3 group-hover:gap-6 transition-all mt-auto underline decoration-emerald-500/20 underline-offset-12 decoration-4 hover:decoration-emerald-500">
                    Baca Selengkapnya <ArrowRight className="w-6 h-6 text-emerald-600" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Contact */}
      <section id="kontak" className="py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="text-emerald-600 font-black text-sm tracking-[0.4em] uppercase mb-8">Lokasi Pelayanan</h2>
              <p className="text-4xl md:text-6xl font-black text-slate-900 mb-12 leading-tight tracking-tighter">Mari Berkonsultasi <br/> Secara <span className="text-emerald-600">Langsung</span></p>
              
              <div className="space-y-12">
                <div className="flex items-start gap-10 group">
                  <div className="bg-emerald-50 p-6 rounded-[32px] text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-xl group-hover:rotate-6 duration-500">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl text-slate-900 mb-3 tracking-tight">Pusat Layanan Haji Terpadu</h4>
                    <p className="text-slate-500 text-lg leading-relaxed font-medium max-w-md">
                      Jl. Sendawar No. 1, Kel. Simpang Raya, Kec. Barong Tongkok, Sendawar, Kabupaten Kutai Barat, Kalimantan Timur 75576.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-10 group">
                  <div className="bg-emerald-50 p-6 rounded-[32px] text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-xl group-hover:rotate-6 duration-500">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl text-slate-900 mb-3 tracking-tight">Layanan Informasi</h4>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed">
                      Telepon Kantor: (0545) 123-456 <br/>
                      Hotline WhatsApp: <span className="text-emerald-600 font-black">+62 812-3456-7890</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 pt-8">
                  {[Facebook, Instagram, Youtube].map((Icon, idx) => (
                    <a key={idx} href="#" className="bg-slate-50 p-6 rounded-[32px] text-slate-600 hover:bg-emerald-600 hover:text-white transition-all shadow-xl hover:shadow-2xl transform active:scale-90 duration-300">
                      <Icon className="w-7 h-7" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="rounded-[80px] overflow-hidden shadow-4xl h-[650px] relative border-[16px] border-slate-50 group transform hover:rotate-1 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.753303867664!2d115.71427517506927!3d-0.21558509978231267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df711586940d517%3A0xe7498305c567839!2sKantor%20Kemenag%20Kutai%20Barat!5e0!3m2!1sid!2sid!4v1715764833251!5m2!1sid!2sid" 
                className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-1000"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-12 left-12 right-12 bg-white/90 backdrop-blur-xl p-8 rounded-[40px] border border-white shadow-4xl pointer-events-none group-hover:translate-y-40 opacity-100 group-hover:opacity-0 transition-all duration-700">
                <p className="text-xs font-black text-emerald-600 uppercase tracking-[0.4em] mb-2">Navigasi Peta</p>
                <p className="text-lg font-black text-slate-900 tracking-tight">Kantor Kemenag Kabupaten Kutai Barat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-600 via-amber-500 to-emerald-600"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-6 mb-12">
                <div className="bg-white p-3 rounded-2xl shadow-2xl">
                    <img src="https://haji.go.id/media/v1/logo-kemenag.png" alt="Kemenag" className="h-12 w-auto" />
                </div>
                <div className="text-white">
                  <h3 className="font-black text-2xl leading-tight tracking-tighter uppercase">PHU Kemenag Kutai Barat</h3>
                  <p className="text-xs text-emerald-500 font-black uppercase tracking-[0.4em]">Bumi Taa Sapai</p>
                </div>
              </div>
              <p className="max-w-lg text-lg leading-relaxed font-medium">
                Melayani jamaah dengan sepenuh hati. Kami berkomitmen pada transparansi dan kemudahan akses informasi bagi tamu Allah dari Bumi Taa Sapai.
              </p>
              <div className="mt-12 flex gap-4">
                 <button onClick={scrollToTop} className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all shadow-xl group">
                    <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                 </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-black text-lg mb-10 uppercase tracking-[0.3em]">Navigasi</h4>
              <ul className="space-y-6 text-sm font-bold uppercase tracking-widest">
                <li><button onClick={() => scrollToSection('cek-porsi')} className="hover:text-emerald-400 transition-colors flex items-center gap-3 group"><div className="w-2 h-2 bg-emerald-600 rounded-full group-hover:scale-150 transition-all"></div> Cek Porsi Haji</button></li>
                <li><button onClick={() => scrollToSection('statistik-quick')} className="hover:text-emerald-400 transition-colors flex items-center gap-3 group"><div className="w-2 h-2 bg-emerald-600 rounded-full group-hover:scale-150 transition-all"></div> Data Kuota</button></li>
                <li><button onClick={() => scrollToSection('layanan')} className="hover:text-emerald-400 transition-colors flex items-center gap-3 group"><div className="w-2 h-2 bg-emerald-600 rounded-full group-hover:scale-150 transition-all"></div> Alur Pendaftaran</button></li>
                <li><button onClick={() => scrollToSection('informasi')} className="hover:text-emerald-400 transition-colors flex items-center gap-3 group"><div className="w-2 h-2 bg-emerald-600 rounded-full group-hover:scale-150 transition-all"></div> Pengumuman</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-black text-lg mb-10 uppercase tracking-[0.3em]">Dukungan</h4>
              <ul className="space-y-6 text-sm font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-3 group"><div className="w-2 h-2 bg-amber-500 rounded-full group-hover:scale-150 transition-all"></div> FAQ / Bantuan</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-3 group"><div className="w-2 h-2 bg-amber-500 rounded-full group-hover:scale-150 transition-all"></div> Panduan Umrah</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-2 group"><div className="w-2 h-2 bg-amber-500 rounded-full group-hover:scale-150 transition-all"></div> Pengaduan Digital</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-3 group"><div className="w-2 h-2 bg-amber-500 rounded-full group-hover:scale-150 transition-all"></div> Privacy & Legal</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-xs font-black uppercase tracking-[0.4em]">
            <p className="text-slate-600">&copy; {new Date().getFullYear()} PHU Kemenag Kutai Barat. All Rights Reserved.</p>
            <div className="flex gap-10">
              <span className="text-emerald-900 bg-emerald-500/10 px-4 py-1 rounded-full">Official Portal</span>
              <div className="flex gap-10 opacity-40 hover:opacity-100 transition-opacity">
                <a href="#" className="hover:text-white">Security</a>
                <a href="#" className="hover:text-white">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <AIChatBot />
    </div>
  );
};

export default App;
