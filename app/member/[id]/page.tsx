import { fetchMemberContetns } from '@/app/member/component/_actions';
import { notFound } from 'next/navigation';
import type { Member } from '@/app/member/component/_type';
import PagePresentational from '@/app/member/[id]/presentational';

type Props = {
  params: {
    id: string;
  };
};

export default async function MemberDetail({ params }: Props) {
  const { id } = await params;
  const members = await fetchMemberContetns();
  const member = members.find((m: Member) => m.id === id);
  if (!member) return null;

  return <PagePresentational member={member} />;
}
