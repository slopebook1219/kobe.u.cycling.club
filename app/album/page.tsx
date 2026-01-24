import { fetchAlbumContetns } from '@/app/member/component/_actions';
import PagePresentational from '@/app/album/presentational';
export default async function album() {
  const results = await fetchAlbumContetns();
  if (!results?.length) return null;

  return <PagePresentational results={results} />;
}
