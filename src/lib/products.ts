
import { Product } from './types';

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "Experience exceptional sound quality with these premium wireless headphones. The perfect combination of comfort, design, and audio performance.",
    price: 249.99,
    category: "Electronics",
    stock: 15,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&q=80"
    ]
  },
  {
    id: "2",
    name: "Minimalist Analog Watch",
    description: "A sophisticated timepiece with a clean design, perfect for any occasion. Features a premium leather strap and Japanese movement.",
    price: 179.99,
    category: "Clothing",
    stock: 8,
    images: [
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80"
    ]
  },
  {
    id: "3",
    name: "Smart Home Speaker",
    description: "Transform your home with this intelligent speaker system that combines premium audio with smart assistant technology.",
    price: 129.99,
    category: "Electronics",
    stock: 20,
    images: [
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800&q=80",
      "https://images.unsplash.com/photo-1552252460-77ba4aee8d44?w=800&q=80"
    ]
  },
  {
    id: "4",
    name: "Designer Coffee Table",
    description: "Elevate your living space with this modern coffee table featuring a unique geometric design and premium materials.",
    price: 349.99,
    category: "Home",
    stock: 5,
    images: [
      "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=800&q=80",
      "https://images.unsplash.com/photo-1631115805168-ae57ceb866b5?w=800&q=80"
    ]
  },
  {
    id: "5",
    name: "Professional Camera Lens",
    description: "Capture stunning images with this professional-grade camera lens, featuring superior optics and durable construction.",
    price: 899.99,
    category: "Electronics",
    stock: 3,
    images: [
      "https://images.unsplash.com/photo-1616088886430-ccd86fef0713?w=800&q=80",
      "https://images.unsplash.com/photo-1617005082594-74e8e4b83d49?w=800&q=80"
    ]
  },
  {
    id: "6",
    name: "Organic Cotton T-Shirt",
    description: "Sustainably made from 100% organic cotton, this comfortable t-shirt combines ethical production with timeless style.",
    price: 39.99,
    category: "Clothing",
    stock: 25,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&q=80"
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 3);
};
