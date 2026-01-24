import { client } from '@/lib/microcms';
import type { Member } from '@/app/member/component/_type';
export async function fetchMemberContetns(): Promise<Member[]> {
  const data = await client.get({
    endpoint: 'member',
  });
  return data.contents;
}
export async function fetchAlbumContetns() {
  const data = await client.get({
    endpoint: 'album',
  });
  return data.contents;
}
