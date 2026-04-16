import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';

// Mock Veri: Gerçekte bu veriyi C# Backend API'ndan 'fetch' ile çekeceğiz
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    slug:"test-1",
    name: 'Xiaomi 14 Ultra',
    price: 74999,
    imageUrl: 'https://placehold.co/400x400?text=Xiaomi+14+Ultra',
    category: 'Akıllı Telefon',
    stock: 15,
    description: 'Efsanevi Leica optik sistemli amiral gemisi.'
  },
  {
    id: '2',
    slug: 'test-2',
    name: 'Redmi Watch 4',
    price: 3299,
    imageUrl: 'https://placehold.co/400x400?text=Redmi+Watch+4',
    category: 'Aksesuar',
    stock: 50
  },
  {
    id: '3',
    slug : 'test-3',
    name: 'Xiaomi Robot Vacuum S10',
    price: 12450,
    imageUrl: 'https://placehold.co/400x400?text=Robot+Vacuum',
    category: 'Ev Aletleri',
    stock: 0 // Tükendi durumunu test etmek için
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Başlık Alanı */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Evofone Mağazası
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            En yeni Xiaomi teknolojilerini keşfedin.
          </p>
        </div>

        {/* Ürün Listesi Izgarası (Grid) */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}