import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Compass, ShoppingBag } from 'lucide-react';
import { WHATSAPP_PHONE, INSTAGRAM_HANDLE } from '../data';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', target: 'inicio' },
    { label: 'A Marca', target: 'sobre' },
    { label: 'Coleção', target: 'colecao' },
    { label: 'Monte seu Look', target: 'monte-seu-look' },
  ];

  const handleWhatsAppContact = () => {
    const text = 'Olá! Gostaria de falar com uma consultora da Moda Versátil sobre as coleções.';
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-beige-50/90 backdrop-blur-md py-4 shadow-sm border-b border-brand-beige-200/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('inicio');
          }}
          className="font-serif text-2xl lg:text-3xl font-medium tracking-[0.2em] text-brand-dark hover:text-brand-gold-600 transition-colors duration-300"
        >
          MODA VERSÁTIL
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-[0.2em] uppercase">
          {menuItems.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.target);
              }}
              className="text-brand-dark hover:text-brand-gold-600 transition-colors py-2 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </nav>

        {/* CTA / Instagram link */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={handleWhatsAppContact}
            className="px-5 py-2.5 bg-brand-dark text-white hover:bg-brand-gold-600 text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300 rounded-none shadow-sm hover:shadow"
          >
            Consultoria VIP
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-brand-dark hover:text-brand-gold-600 transition-colors focus:outline-none"
          aria-label="Alternar menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brand-beige-100/95 backdrop-blur-md border-b border-brand-beige-200 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-4 text-xs font-medium tracking-[0.25em] uppercase">
              {menuItems.map((item) => (
                <a
                  key={item.target}
                  href={`#${item.target}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.target);
                    setMobileMenuOpen(false);
                  }}
                  className="py-2 text-brand-dark hover:text-brand-gold-600 border-b border-brand-beige-200/50"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  handleWhatsAppContact();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3.5 bg-brand-dark text-white text-center text-[10px] font-medium tracking-[0.2em] uppercase hover:bg-brand-gold-600 transition-colors mt-2"
              >
                Falar com Consultora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
