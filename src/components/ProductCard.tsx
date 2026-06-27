import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  MessageCircle, 
  ExternalLink, 
  Check, 
  ShoppingBag,
  Info,
  Sparkles
} from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, WHATSAPP_PHONE } from '../data';

interface ProductCardSectionProps {
  likedProducts: Record<string, boolean>;
  onToggleLike: (id: string) => void;
}

export default function ProductCardSection({ 
  likedProducts, 
  onToggleLike
}: ProductCardSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  
  // Track carousel slide indexes per product card in state
  const [cardSlideIndexes, setCardSlideIndexes] = useState<Record<string, number>>({});
  
  // Track active slide in the detailed modal
  const [modalActiveSlideIdx, setModalActiveSlideIdx] = useState<number>(0);

  // Autoplay slideshow for the cards to smoothly cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCardSlideIndexes(prev => {
        const nextIndexes = { ...prev };
        PRODUCTS.forEach(prod => {
          if (prod.images && prod.images.length > 1) {
            const current = prev[prod.id] || 0;
            nextIndexes[prod.id] = (current + 1) % prod.images.length;
          }
        });
        return nextIndexes;
      });
    }, 4500); // 4.5 seconds for an elegant slow slideshow transition
    return () => clearInterval(interval);
  }, []);

  const categories = ['Todos', 'Linho', 'Calças', 'T-shirts', 'Acessórios'];

  const filteredProducts = selectedCategory === 'Todos'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const handlePrevSlide = (productId: string, imagesCount: number, e: React.MouseEvent) => {
    e.stopPropagation(); // prevent modal opening
    setCardSlideIndexes(prev => {
      const currentIdx = prev[productId] || 0;
      const nextIdx = currentIdx === 0 ? imagesCount - 1 : currentIdx - 1;
      return { ...prev, [productId]: nextIdx };
    });
  };

  const handleNextSlide = (productId: string, imagesCount: number, e: React.MouseEvent) => {
    e.stopPropagation(); // prevent modal opening
    setCardSlideIndexes(prev => {
      const currentIdx = prev[productId] || 0;
      const nextIdx = currentIdx === imagesCount - 1 ? 0 : currentIdx + 1;
      return { ...prev, [productId]: nextIdx };
    });
  };

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes[0] || '');
    setModalActiveSlideIdx(0);
  };

  const handleWhatsAppContact = (product: Product, size: string) => {
    const text = `Olá, estou na landing page da Moda Versátil e me encantei pelo "${product.name}"${size ? ` no Tamanho ${size}` : ''}. Gostaria de confirmar disponibilidade e detalhes de frete com uma consultora.`;
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handleShopeeRedirect = (product: Product) => {
    if (product.shopeeUrl) {
      window.open(product.shopeeUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="colecao" className="py-24 bg-white px-6 border-b border-brand-beige-200/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 flex flex-col space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-[1px] w-6 bg-brand-gold-600"></div>
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-brand-gold-700">
              ACERVO DA BOUTIQUE
            </span>
            <div className="h-[1px] w-6 bg-brand-gold-600"></div>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-brand-dark tracking-tight leading-tight">
            Curadoria Exclusiva
          </h2>
          <p className="text-brand-neutral font-sans font-light text-sm">
            Peças nobres e limitadas desenhadas para vestir você com máxima elegância e inteligência de guarda-roupa.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 text-[10px] font-semibold tracking-[0.2em] uppercase rounded-none transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-brand-dark text-white shadow-sm'
                  : 'bg-brand-beige-100 text-brand-neutral hover:bg-brand-beige-200 hover:text-brand-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => {
            const currentSlideIdx = cardSlideIndexes[prod.id] || 0;
            const currentImg = prod.images[currentSlideIdx] || prod.image;

            return (
              <motion.div
                key={prod.id}
                layoutId={`card-${prod.id}`}
                onClick={() => openProductModal(prod)}
                className="group bg-brand-beige-50 border border-brand-beige-200/30 overflow-hidden cursor-pointer flex flex-col h-full hover:shadow-md hover:border-brand-beige-300/60 transition-all duration-300"
              >
                {/* Image Area with Mini Carousel */}
                <div className="relative aspect-[4/5] overflow-hidden bg-brand-beige-100">
                  <div className="absolute inset-0 bg-brand-beige-100 flex items-center justify-center">
                    <AnimatePresence mode="popLayout">
                      <motion.img 
                        key={currentImg}
                        src={currentImg} 
                        alt={`${prod.name} slide ${currentSlideIdx + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 w-full h-full object-cover object-top"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                        referrerPolicy="no-referrer"
                      />
                    </AnimatePresence>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center pointer-events-none opacity-20 bg-gradient-to-tr from-brand-beige-200 to-brand-gold-100">
                      <span className="font-serif text-2xl font-light text-brand-dark tracking-widest uppercase">PEÇA PREMIUM</span>
                    </div>
                  </div>

                  {/* Dark transparent gradient top and bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                  {/* Like Badge */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleLike(prod.id);
                    }}
                    className="absolute top-4 right-4 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white shadow-sm transition-all duration-300 hover:scale-105 z-10"
                    aria-label="Curtir produto"
                  >
                    <Heart 
                      size={15} 
                      className={`${likedProducts[prod.id] ? 'fill-red-500 text-red-500' : 'text-neutral-500'} transition-transform`} 
                    />
                  </button>

                  {/* Category label */}
                  <span className="absolute bottom-4 left-4 px-2.5 py-1 bg-brand-dark/80 text-white text-[8px] font-semibold tracking-widest uppercase z-10">
                    {prod.category}
                  </span>

                  {/* Mini-Carousel Controls on Hover */}
                  {prod.images.length > 1 && (
                    <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <button
                        onClick={(e) => handlePrevSlide(prod.id, prod.images.length, e)}
                        className="w-8 h-8 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-brand-dark hover:bg-brand-gold-100 hover:text-brand-gold-700 transition-all cursor-pointer"
                        aria-label="Foto anterior"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      
                      <button
                        onClick={(e) => handleNextSlide(prod.id, prod.images.length, e)}
                        className="w-8 h-8 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-brand-dark hover:bg-brand-gold-100 hover:text-brand-gold-700 transition-all cursor-pointer"
                        aria-label="Próxima foto"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  )}

                  {/* Slide Indicators inside Card */}
                  {prod.images.length > 1 && (
                    <div className="absolute bottom-4 right-4 flex space-x-1.5 z-10">
                      {prod.images.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            idx === currentSlideIdx ? 'w-4 bg-brand-gold-600' : 'w-1 bg-white/60'
                          }`}
                        ></div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Info and price */}
                <div className="p-6 bg-white flex flex-col flex-grow justify-between border-t border-brand-beige-200/20">
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-lg font-medium text-brand-dark group-hover:text-brand-gold-600 transition-colors duration-300 line-clamp-1">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-brand-neutral font-light line-clamp-2">
                      {prod.material}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-end border-t border-brand-beige-100 mt-5">
                    <span className="text-[9px] text-brand-gold-700 font-semibold tracking-widest uppercase flex items-center gap-1 group-hover:underline">
                      PEDIR PEÇA <ChevronRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Elegant Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-brand-dark/65 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-5xl bg-brand-beige-50 rounded-none shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Top border decoration */}
              <div className="h-1 bg-gradient-to-r from-brand-beige-200 via-brand-gold-600 to-brand-beige-200"></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm text-brand-dark hover:text-brand-gold-600 shadow-sm transition-colors cursor-pointer"
                aria-label="Fechar modal"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto p-6 sm:p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                  
                  {/* Left Column: Rich Photo Gallery */}
                  <div className="md:col-span-6 flex flex-col space-y-4">
                    <div className="relative aspect-[4/5] overflow-hidden bg-white border border-brand-beige-200">
                      <img 
                        src={selectedProduct.images[modalActiveSlideIdx] || selectedProduct.image} 
                        alt={`${selectedProduct.name} ampliada`}
                        className="w-full h-full object-contain object-center transition-all duration-500"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center pointer-events-none opacity-20 bg-gradient-to-tr from-brand-beige-200 to-brand-gold-100">
                        <span className="font-serif text-3xl font-light text-brand-dark tracking-widest uppercase">MODA VERSÁTIL</span>
                      </div>

                      {/* Modal inner arrows */}
                      {selectedProduct.images.length > 1 && (
                        <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none">
                          <button
                            onClick={() => setModalActiveSlideIdx(prev => prev === 0 ? selectedProduct.images.length - 1 : prev - 1)}
                            className="w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center text-brand-dark hover:bg-brand-gold-600 hover:text-white transition-all cursor-pointer pointer-events-auto"
                            aria-label="Slide anterior"
                          >
                            <ChevronLeft size={16} />
                          </button>
                          
                          <button
                            onClick={() => setModalActiveSlideIdx(prev => prev === selectedProduct.images.length - 1 ? 0 : prev + 1)}
                            className="w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center text-brand-dark hover:bg-brand-gold-600 hover:text-white transition-all cursor-pointer pointer-events-auto"
                            aria-label="Próximo slide"
                          >
                            <ChevronRight size={16} />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Gallery Thumbnails */}
                    {selectedProduct.images.length > 1 && (
                      <div className="flex flex-wrap gap-2.5">
                        {selectedProduct.images.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => setModalActiveSlideIdx(i)}
                            className={`w-14 sm:w-16 aspect-[4/5] bg-white border overflow-hidden p-0.5 transition-all ${
                              i === modalActiveSlideIdx 
                                ? 'border-brand-gold-600 scale-105' 
                                : 'border-brand-beige-200 hover:border-brand-beige-300'
                            }`}
                          >
                            <img 
                              src={img} 
                              alt={`miniatura ${i + 1}`} 
                              className="w-full h-full object-contain object-center"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = 'none';
                              }}
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Descriptions & Actions */}
                  <div className="md:col-span-6 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 bg-brand-gold-100 text-brand-gold-700 text-[8px] tracking-widest font-bold uppercase">
                          {selectedProduct.category}
                        </span>
                        <span className="text-[10px] text-brand-neutral font-medium uppercase tracking-wider">
                          Curadoria Lenta
                        </span>
                      </div>

                      <h3 className="font-serif text-3xl font-light text-brand-dark leading-tight tracking-tight">
                        {selectedProduct.name}
                      </h3>

                      {/* Fabric / Material Tag */}
                      <div className="py-2.5 px-4 bg-brand-beige-100/60 border border-brand-beige-200/50 flex flex-col space-y-1">
                        <span className="text-[9px] text-brand-neutral tracking-widest uppercase font-semibold">Composição e Tecido</span>
                        <span className="text-xs text-brand-dark font-medium font-serif italic">{selectedProduct.material}</span>
                      </div>

                      {/* Full description */}
                      <p className="text-xs sm:text-sm text-brand-neutral leading-relaxed font-light font-sans">
                        {selectedProduct.description}
                      </p>

                      {/* Available Sizes selector */}
                      <div className="space-y-2.5">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] text-brand-dark font-semibold tracking-wider uppercase">Tamanhos Disponíveis</span>
                        </div>
                        
                        <div className="flex gap-2">
                          {selectedProduct.sizes.map((sz) => (
                            <button
                              key={sz}
                              onClick={() => setSelectedSize(sz)}
                              className={`px-4 py-2 text-xs font-semibold tracking-wider transition-all border ${
                                sz === selectedSize
                                  ? 'bg-brand-dark text-white border-brand-dark'
                                  : 'bg-white text-brand-dark border-brand-beige-200 hover:border-brand-neutral'
                              }`}
                            >
                              {sz}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Technical features list */}
                      <div className="space-y-1.5 pt-2">
                        <span className="text-[9px] text-brand-dark font-bold tracking-widest uppercase block">Destaques da Modelagem</span>
                        <ul className="space-y-1 text-xs text-brand-neutral font-sans font-light">
                          {selectedProduct.features.map((feat, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <Check size={12} className="text-brand-gold-600 flex-shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Double CTAs: WhatsApp & Shopee */}
                    <div className="pt-6 border-t border-brand-beige-200 flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => handleWhatsAppContact(selectedProduct, selectedSize)}
                        className="flex-1 px-6 py-4 bg-brand-dark text-white hover:bg-brand-gold-600 text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 rounded-none cursor-pointer"
                      >
                        <MessageCircle size={16} />
                        Falar com Consultora
                      </button>

                      {selectedProduct.shopeeUrl && (
                        <button
                          onClick={() => handleShopeeRedirect(selectedProduct)}
                          className="flex-1 px-6 py-4 bg-brand-gold-100 hover:bg-brand-gold-500 hover:text-white text-brand-gold-700 text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 rounded-none cursor-pointer"
                        >
                          <ShoppingBag size={15} />
                          Comprar na Shein
                          <ExternalLink size={12} />
                        </button>
                      )}
                    </div>

                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
