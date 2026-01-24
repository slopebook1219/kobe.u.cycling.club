import Image from 'next/image';
import Link from 'next/link';
import type { Album } from '@/app/member/component/_type';
import { formatDate } from '@/app/compoent/_utils';

export type Props = {
  album: Album;
};

export default function PagePresentational({ album }: Props) {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-24 pb-20">
      <header className="mb-2 text-center">
        <h1 className="text-3xl font-bold leading-tight">{album.title}</h1>
        <p className="text-sm text-end text-gray-500 mb-2">
          {formatDate(album.start)}〜{formatDate(album.end)}
        </p>
      </header>

      <div className="relative aspect-square mb-5 overflow-hidden">
        <Image src={album.mainImage.url} alt={album.title} fill className="object-cover" />
      </div>

      <div className="pb-3">
        <p className="font-semibold pb-1">活動の概要</p>
        <p className="text-[14px] px-3">{album.content}</p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-8 pt-5">
        {album.days.map((day) => (
          <Link
            key={day.dayNumber}
            href={`/album/${album.id}/day/${day.dayNumber}`}
            className="relative aspect-square overflow-hidden block"
          >
            <Image
              src={day.coverImage.url}
              alt={`${album.title} ${day.dayNumber}日目`}
              fill
              className="object-cover"
            />
            <div className="absolute top-2 left-2 z-10 bg-black/70 text-white text-[16px] px-2 py-1 rounded">
              {day.dayNumber}日目
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
