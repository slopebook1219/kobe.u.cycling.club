import { fetchAlbumContetns } from '@/app/member/component/_actions';
import type { Album } from '@/app/member/component/_type';
import PagePresentational from '@/app/album/[id]/presentational';

type Props = {
  params: {
    id: string;
  };
};

export default async function AlbumDetail({ params }: Props) {
  const { id } = await params;

  const albums = await fetchAlbumContetns();
  const album = albums.find((a: Album) => a.id === id);

  if (!album) {
    return null;
  }

  const sortedAlbum: Album = {
    ...album,
    days: [...album.days].sort((a, b) => Number(a.dayNumber) - Number(b.dayNumber)),
  };

  return <PagePresentational album={sortedAlbum} />;
}
