
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  images: string[];
}

export type ProductCategory = 
  | "Electronics"
  | "Clothing"
  | "Home"
  | "Books"
  | "Beauty"
  | "Sports";
