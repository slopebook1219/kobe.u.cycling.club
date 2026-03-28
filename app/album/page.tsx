import { fetchAlbumContetns } from '@/app/album/component/_actions';
import PagePresentational from '@/app/album/PagePresentational';
export default async function album() {
  const results = await fetchAlbumContetns();
  //エンドポイントからデータが取得できなければページ生成されない
  if (!results?.length) return null;
  return <PagePresentational albums={results} />;
}
