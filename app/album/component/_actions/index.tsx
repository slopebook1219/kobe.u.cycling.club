import { client } from '@/lib/microcms';
//活動記録フェッチ関数
export async function fetchAlbumContetns() {
  const data = await client.get({
    endpoint: 'album',
    queries: { limit: 100 },
  });
  return data.contents;
}
