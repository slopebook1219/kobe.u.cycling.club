import { client } from '@/lib/microcms';
import type { Member } from '@/app/member/type';
//メンバー紹介フェッチ関数
export async function fetchMemberContetns(): Promise<Member[]> {
  const data = await client.get({
    endpoint: 'member',
    queries: { limit: 100 },
  });
  return data.contents;
}
