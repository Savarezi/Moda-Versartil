import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Instagram, MessageCircle, Sparkles, ShoppingBag } from 'lucide-react';
import { HERO_IMAGE, WHATSAPP_PHONE, INSTAGRAM_URL } from '../data';

interface HeroProps {
  onExploreClick: () => void;
}

const HERO_IMAGES = [
  '/images/Conjunto.png',
  '/images/Calça.png',
  '/images/linho.png'
];

export default function Hero({ onExploreClick }: HeroProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // 5 seconds interval for smooth reading/viewing
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppContact = () => {
    const text = 'Olá! Gostaria de conversar com uma consultora de estilo da Moda Versátil e agendar um atendimento premium.';
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handleInstagramClick = () => {
    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 lg:pt-0 flex items-center overflow-hidden bg-gradient-to-b from-brand-beige-100/50 via-brand-beige-50 to-brand-beige-50 px-6"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12">
        {/* Left column: Typography & Copy */}
        <div className="lg:col-span-6 flex flex-col space-y-8 text-center lg:text-left z-10 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center lg:justify-start gap-2"
          >
            <div className="h-[1px] w-8 bg-brand-gold-600"></div>
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-brand-gold-700 flex items-center gap-1.5">
              <Sparkles size={11} className="text-brand-gold-600" />
              CURADORIA DE ALTA COSTURA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-brand-dark leading-[1.1] tracking-tight"
          >
            Estilo que se <br />
            <span className="italic font-normal text-brand-gold-600 font-serif">adapta a você.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-brand-neutral max-w-lg mx-auto lg:mx-0 font-sans font-light leading-relaxed text-sm sm:text-base lg:text-lg"
          >
            Peças versáteis, sofisticadas e de curadoria lenta desenvolvidas em linho puro, algodão e seda natural. Desenhadas para transitar com maestria entre seu dia a dia dinâmico e seus momentos mais memoráveis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="https://onelink.shein.com/40/5u00gic2rajd"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-brand-gold-500 text-white hover:bg-brand-gold-600 hover:scale-[1.02] font-bold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2.5 rounded-none cursor-pointer ring-2 ring-brand-gold-500/20"
            >
              <ShoppingBag size={14} className="text-white group-hover:scale-110 transition-transform" />
              Visite a Loja na Shein
            </a>

            <button
              onClick={handleWhatsAppContact}
              className="group px-8 py-4 bg-brand-dark text-white hover:bg-brand-gold-600 font-medium text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 rounded-none cursor-pointer"
            >
              Falar no WhatsApp
              <MessageCircle size={15} className="text-white/80 group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={handleInstagramClick}
              className="group px-8 py-4 border border-brand-dark/20 text-brand-dark hover:border-brand-gold-600 hover:text-brand-gold-600 font-medium text-xs tracking-[0.25em] uppercase transition-all duration-300 bg-transparent flex items-center justify-center gap-2 rounded-none cursor-pointer"
            >
              <Instagram size={14} className="text-brand-dark group-hover:text-brand-gold-600 transition-colors" />
              Ver Instagram
            </button>
          </motion.div>
        </div>

        {/* Right column: Image frame */}
        <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2 z-0 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-sm sm:max-w-md lg:max-w-full aspect-[4/5] rounded-none overflow-hidden border-[12px] border-white shadow-xl bg-white group"
          >
            {/* Soft fallbacks using graceful CSS gradients so page always looks premium even if image is loading or missing */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-beige-200 to-brand-gold-100 flex items-center justify-center">
              {HERO_IMAGES.map((img, idx) => (
                <motion.img
                  key={img}
                  src={img}
                  alt={`Editorial elegante da Moda Versátil ${idx + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: idx === currentIdx ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                  referrerPolicy="no-referrer"
                />
              ))}

              {/* Minimalist interactive indicators */}
              <div className="absolute bottom-[108px] right-8 flex space-x-1.5 z-10 items-center">
                {HERO_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className="h-1.5 focus:outline-none transition-all duration-500"
                    aria-label={`Ir para imagem ${idx + 1}`}
                  >
                    <div 
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        idx === currentIdx ? 'w-6 bg-brand-gold-500' : 'w-1.5 bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Fallback visual label so it never looks broken */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center pointer-events-none opacity-45">
                <span className="font-serif text-4xl font-light text-brand-dark tracking-widest uppercase">MODA VERSÁTIL</span>
                <span className="text-[9px] tracking-widest text-brand-neutral uppercase mt-2">Toque de Alta Boutique</span>
              </div>
            </div>

            {/* Premium Gold Accent Frame */}
            <div className="absolute -inset-1 border border-brand-gold-500/30 pointer-events-none m-3"></div>

            {/* Floating Info Tag / Caption */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-6 left-6 right-6 bg-neutral-950/70 backdrop-blur-md py-4.5 px-6 border border-white/10 flex items-center justify-between shadow-sm z-10"
            >
              <div className="text-left">
                <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-brand-gold-400 font-medium">
                  NATURAL & ELEGÂNCIA
                </p>
                <h4 className="font-serif text-xl md:text-2xl font-light text-white tracking-wide mt-1">
                  Conjunto de Linho
                </h4>
              </div>
              <button
                onClick={onExploreClick}
                className="p-3 bg-white text-brand-dark hover:bg-brand-gold-500 hover:text-white transition-colors duration-300 flex items-center justify-center flex-shrink-0"
                aria-label="Explorar Coleção"
              >
                <ArrowRight size={14} />
              </button>
            </motion.div>
          </motion.div>

          {/* Background Decorative Squares */}
          <div className="absolute -top-6 -left-6 w-24 h-24 border-t border-l border-brand-gold-500/40 pointer-events-none hidden lg:block"></div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b border-r border-brand-gold-500/40 pointer-events-none hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
