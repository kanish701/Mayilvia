import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/mayilvia.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'py-3 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* 1. Brand Logo - Minimalist Left */}
        <Link to="/" className="flex items-center gap-3 group relative z-10">
          <div className="bg-white p-0 rounded-lg transition-transform group-hover:scale-105">
            <img src={logo} alt="Mayilvia" className="h-14 w-auto object-contain" />
          </div>
          <div className="hidden sm:block">
            <span className={`block font-black text-lg tracking-tighter leading-none transition-colors ${scrolled ? 'text-gray-900' : 'text-gray-800'}`}>MAYILVIA</span>
            <span className="text-[9px] text-[#1f6f63] font-bold tracking-[0.3em] uppercase">Global Trade & Technology</span>
          </div>
        </Link>

        {/* 2. Desktop Navigation - Light Pill */}
        <nav className="hidden md:flex items-center bg-gray-50/50 border border-gray-100 backdrop-blur-sm rounded-full px-1.5 py-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all ${
                location.pathname === link.path 
                ? 'bg-[#1f6f63] text-white shadow-md' 
                : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 3. Action Group - Clean Right */}
        <div className="flex items-center gap-4">
          <Link 
            to="/contact" 
            className="hidden sm:flex items-center gap-3 bg-gray-900 hover:bg-[#1f6f63] text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm"
          >
            Get Quote
            <div className="w-1 h-1 bg-[#c9a24a] rounded-full animate-pulse" />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2.5 bg-gray-50 border border-gray-100 rounded-xl text-gray-900 md:hidden hover:bg-gray-100 transition-all"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Overlay - Clean White */}
      <div className={`fixed inset-0 bg-white z-[-1] transition-all duration-500 ease-in-out md:hidden ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-light text-gray-900 hover:text-[#1f6f63] transition-colors tracking-tighter"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-6 bg-[#1f6f63] text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase shadow-lg shadow-[#1f6f63]/20"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </header>
  );
}