
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section for highlighting
      const sections = ['beranda', 'tentang-kami', 'layanan', 'informasi', 'kontak'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsOpen(false);
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { name: 'Beranda', id: 'beranda' },
    { name: 'Tentang Kami', id: 'tentang-kami' },
    { name: 'Layanan', id: 'layanan' },
    { name: 'Informasi', id: 'informasi' },
    { name: 'Kontak', id: 'kontak' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button onClick={() => scrollToSection('beranda')} className="flex-shrink-0 flex items-center gap-3 group focus:outline-none">
              <div className="bg-emerald-600 p-2 rounded-xl group-hover:rotate-6 transition-transform">
                <img src="https://haji.go.id/media/v1/logo-kemenag.png" alt="Logo Kemenag" className="h-8 w-auto brightness-0 invert" />
              </div>
              <div className={`hidden md:block leading-tight text-left transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                <span className="block text-sm font-black uppercase tracking-wider">PHU Kemenag</span>
                <span className="block text-[10px] font-bold opacity-70 uppercase tracking-widest">Kutai Barat</span>
              </div>
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2 lg:space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                    activeSection === item.id 
                      ? (isScrolled ? 'bg-emerald-600 text-white shadow-md' : 'bg-white text-emerald-900 shadow-xl')
                      : (isScrolled ? 'text-slate-600 hover:text-emerald-600 hover:bg-emerald-50' : 'text-white/80 hover:text-white hover:bg-white/10')
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="w-px h-6 bg-slate-200 mx-2 hidden lg:block opacity-20"></div>
              <button 
                onClick={() => scrollToSection('cek-porsi')}
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all transform hover:scale-105 shadow-xl hover:shadow-amber-500/20"
              >
                Cek Porsi
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-colors ${isScrolled ? 'text-slate-700 bg-slate-100' : 'text-white bg-white/10'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-500 origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
        <div className="px-4 pt-4 pb-10 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-slate-800 hover:bg-emerald-50 hover:text-emerald-600 block px-4 py-4 rounded-2xl text-base font-black uppercase tracking-widest w-full text-left"
            >
              {item.name}
            </button>
          ))}
          <div className="pt-4">
            <button 
              onClick={() => scrollToSection('cek-porsi')}
              className="w-full bg-amber-500 text-white px-5 py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl"
            >
              Cek Porsi Haji
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
