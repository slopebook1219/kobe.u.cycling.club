import Image from 'next/image';
import type { Album } from '@/app/member/component/_type';

export type Props = {
  album: Album;
};

export default function PagePresentational({ album }: Props) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <main className="max-w-3xl mx-auto px-6 pt-24 pb-20">
      <header className="mb-10 text-center">
        <p className="text-sm text-gray-500 mb-2">{formatDate(album.date)}</p>
        <h1 className="text-3xl font-bold leading-tight">{album.title}</h1>
      </header>

      <div className="relative aspect-square mb-14 rounded-2xl overflow-hidden">
        <Image src={album.mainImage.url} alt={album.title} fill className="object-cover" />
      </div>
      <p>以下詳細画像</p>

      {album.detailImages.length > 0 && (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-10">
          {album.detailImages.map((image, index) => (
            <div key={index} className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={image.url}
                alt={`${album.title} ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
          <div className="prose prose-gray max-w-none mb-16">
            <p className="whitespace-pre-line">{album.content}</p>
          </div>
        </section>
      )}
    </main>
  );
}
