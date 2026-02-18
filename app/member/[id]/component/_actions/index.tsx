import { client } from '@/lib/microcms';
export async function fetchMemberContetns() {
  const data = await client.get({
    endpoint: 'member',
    queries: { limit: 100 },
  });
  return data.contents;
}
