import { PagePresentational } from '@/app/album/[id]/day/[dayNumber]/presentational';
import { fetchAlbumContetns } from '@/app/member/component/_actions';
import type { Album } from '@/app/member/component/_type';
import Image from 'next/image';

type Props = {
  params: {
    id: string;
    dayNumber: string;
  };
};

export default async function DayDetail({ params }: Props) {
  const { id, dayNumber } = await params;

  const albums = await fetchAlbumContetns();
  const album = albums.find((a: Album) => a.id === id);

  if (!album) return null;

  const day = album.days.find((d: Album['days'][number]) => {
    return d.dayNumber === dayNumber;
  });

  if (!day) return null;

  return <PagePresentational sections={day.section} dayNumber={dayNumber} />;
}
