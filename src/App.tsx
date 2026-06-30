import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  MessageCircle, 
  ChevronUp, 
  Sparkles,
  MapPin,
  Instagram,
  Mail,
  Compass,
  Check,
  Bot,
  X
} from 'lucide-react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProductCardSection from './components/ProductCard';
import MixMatch from './components/MixMatch';
import { Testimonials } from './components/Testimonials';

import { PRODUCTS, WHATSAPP_PHONE, INSTAGRAM_URL, CONTACT_EMAIL } from './data';

export default function App() {
  // States for App
  const [likedProducts, setLikedProducts] = useState<Record<string, boolean>>({});
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showAssistantTooltip, setShowAssistantTooltip] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);

    // Hide assistant tooltip after 10 seconds
    const timer = setTimeout(() => {
      setShowAssistantTooltip(false);
    }, 10000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleToggleLike = (id: string) => {
    setLikedProducts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const handleAssistantClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="min-h-screen bg-linen text-brand-dark font-sans selection:bg-brand-gold-500/20 selection:text-brand-dark antialiased">
      
      {/* Elegante Header Fixo */}
      <Header onNavigate={handleNavigate} />

      {/* Hero Section */}
      <Hero onExploreClick={() => handleNavigate('colecao')} />

      {/* Seção Sobre Nós */}
      <About />

      {/* Seção Coleções (Bento-Grid + Carrossel) */}
      <ProductCardSection 
        likedProducts={likedProducts} 
        onToggleLike={handleToggleLike} 
      />

      {/* Seção "Monte seu Look" (Mix & Match Interativo) */}
      <MixMatch />

      {/* Seção "Depoimentos de Nossas Clientes" */}
      <Testimonials />

      {/* Footer / Rodapé Premium */}
      <footer className="bg-brand-dark text-brand-beige-50/90 pt-20 pb-10 px-6 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-brand-beige-300/10 pb-16 mb-10">
          
          {/* Brand Info */}
          <div className="md:col-span-8 flex flex-col space-y-6 text-left">
            <h3 className="font-serif text-2xl tracking-[0.25em] text-white">MODA VERSÁTIL</h3>
            <p className="text-xs text-brand-beige-200/75 leading-relaxed font-light max-w-sm">
              Desenvolvemos peças autorais e atemporais focadas na sofisticação do linho nobre, algodão premium e seda natural. Estilo inteligente que acompanha a mulher moderna em todas as ocasiões.
            </p>
            <div className="flex space-x-4">
              <a 
                href={INSTAGRAM_URL}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 border border-brand-beige-300/20 flex items-center justify-center text-brand-beige-200 hover:text-brand-gold-500 hover:border-brand-gold-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_PHONE}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 border border-brand-beige-300/20 flex items-center justify-center text-brand-beige-200 hover:text-brand-gold-500 hover:border-brand-gold-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-col space-y-6 text-left md:pl-16">
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-brand-gold-100">Navegação</h4>
            <div className="grid grid-cols-2 gap-3 text-xs font-light text-brand-beige-200/80">
              <button onClick={() => handleNavigate('inicio')} className="hover:text-brand-gold-500 text-left cursor-pointer">Início</button>
              <button onClick={() => handleNavigate('sobre')} className="hover:text-brand-gold-500 text-left cursor-pointer">A Marca</button>
              <button onClick={() => handleNavigate('colecao')} className="hover:text-brand-gold-500 text-left cursor-pointer">Coleção</button>
              <button onClick={() => handleNavigate('monte-seu-look')} className="hover:text-brand-gold-500 text-left cursor-pointer">Monte seu Look</button>
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-[10px] text-brand-beige-200/40 tracking-widest uppercase space-y-4 sm:space-y-0">
          <p>© 2026 MODA VERSÁTIL. TODOS OS DIREITOS RESERVADOS.</p>
          <p className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4 font-light text-center sm:text-right">
            <span>Feito com carinho e delicadeza para você.</span>
            <span className="hidden sm:inline text-brand-beige-200/20">|</span>
            <span>
              Desenvolvido por{' '}
              <a 
                href="https://patriciaoliveiradev.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-gold-500 hover:text-white transition-colors lowercase tracking-normal font-sans font-medium"
              >
                Patricia Oliveira
              </a>
            </span>
          </p>
        </div>
      </footer>

      {/* FLOAT ACTIONS: Back to top and Assistant floating button */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-40 items-end">
        
        {/* Pulsing Assistant floating button */}
        <div className="relative flex items-center">
          <AnimatePresence>
            {showAssistantTooltip && !isChatOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute right-16 mr-2 py-2 px-4 bg-brand-dark text-white text-[10px] font-semibold tracking-wider uppercase shadow-xl border border-brand-gold-500/25 whitespace-nowrap hidden sm:block pointer-events-none"
              >
                Fale com nossa assistente virtual <span className="text-brand-gold-500">● Online</span>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={handleAssistantClick}
            className={`w-14 h-14 ${
              isChatOpen 
                ? 'bg-brand-gold-500 text-brand-dark border-transparent' 
                : 'bg-brand-dark hover:bg-brand-gold-500 text-brand-gold-400 hover:text-brand-dark border border-brand-gold-500/40'
            } rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 relative cursor-pointer z-50`}
            aria-label="Fale com nossa assistente virtual"
          >
            {/* Pulsing ring effect */}
            {!isChatOpen && (
              <span className="absolute inset-0 rounded-full border border-brand-gold-500 animate-ping opacity-60 pointer-events-none"></span>
            )}
            {isChatOpen ? (
              <X size={26} className="rotate-0 transition-transform duration-300" />
            ) : (
              <Bot size={26} className="group-hover:rotate-12 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Scroll To Top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 bg-white hover:bg-brand-gold-100 border border-brand-beige-200 text-brand-dark flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer"
              aria-label="Voltar para o topo"
            >
              <ChevronUp size={18} />
            </motion.button>
          )}
        </AnimatePresence>

      </div>

      {/* Floating Chat Widget */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed bottom-24 right-6 w-[calc(100vw-32px)] sm:w-[400px] h-[580px] max-h-[75vh] bg-brand-dark border border-brand-gold-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 overflow-hidden flex flex-col rounded-2xl"
          >
            {/* Header */}
            <div className="bg-brand-dark border-b border-brand-gold-500/20 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-brand-gold-500/10 border border-brand-gold-500/30 rounded-full flex items-center justify-center text-brand-gold-400">
                    <Bot size={20} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-brand-dark rounded-full"></span>
                </div>
                <div>
                  <h4 className="text-white text-xs font-semibold tracking-wider uppercase font-serif">Assistente Virtual</h4>
                  <p className="text-[10px] text-brand-gold-500 uppercase font-sans tracking-widest">Moda Versátil ● Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="w-8 h-8 rounded-full border border-white/10 hover:border-brand-gold-500/50 flex items-center justify-center text-brand-beige-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Fechar assistente"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chatbot Content Frame */}
            <div className="flex-1 bg-brand-beige-50 relative">
              <iframe
                src="https://typebot.co/moda-vers-til-499uwth"
                className="w-full h-full border-0"
                title="Assistente Virtual Moda Versátil"
                allow="geolocation; microphone; camera"
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
