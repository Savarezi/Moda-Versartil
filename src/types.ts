export interface Product {
  id: string;
  name: string;
  category: 'Linho' | 'Calças' | 'T-shirts' | 'Acessórios';
  price: number;
  originalPrice?: number;
  description: string;
  image: string; // fallback or cover
  images: string[]; // for integrated mini-carousel/slides
  material: string;
  sizes: string[];
  features: string[];
  inStock: boolean;
  shopeeUrl?: string; // redirect to shopee purchase page
  shopeePrice?: number; // optionally show Shopee price
  isPremium?: boolean;
  badge?: string;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
    styleTag: string; // to match styled recommendation
  }[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  text: string;
  rating: number;
}
