import { fetchMemberContetns } from '@/app/member/component/_actions';
import type { Album } from '@/app/member/component/_type';
import PagePresentational from '@/app/album/[id]/presentational';
import { fetchAlbumContetns } from '@/app/member/component/_actions';

type Props = {
  params: {
    id: string;
  };
};

export default async function AlbumDetail({ params }: Props) {
  const { id } = await params;
  const albums = await fetchAlbumContetns();
  const album = albums.find((a: Album) => a.id === id);

  return <PagePresentational album={album} />;
}
