import { fetchMemberContetns } from '@/app/member/component/_actions';
import PagePresentational from '@/app/member/presentational';
import type { Member } from '@/app/member/component/_type';

export default async function MemberPage() {
  const results = await fetchMemberContetns();
  if (!results || results.length === 0) return null;

  const membersByGrade = results.reduce<Record<string, Member[]>>((acc, member) => {
    const g = member.grade;
    if (!acc[g]) acc[g] = [];
    acc[g].push(member);
    return acc;
  }, {});

  return <PagePresentational membersByGrade={membersByGrade} />;
}
