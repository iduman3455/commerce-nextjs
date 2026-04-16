import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative border rounded-xl p-4 bg-white hover:shadow-xl transition-all duration-300">
      {/* Görsel Alanı - Next.js Image ile otomatik optimize edilir */}
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 relative">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill 
          unoptimized
          className="object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      
      {/* Ürün Bilgileri */}
      <div className="mt-4">
        <p className="text-xs text-gray-500 uppercase tracking-widest">{product.category}</p>
        <h3 className="text-lg font-semibold text-gray-800 mt-1">{product.name}</h3>
        
        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold text-orange-600">
            {product.price.toLocaleString('tr-TR')} ₺
          </span>
          
          {/* Stok Durumu */}
          <span className={`text-xs px-2 py-1 rounded-full ${product.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {product.stock > 0 ? 'Stokta' : 'Tükendi'}
          </span>
        </div>
      </div>

      {/* Detay Butonu */}
      <Link 
        href={`/${product.slug}`}
        className="mt-4 block w-full text-center bg-gray-900 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
      >
        İncele
      </Link>
    </div>
  );
}