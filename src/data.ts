import { Product, Testimonial } from './types';

// Cover/Hero fallback when custom image isn't loaded yet
export const HERO_IMAGE = '/images/Conjunto.png'; 

export const PRODUCTS: Product[] = [
  {
    id: 'prod-calca-premium',
    name: 'Calça de Linho com Algodão Feminina – Cintura Alta e Caimento Solto E Cordinha',
    category: 'Calças',
    price: 279.00,
    originalPrice: 329.00,
    description: 'A calça premium que é o maior sucesso de vendas da nossa loja! Confeccionada com uma mescla nobre de linho e algodão, apresenta modelagem de cintura alta super elegante, caimento levemente solto e moderno, com um delicado cordão de amarração no cós que ajusta a peça perfeitamente ao seu corpo. Uma peça versátil que transita perfeitamente do trabalho ao final de semana com extremo conforto e sofisticação.',
    image: '/images/Calça de Linho com Algodão Feminina 1.png',
    images: [
      '/images/Calça de Linho com Algodão Feminina 1.png',
      '/images/Calça de Linho com Algodão Feminina 2.png',
      '/images/Calça de Linho com Algodão Feminina 3.png',
      '/images/Calça de Linho com Algodão Feminina 4.png',
      '/images/Calça de Linho com Algodão Feminina 5.png',
      '/images/Calça de Linho com Algodão Feminina 6.png',
      '/images/Calça de Linho com Algodão Feminina 7.png'
    ],
    material: 'Mescla Premium de Linho Soft & Algodão Nobre',
    sizes: ['P', 'M', 'G'],
    features: [
      'Produto Premium mais vendido – O preferido das clientes',
      'Cintura alta elegante com ajuste anatômico por cordão',
      'Modelagem com caimento solto e fluido de alfaiataria fina',
      'Fibras naturais de alta respirabilidade para conforto o dia todo'
    ],
    inStock: true,
    isPremium: true,
    badge: 'Mais Vendido ⭐',
    shopeeUrl: 'https://onelink.shein.com/40/5u00gic2rajd'
  },
  {
    id: 'prod-linho',
    name: 'Conjunto em linho disponível!!!',
    category: 'Linho',
    price: 389.00,
    originalPrice: 459.00,
    description: 'Conjunto impecável de camisa e calça fluida confeccionado em puro linho premium de cultivo sustentável. Oferece caimento majestoso, leveza e frescor indiscutível. Perfeito para mulheres sofisticadas que não abrem mão do conforto absoluto e da elegância natural nos seus dias dinâmicos.',
    image: '/images/Conjunto.png',
    images: [
      '/images/Conjunto.png',
      '/images/Conjunto1.png',
      '/images/Conjunto2.png',
      '/images/Conjunto3.png',
      '/images/linho.png'
    ],
    material: '100% Linho Puro Orgânico Certificado',
    sizes: ['P', 'M', 'G', 'GG'],
    features: [
      'Modelagem sob medida com acabamento de alfaiataria premium',
      'Camisa com botões de madrepérola natural',
      'Calça fluida com cós elástico anatômico e bolsos faca'
    ],
    inStock: true,
    shopeeUrl: 'https://onelink.shein.com/40/5u00gic2rajd'
  },
  {
    id: 'prod-calca-ilhos',
    name: 'Calça em linho com algodão, com detalhe de ilhós na frente!',
    category: 'Calças',
    price: 249.00,
    description: 'Calça de modelagem pantacourt/reta sofisticada, unindo a estrutura do algodão nobre com o frescor característico do linho. Apresenta um elegante detalhe de ilhós com amarração artesanal no cós que acrescenta charme rústico e contemporâneo à produção diária.',
    image: '/images/Calça.png',
    images: [
      '/images/Calça.png',
      '/images/Calça1.png',
      '/images/Calça2.png'
    ],
    material: '55% Linho Nobre, 45% Algodão Premium',
    sizes: ['M', 'G', 'GG'],
    features: [
      'Passantes decorativos com detalhes em ilhós banhados',
      'Costura reforçada em tom sobre tom',
      'Bolsos traseiros embutidos funcionais'
    ],
    inStock: true,
    shopeeUrl: 'https://onelink.shein.com/40/5u00gic2rajd'
  },
  {
    id: 'prod-calca-botoes',
    name: 'Calça de linho e elastano com detalhe de botões !!',
    category: 'Calças',
    price: 269.00,
    description: 'Calça de caimento impecável que combina o visual rústico chic do linho com o conforto e flexibilidade proporcionados pelo elastano. Detalhes de abotoamentos frontais decorativos e bolsos utilitários discretos. Ajusta-se suavemente à silhueta, sendo ideal para transições elegantes entre reuniões e lazer.',
    image: '/images/linho.png',
    images: [
      '/images/linho.png',
      '/images/linho1.png',
      '/images/linho2.png'
    ],
    material: '70% Linho Genuíno, 28% Viscose, 2% Elastano de Alta Densidade',
    sizes: ['M', 'G', 'GG'],
    features: [
      'Efeito stretch que acompanha o movimento',
      'Abotoamento frontal lateral com botões de coco natural',
      'Cós semi-estruturado que alonga visualmente a silhueta'
    ],
    inStock: true,
    shopeeUrl: 'https://api-shein.shein.com/h5/sharejump/appjump?link=RqoJiYllLMt_8_1&localcountry=BR&shc=2_RqoJiYllLMt',
    shopeePrice: 269.00
  },
  {
    id: 'prod-tshirts',
    name: 'T-shirts',
    category: 'T-shirts',
    price: 129.00,
    originalPrice: 149.00,
    description: 'Camiseta de luxo com modelagem exclusiva ampla e fluida desenvolvida com algodão egípcio de fibra super longa. Proporciona um toque extremamente aveludado, excelente respirabilidade e estabilidade após as lavagens. Veste perfeitamente como tamanho único do P ao G devido ao seu corte versátil.',
    image: '/images/T-shirts.png',
    images: [
      '/images/T-shirts.png',
      '/images/T-shirts1.png',
      '/images/T-shirts2.png',
      '/images/T-shirts3.png',
      '/images/T-shirts4.png',
      '/images/T-shirts5.png'
    ],
    material: '100% Algodão Egípcio Nobre Penteado',
    sizes: ['Tamanho Único (Veste P ao G)'],
    features: [
      'Modelagem descontraída e contemporânea (Boxy fit)',
      'Gola em ribana canelada encorpada com costura dupla',
      'Cores pigmentadas organicamente que não desbotam'
    ],
    inStock: true,
    shopeeUrl: 'https://onelink.shein.com/40/5u00gic2rajd'
  },
  {
    id: 'prod-camisa',
    name: 'Camisa em linho disponível!!',
    category: 'Linho',
    price: 189.00,
    originalPrice: 229.00,
    description: 'Camisa clássica confeccionada em linho soft premium pré-lavado, garantindo um toque incrivelmente leve e caimento fluido impecável. Possui gola tradicional, punhos elegantes e botões discretos de altíssima qualidade. Uma peça indispensável para criar looks sofisticados, frescos e cheios de elegância.',
    image: '/images/Camisa.png',
    images: [
      '/images/Camisa.png',
      '/images/Camisa 1.png'
    ],
    material: '80% Linho Soft Premium, 20% Algodão Egípcio',
    sizes: ['P', 'M', 'G', 'GG'],
    features: [
      'Gola de alfaiataria clássica estruturada',
      'Mangas versáteis com martingale para ajuste opcional de altura',
      'Fibras naturais de altíssima respirabilidade'
    ],
    inStock: true,
    shopeeUrl: 'https://onelink.shein.com/40/5u00gic2rajd'
  },
  {
    id: 'prod-chaveiros',
    name: 'Chaveiros lindíssimos',
    category: 'Acessórios',
    price: 49.00,
    description: 'O toque final de requinte para bolsas e chaves. Chaveiro confeccionado manualmente com aparas de couro nobre e mosquetão de alta resistência banhado a ouro 18k. Um charme exclusivo e delicado que expressa bom gosto em cada detalhe.',
    image: '/images/Chaveiros2.png',
    images: [
      '/images/Chaveiros2.png',
      '/images/Chaveiros3.png',
      '/images/Chaveiros4.png',
      '/images/Chaveiros5.png',
      '/images/Chaveiros6.png',
      '/images/Chaveiros7.png',
      '/images/Chaveiros8.png'
    ],
    material: 'Couro Bovino Nobre Reutilizado / Liga Banhada a Ouro 18k',
    sizes: ['Único'],
    features: [
      'Fabricação 100% artesanal e sustentável',
      'Acabamento polido de longa duração',
      'Embalagem elegante em sachê de algodão cru da marca'
    ],
    inStock: true,
    shopeeUrl: 'https://onelink.shein.com/40/5u00gic2rajd'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    author: 'Mariana Vasconcellos',
    role: 'Arquiteta & Designer',
    text: 'O Conjunto de Linho é simplesmente espetacular. Consigo usá-lo tanto para visitar obras com tênis quanto para apresentar projetos executivos importantes com um belo salto dourado. O caimento e o acabamento são de marca internacional.',
    rating: 5
  },
  {
    id: 't-2',
    author: 'Beatriz Alencar',
    role: 'Especialista em Organização',
    text: 'A calça com botões veste incrivelmente bem! O elastano dá uma flexibilidade única ao linho, sem perder aquele aspecto nobre que eu tanto amo. Além disso, o atendimento pelo WhatsApp foi carinhoso e super assertivo.',
    rating: 5
  },
  {
    id: 't-3',
    author: 'Juliana Mendes',
    role: 'Consultora de Imagem',
    text: 'Recomendo a Moda Versátil para todas as minhas clientes. A curadoria de tecidos inteligentes, a modelagem que abraça a silhueta real e a altíssima versatilidade tornam o guarda-roupa muito mais inteligente e luxuoso.',
    rating: 5
  }
];

export const WHATSAPP_PHONE = '5511951347742'; // WhatsApp number provided: +55 (11) 95134-7742
export const INSTAGRAM_HANDLE = '@moda.versatiil'; 
export const INSTAGRAM_URL = 'https://www.instagram.com/moda.versatiil/#';
export const CONTACT_EMAIL = 'patriciasavarezioliveira@gmail.com';

export const BRAND_INFO = {
  subtitle: 'Nossa Essência',
  title: 'Exclusividade, elegância e versatilidade moderna.',
  philosophyTitle: 'Acreditamos que a sofisticação está na simplicidade inteligente.',
  paragraphs: [
    'A Moda Versátil nasceu com o propósito inabalável de descomplicar o closet da mulher contemporânea. Criamos uma curadoria criteriosa de peças de alta costura e alfaiataria fina, focada em tecidos nobres, paleta neutra e alta durabilidade geracional.',
    'Acreditamos que vestir-se bem é um poderoso exercício de autoconfiança. Por isso, selecionamos apenas matérias-primas de alta qualidade que acariciam a pele — como o linho nobre respirável, o algodão egípcio sedoso de fibra longa e tecidos de caimento impecável.',
    'Mais do que vender peças sofisticadas, nossa missão é proporcionar a você um guarda-roupa inteligente e versátil, onde cada item se conecta intuitivamente com outros, multiplicando as possibilidades de looks elegantes com o mínimo de esforço diário.'
  ]
};
