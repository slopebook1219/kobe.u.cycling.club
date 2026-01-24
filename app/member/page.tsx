import { fetchMemberContetns } from '@/app/member/component/_actions';
import PagePresentational from '@/app/member/presentational';
export default async function member() {
  const results = await fetchMemberContetns();
  if (!results?.length) return null;

  return <PagePresentational results={results} />;
}
