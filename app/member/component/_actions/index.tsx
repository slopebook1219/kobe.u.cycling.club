import { client } from '@/lib/microcms';
export async function fetchMemberContetns() {
  const data = await client.get({
    endpoint: 'member',
  });
  return data.contents;
}
