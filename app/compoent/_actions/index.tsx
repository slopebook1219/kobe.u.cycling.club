import { client } from '@/lib/microcms';
export async function fetchTopImage() {
  const data = await client.get({
    endpoint: 'top',
    queries: {
      fields: 'image',
      limit: 100,
    },
  });
  return data.contents;
}
