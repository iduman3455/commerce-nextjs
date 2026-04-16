export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
  description?: string; // Opsiyonel alan
}