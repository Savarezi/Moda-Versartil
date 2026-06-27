import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

interface Testimonial {
  id: number;
  author: string;
  rating: number;
  product: string;
  spec: string;
  comment: string;
  date: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: "Patrícia S.",
    rating: 5,
    product: "Calça de Linho com Elastano",
    spec: "Cor: Azul Marinho | Tamanho: G",
    comment: "Já é a segunda calça que compro dessa loja e esse modelo, simplesmente irei comprar mais. Ela é super leve, fresquinha e bem confortável!",
    date: "há 2 dias"
  },
  {
    id: 2,
    author: "Fernanda L.",
    rating: 5,
    product: "Calça Pantalona Alfaiataria",
    spec: "Cor: Bege | Tamanho: M",
    comment: "Perfeita!!! Tenho 1,63m de altura e peso em torno de 68kg. Optei pelo tamanho M e o caimento ficou simplesmente impecável.",
    date: "há 1 semana"
  },
  {
    id: 3,
    author: "Aline M.",
    rating: 5,
    product: "Calça de Linho com Algodão – Cintura Alta & Cordinha",
    spec: "Cor: Cru | Tamanho: G",
    comment: "Tecido excelente e sem nenhum defeito. A calça em linho com elastano e o cinto de cordinha dão um charme único e sofisticado ao look.",
    date: "há 2 semanas"
  },
  {
    id: 4,
    author: "Cláudia O.",
    rating: 5,
    product: "Camisa Linho com Algodão & Calça Cordinha",
    spec: "Cor: Cinza | Tamanho: G",
    comment: "Chegou super rápido! A peça é linda, numa mistura perfeita de linho e tecido de algodão com ótimo caimento. Comprei G porque gosto de peças mais soltinhas. Tem ótimo acabamento e envio nacional ágil.",
    date: "há 1 mês"
  }
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-brand-beige-50/50 border-t border-brand-beige-200/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header da seção */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold-500 font-medium font-sans">
            Experiência Real
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-brand-dark tracking-wide mt-2">
            Opinião de Quem Usa
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold-500/50 mx-auto mt-4"></div>
          <p className="text-xs text-brand-neutral/80 mt-3 font-light leading-relaxed">
            A satisfação e o conforto de nossas clientes são nossa prioridade máxima. Confira depoimentos reais de quem escolheu a elegância do linho Moda Versátil.
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id}
              className="bg-white p-6 border border-brand-beige-200/50 flex flex-col justify-between hover:shadow-md transition-all duration-300 relative group"
            >
              <div>
                {/* Estrelas */}
                <div className="flex space-x-0.5 text-brand-gold-500 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>

                {/* Comentário */}
                <p className="text-xs text-brand-dark/95 italic font-light leading-relaxed mb-6">
                  "{item.comment}"
                </p>
              </div>

              <div>
                {/* Produto Referenciado */}
                <div className="border-t border-brand-beige-200/30 pt-4 mt-auto">
                  <p className="text-[10px] font-semibold text-brand-gold-600 tracking-wider uppercase truncate">
                    {item.product}
                  </p>
                  <p className="text-[9px] text-brand-neutral/60 tracking-wider mt-0.5">
                    {item.spec}
                  </p>
                </div>

                {/* Data */}
                <div className="flex items-center justify-end mt-4">
                  <span className="text-[9px] text-brand-neutral/40 tracking-wider">
                    {item.date}
                  </span>
                </div>
              </div>

              {/* Discreet Quote Icon Accent on hover */}
              <MessageSquare 
                size={18} 
                className="absolute top-6 right-6 text-brand-gold-500/10 group-hover:text-brand-gold-500/20 transition-colors pointer-events-none" 
              />
            </div>
          ))}
        </div>

        {/* Selo de Compra Garantida */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            <p className="text-[11px] font-light text-brand-neutral uppercase tracking-widest">
              Avaliações 100% Reais de Clientes Verificadas
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
