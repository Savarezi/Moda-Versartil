import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RotateCcw, Heart, Check, Plus, ShoppingBag, MessageSquare } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data';

// Definition of interfaces
interface LookItem {
  id: string;
  name: string;
  category: 'tops' | 'bottoms' | 'accessories';
  image: string;
  price?: string;
}

// Local Database populated with existing assets
const TOPS_ITEMS: LookItem[] = [
  { id: 'top-1', name: 'T-shirt Premium', category: 'tops', image: '/images/T-shirts.png' },
  { id: 'top-2', name: 'T-shirt Elegance', category: 'tops', image: '/images/T-shirts1.png' },
  { id: 'top-3', name: 'T-shirt Classic', category: 'tops', image: '/images/T-shirts2.png' },
  { id: 'top-4', name: 'T-shirt Soft', category: 'tops', image: '/images/T-shirts3.png' },
  { id: 'top-5', name: 'Conjunto Linho Prime', category: 'tops', image: '/images/Conjunto.png' },
  { id: 'top-6', name: 'Conjunto Linho Clean', category: 'tops', image: '/images/Conjunto1.png' },
];

const BOTTOMS_ITEMS: LookItem[] = [
  { id: 'bottom-1', name: 'Calça Linho & Algodão', category: 'bottoms', image: '/images/Calça.png' },
  { id: 'bottom-2', name: 'Calça Detalhe Ilhós', category: 'bottoms', image: '/images/Calça1.png' },
  { id: 'bottom-3', name: 'Calça Linho & Elastano', category: 'bottoms', image: '/images/linho.png' },
  { id: 'bottom-4', name: 'Calça Detalhe Botões', category: 'bottoms', image: '/images/linho1.png' }, // mapped to existing linho1.png
];

const ACCESSORIES_ITEMS: LookItem[] = [
  { id: 'acc-1', name: 'Chaveiro Luxo', category: 'accessories', image: '/images/Chaveiros2.png' }, // mapped to existing Chaveiros2.png
  { id: 'acc-2', name: 'Chaveiro Charme', category: 'accessories', image: '/images/Chaveiros3.png' }, // mapped to existing Chaveiros3.png
  { id: 'acc-3', name: 'Chaveiro Elegance', category: 'accessories', image: '/images/Chaveiros4.png' }, // mapped to existing Chaveiros4.png
  { id: 'acc-4', name: 'Chaveiro Delicado', category: 'accessories', image: '/images/Chaveiros5.png' }, // mapped to existing Chaveiros5.png
];

export default function MixMatch() {
  const [activeTab, setActiveTab] = useState<'tops' | 'bottoms' | 'accessories'>('tops');
  
  // Selected state
  const [selectedTop, setSelectedTop] = useState<LookItem | null>(null);
  const [selectedBottom, setSelectedBottom] = useState<LookItem | null>(null);
  const [selectedAccessory, setSelectedAccessory] = useState<LookItem | null>(null);
  
  // Like look state
  const [isLiked, setIsLiked] = useState(false);

  // Get active items list based on selected tab
  const getItemsList = () => {
    switch (activeTab) {
      case 'tops':
        return TOPS_ITEMS;
      case 'bottoms':
        return BOTTOMS_ITEMS;
      case 'accessories':
        return ACCESSORIES_ITEMS;
      default:
        return [];
    }
  };

  // Toggle selection
  const handleSelectItem = (item: LookItem) => {
    if (item.category === 'tops') {
      setSelectedTop(prev => prev?.id === item.id ? null : item);
    } else if (item.category === 'bottoms') {
      setSelectedBottom(prev => prev?.id === item.id ? null : item);
    } else if (item.category === 'accessories') {
      setSelectedAccessory(prev => prev?.id === item.id ? null : item);
    }
  };

  // Check if item is selected
  const isItemSelected = (item: LookItem) => {
    if (item.category === 'tops') return selectedTop?.id === item.id;
    if (item.category === 'bottoms') return selectedBottom?.id === item.id;
    if (item.category === 'accessories') return selectedAccessory?.id === item.id;
    return false;
  };

  // Reset selections
  const handleReset = () => {
    setSelectedTop(null);
    setSelectedBottom(null);
    setSelectedAccessory(null);
    setIsLiked(false);
  };

  // Total items selected count
  const hasSelections = selectedTop || selectedBottom || selectedAccessory;

  // Send to WhatsApp
  const handleConsultAvailability = () => {
    if (!hasSelections) return;

    const topName = selectedTop ? selectedTop.name : 'Nenhuma peça selecionada';
    const bottomName = selectedBottom ? selectedBottom.name : 'Nenhuma peça selecionada';
    const accName = selectedAccessory ? selectedAccessory.name : 'Nenhum acessório selecionado';

    const text = `Olá! Montei um look personalizado no site da Moda Versátil e gostaria de saber a disponibilidade destas peças:\n\n- Parte Superior: ${topName}\n- Parte Inferior: ${bottomName}\n- Acessório: ${accName}\n\nGostaria de falar com uma consultora sobre como adquirir estas peças!`;
    
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="monte-seu-look" className="py-24 bg-[#FCFBF9] px-6 relative overflow-hidden border-b border-brand-beige-200/50">
      
      {/* Dynamic Background Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-gold-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full bg-[#1B4D3E]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 flex flex-col space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-[1px] w-6 bg-brand-gold-600" />
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-brand-gold-700">
              EXPERIÊNCIA INTERATIVA
            </span>
            <div className="h-[1px] w-6 bg-brand-gold-600" />
          </div>
          <h2 className="font-serif text-4xl font-extralight text-brand-dark tracking-wide leading-tight">
            Monte seu Look
          </h2>
          <p className="text-brand-neutral font-sans font-light text-sm">
            Combine peças exclusivas de alfaiataria fina e acessórios de luxo, visualize em tempo real e consulte a disponibilidade imediata de seu visual personalizado.
          </p>
        </div>

        {/* Main Grid: Selection vs Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: Selection Panel (5 Columns) */}
          <div id="selection-panel" className="lg:col-span-5 bg-white border border-brand-beige-200/60 p-6 shadow-sm rounded-none flex flex-col space-y-6 h-[570px] relative z-10">
            
            {/* Header of Selection Panel */}
            <div className="flex items-center justify-between pb-4 border-b border-brand-beige-100">
              <div className="flex items-center gap-2 text-brand-dark">
                <Sparkles size={16} className="text-brand-gold-600" />
                <h3 className="font-serif text-base tracking-wide font-medium">Estúdio de Estilo</h3>
              </div>
              
              {hasSelections && (
                <button
                  id="reset-look-btn"
                  onClick={handleReset}
                  className="flex items-center gap-1 text-xs text-brand-neutral hover:text-brand-gold-700 font-sans tracking-wider uppercase transition-colors"
                >
                  <RotateCcw size={12} />
                  Limpar
                </button>
              )}
            </div>

            {/* Navigation Tabs (3 buttons grid) */}
            <div className="grid grid-cols-3 gap-2">
              <button
                id="tab-tops"
                onClick={() => setActiveTab('tops')}
                className={`py-2.5 text-[10px] font-sans font-bold tracking-widest uppercase transition-all duration-300 border ${
                  activeTab === 'tops'
                    ? 'bg-white text-brand-dark border-brand-gold-600 shadow-sm'
                    : 'bg-brand-beige-100/40 text-brand-neutral border-transparent hover:bg-brand-beige-100/70'
                }`}
              >
                Partes Superiores
              </button>
              
              <button
                id="tab-bottoms"
                onClick={() => setActiveTab('bottoms')}
                className={`py-2.5 text-[10px] font-sans font-bold tracking-widest uppercase transition-all duration-300 border ${
                  activeTab === 'bottoms'
                    ? 'bg-white text-brand-dark border-brand-gold-600 shadow-sm'
                    : 'bg-brand-beige-100/40 text-brand-neutral border-transparent hover:bg-brand-beige-100/70'
                }`}
              >
                Partes Inferiores
              </button>
              
              <button
                id="tab-accessories"
                onClick={() => setActiveTab('accessories')}
                className={`py-2.5 text-[10px] font-sans font-bold tracking-widest uppercase transition-all duration-300 border ${
                  activeTab === 'accessories'
                    ? 'bg-white text-brand-dark border-brand-gold-600 shadow-sm'
                    : 'bg-brand-beige-100/40 text-brand-neutral border-transparent hover:bg-brand-beige-100/70'
                }`}
              >
                Acessórios
              </button>
            </div>

            {/* List of Items with Scroll Vertical (Limited to 340px) */}
            <div className="flex-1 overflow-y-auto max-h-[340px] pr-1 space-y-3 scrollbar-thin">
              {getItemsList().map((item) => {
                const isSelected = isItemSelected(item);
                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelectItem(item)}
                    className={`flex items-center justify-between p-3 border transition-all duration-300 cursor-pointer select-none group ${
                      isSelected
                        ? 'border-brand-gold-600 bg-brand-gold-500/5'
                        : 'border-brand-beige-200/50 hover:border-brand-gold-500/50 hover:bg-brand-beige-100/10'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Image Preview Container */}
                      <div className="w-16 h-16 bg-[#FCFBF9] border border-brand-beige-200/40 overflow-hidden flex items-center justify-center flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      
                      <div className="flex flex-col text-left">
                        <span className="font-serif text-sm font-semibold text-brand-dark tracking-wide">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-brand-neutral tracking-wider uppercase mt-1 font-sans">
                          {item.category === 'tops' ? 'Superior' : item.category === 'bottoms' ? 'Inferior' : 'Acessório'}
                        </span>
                      </div>
                    </div>

                    {/* Checkbox Circle indicator */}
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isSelected 
                        ? 'bg-brand-gold-600 border-brand-gold-600 text-white' 
                        : 'border-brand-beige-300 group-hover:border-brand-gold-500'
                    }`}>
                      {isSelected && <Check size={12} strokeWidth={3} />}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT SIDE: Viewport Canvas (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Dark Styled Showcase Canvas (Aspect Ratio approx 16/10) */}
            <div className="bg-neutral-900 border border-neutral-800 p-8 shadow-xl relative overflow-hidden h-[460px] flex flex-col justify-between group">
              
              {/* Radial gradient of light at the top */}
              <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-brand-gold-500/15 via-transparent to-transparent pointer-events-none" />

              {/* Floating Favorite Button */}
              <button
                id="like-look-btn"
                onClick={() => setIsLiked(!isLiked)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black/45 hover:bg-black/75 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group-hover:scale-105"
                aria-label="Favoritar combinação"
              >
                <Heart
                  size={18}
                  className={`transition-colors duration-300 ${
                    isLiked ? 'fill-pink-500 text-pink-500' : 'text-neutral-300'
                  }`}
                />
              </button>

              {/* Showcase Frame */}
              <div className="flex-1 flex items-center justify-center relative z-10 w-full">
                
                {/* Dynamic Composition Grid */}
                <div className="grid grid-cols-2 gap-8 w-full max-w-lg items-center justify-center">
                  
                  {/* Category A: Tops */}
                  <div className="aspect-[3/4] border border-dashed border-neutral-700 flex flex-col items-center justify-center p-3 relative bg-neutral-950/40 group/top overflow-hidden">
                    <AnimatePresence mode="wait">
                      {selectedTop ? (
                        <motion.div
                          key={selectedTop.id}
                          initial={{ opacity: 0, scale: 0.92 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.92 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 w-full h-full"
                        >
                          <img
                            src={selectedTop.image}
                            alt={selectedTop.name}
                            className="w-full h-full object-cover object-top"
                            referrerPolicy="no-referrer"
                          />
                          {/* Label overlay on hover */}
                          <div className="absolute bottom-0 inset-x-0 bg-neutral-950/80 backdrop-blur-xs py-2 px-3 text-center border-t border-brand-gold-600/30">
                            <p className="font-serif text-[11px] text-brand-beige-50/90 font-semibold truncate">
                              {selectedTop.name}
                            </p>
                          </div>
                        </motion.div>
                      ) : (
                        <div className="flex flex-col items-center justify-center text-center space-y-2 p-4">
                          <Plus size={20} className="text-neutral-600 animate-pulse" />
                          <p className="text-[10px] uppercase font-sans tracking-widest text-neutral-500 font-bold">
                            PARTE SUPERIOR
                          </p>
                          <p className="text-[11px] text-neutral-600 font-light max-w-[120px]">
                            Selecione um item ao lado
                          </p>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Category B: Bottoms */}
                  <div className="aspect-[3/4] border border-dashed border-neutral-700 flex flex-col items-center justify-center p-3 relative bg-neutral-950/40 group/bottom overflow-hidden">
                    <AnimatePresence mode="wait">
                      {selectedBottom ? (
                        <motion.div
                          key={selectedBottom.id}
                          initial={{ opacity: 0, scale: 0.92 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.92 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 w-full h-full"
                        >
                          <img
                            src={selectedBottom.image}
                            alt={selectedBottom.name}
                            className="w-full h-full object-cover object-top"
                            referrerPolicy="no-referrer"
                          />
                          {/* Label overlay on hover */}
                          <div className="absolute bottom-0 inset-x-0 bg-neutral-950/80 backdrop-blur-xs py-2 px-3 text-center border-t border-brand-gold-600/30">
                            <p className="font-serif text-[11px] text-brand-beige-50/90 font-semibold truncate">
                              {selectedBottom.name}
                            </p>
                          </div>
                        </motion.div>
                      ) : (
                        <div className="flex flex-col items-center justify-center text-center space-y-2 p-4">
                          <Plus size={20} className="text-neutral-600 animate-pulse" />
                          <p className="text-[10px] uppercase font-sans tracking-widest text-neutral-500 font-bold">
                            PARTE INFERIOR
                          </p>
                          <p className="text-[11px] text-neutral-600 font-light max-w-[120px]">
                            Selecione uma calça ao lado
                          </p>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>

                {/* Floating Accessory Pocket */}
                <div className="absolute bottom-4 left-6 z-10 flex flex-col items-center space-y-1">
                  <span className="text-[9px] font-sans text-neutral-500 tracking-wider uppercase font-semibold">
                    Acessório
                  </span>
                  <div className={`w-14 h-14 rounded-full border flex items-center justify-center overflow-hidden bg-neutral-950 transition-all duration-300 ${
                    selectedAccessory ? 'border-brand-gold-600 ring-2 ring-brand-gold-600/20 shadow-md' : 'border-dashed border-neutral-700'
                  }`}>
                    <AnimatePresence mode="wait">
                      {selectedAccessory ? (
                        <motion.img
                          key={selectedAccessory.id}
                          src={selectedAccessory.image}
                          alt={selectedAccessory.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <Plus size={14} className="text-neutral-500" />
                      )}
                    </AnimatePresence>
                  </div>
                </div>

              </div>

              {/* Composition Real-time Summary Bar */}
              <div className="border-t border-neutral-800/80 pt-4 flex flex-col sm:flex-row items-center justify-between text-neutral-400 text-xs gap-3">
                <p className="font-serif italic font-light tracking-wide text-neutral-300 text-center sm:text-left">
                  {hasSelections ? (
                    <span>
                      Combinação: {[selectedTop?.name, selectedBottom?.name, selectedAccessory?.name].filter(Boolean).join(' + ')}
                    </span>
                  ) : (
                    "Monte sua combinação única escolhendo as peças e acessórios."
                  )}
                </p>
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest flex items-center gap-1">
                  <ShoppingBag size={10} className="text-brand-gold-600" /> Curadoria Exclusiva
                </span>
              </div>

            </div>

            {/* ACTION BUTTON AREA: Consult via WhatsApp */}
            <div className="bg-white border border-brand-beige-200/50 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
              <div className="text-left">
                <h4 className="font-serif text-sm font-semibold text-brand-dark tracking-wide">
                  Gostou da combinação montada?
                </h4>
                <p className="text-xs text-brand-neutral font-light mt-0.5 leading-relaxed">
                  Consulte a disponibilidade de tamanhos e opções com nossa consultoria personalizada.
                </p>
              </div>

              <button
                id="consult-whatsapp-btn"
                disabled={!hasSelections}
                onClick={handleConsultAvailability}
                className={`py-3 px-8 text-xs font-sans font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-2 border. transition-all duration-300 ${
                  hasSelections
                    ? 'bg-brand-dark text-white hover:bg-brand-gold-600 cursor-pointer shadow-md'
                    : 'bg-neutral-200 text-neutral-400 opacity-40 cursor-not-allowed'
                }`}
              >
                <MessageSquare size={14} />
                Consultar no WhatsApp
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
