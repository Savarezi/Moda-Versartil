import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Scissors, Layers, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../data';

export default function About() {
  return (
    <section
      id="sobre"
      className="py-28 bg-[#FCFBF9] px-6 relative overflow-hidden border-y border-brand-beige-200/50"
    >
      {/* Immersive Background Image with Filters, Opacity and Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0 select-none">
        <img
          src="/images/noble_fabric.jpg"
          alt="Textura de tecido nobre"
          className="w-full h-full object-cover bg-center bg-no-repeat blur-[1px] scale-[1.02] opacity-[0.72] transition-opacity duration-1000 select-none pointer-events-none"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Invisible fallback if background image is not present
            (e.target as HTMLElement).style.opacity = '0';
          }}
        />
        {/* Vertical and Horizontal Contrast Gradients to guarantee high legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FCFBF9] via-[#FCFBF9]/40 to-[#FCFBF9]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FCFBF9]/90 via-[#FCFBF9]/30 to-[#FCFBF9]/90" />
      </div>

      {/* Aesthetic closing lines with subtle gold/transparent gradients */}
      <div className="absolute top-0 right-0 w-32 h-[1px] bg-gradient-to-l from-brand-gold-500/40 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[1px] h-32 bg-gradient-to-b from-brand-gold-500/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-[1px] bg-gradient-to-r from-brand-gold-500/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[1px] h-32 bg-gradient-to-t from-brand-gold-500/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Column Left (Essence & Philosophy) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col space-y-8 text-left"
        >
          <div className="flex flex-col space-y-3">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-brand-gold-700">
              {BRAND_INFO.subtitle}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-neutral-900 leading-tight tracking-tight">
              Exclusividade, <br />
              <span className="italic font-medium text-brand-gold-600">elegância</span> e <br />
              versatilidade moderna.
            </h2>
          </div>

          {/* Aesthetic Divisor */}
          <div className="flex items-center gap-4 py-2">
            <div className="h-[1px] w-20 bg-brand-gold-600/60" />
            <span className="text-[9px] font-semibold tracking-[0.3em] uppercase text-brand-gold-600">
              Filosofia
            </span>
          </div>

          {/* Philosophical Block */}
          <div className="border-l-2 border-brand-gold-500/40 pl-6 py-1">
            <p className="font-serif text-base text-neutral-800 italic leading-relaxed">
              "Acreditamos que a sofisticação está na simplicidade inteligente. Peças desenhadas sob medida para acompanhar o ritmo dinâmico e a beleza natural da mulher contemporânea em cada passo."
            </p>
          </div>
        </motion.div>

        {/* Column Right (Detailed Presentation & Pillars) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="lg:col-span-7 flex flex-col space-y-10 text-left relative"
        >
          {/* Secret Luxury Ornament: majestic golden 'M' in background */}
          <div className="absolute -top-12 right-4 text-brand-gold-600/10 font-serif text-[12rem] leading-none select-none pointer-events-none font-light">
            M
          </div>

          {/* Brand Narrative (3 Refined Paragraphs) */}
          <div className="space-y-5 text-neutral-700 font-sans font-light leading-relaxed text-sm sm:text-base">
            {BRAND_INFO.paragraphs.map((paragraph, index) => (
              <p key={index} className="first-letter:font-serif first-letter:text-lg first-letter:font-medium">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Grid of 4 Pillars of the Brand */}
          <div className="pt-8 border-t border-brand-beige-200/60 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Pillar 1: Sofisticação Atemporal */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-4 group cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-brand-gold-500/10 flex items-center justify-center text-brand-gold-600 flex-shrink-0 group-hover:bg-brand-gold-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={16} />
              </div>
              <div className="flex flex-col space-y-1">
                <h4 className="font-serif text-sm font-semibold text-neutral-900 tracking-wide group-hover:text-brand-gold-700 transition-colors">
                  Sofisticação Atemporal
                </h4>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  Design lapidado para transitar entre tendências com máxima classe.
                </p>
              </div>
            </motion.div>

            {/* Pillar 2: Versatilidade Real */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-4 group cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-brand-gold-500/10 flex items-center justify-center text-brand-gold-600 flex-shrink-0 group-hover:bg-brand-gold-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Layers size={16} />
              </div>
              <div className="flex flex-col space-y-1">
                <h4 className="font-serif text-sm font-semibold text-neutral-900 tracking-wide group-hover:text-brand-gold-700 transition-colors">
                  Versatilidade Real
                </h4>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  Peças coordenadas que criam dezenas de combinações inteligentes.
                </p>
              </div>
            </motion.div>

            {/* Pillar 3: Corte Exclusivo */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-4 group cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-brand-gold-500/10 flex items-center justify-center text-brand-gold-600 flex-shrink-0 group-hover:bg-brand-gold-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Scissors size={16} />
              </div>
              <div className="flex flex-col space-y-1">
                <h4 className="font-serif text-sm font-semibold text-neutral-900 tracking-wide group-hover:text-brand-gold-700 transition-colors">
                  Corte Exclusivo
                </h4>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  Alfaiataria que abraça a silhueta com caimento impecável.
                </p>
              </div>
            </motion.div>

            {/* Pillar 4: Qualidade Nobre */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-4 group cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-brand-gold-500/10 flex items-center justify-center text-brand-gold-600 flex-shrink-0 group-hover:bg-brand-gold-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <ShieldCheck size={16} />
              </div>
              <div className="flex flex-col space-y-1">
                <h4 className="font-serif text-sm font-semibold text-neutral-900 tracking-wide group-hover:text-brand-gold-700 transition-colors">
                  Qualidade Nobre
                </h4>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  Seleção rigorosa de matérias-primas de alta durabilidade.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
