import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;

  // Gerçek projede burada slug'ı DB'den (C# Backend) sorgularız.
  // Eğer slug ürün tablosunda varsa ürün sayfasını, 
  // kategori tablosunda varsa kategori sayfasını gösteririz.
  
  const mockData: Record<string, { title: string; type: string }> = {
    'kirmizi-buyuk-sapka': { title: 'Kırmızı Büyük Şapka', type: 'Ürün' },
    'elektronik': { title: 'Elektronik Kategorisi', type: 'Kategori' },
  };

  const data = mockData[slug];

  // Eğer DB'de veya mock veride bu slug yoksa 404 döndür
  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-12 rounded-3xl shadow-2xl text-center">
        <span className="text-sm font-bold text-orange-600 uppercase tracking-widest">
          {data.type} Sayfası
        </span>
        <h1 className="text-4xl font-black text-gray-900 mt-2">
          {data.title}
        </h1>
        <p className="text-gray-500 mt-4">
          URL: <span className="font-mono bg-gray-100 px-2 py-1">/{slug}</span>
        </p>
      </div>
    </div>
  );
}