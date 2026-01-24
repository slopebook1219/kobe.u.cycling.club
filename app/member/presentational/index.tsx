import Image from 'next/image';
import Link from 'next/link';
import type { Member } from '@/app/member/component/_type';
import { MemberCard } from '@/app/member/component/_item/MemberCard';
import { MemberCardForSp } from '@/app/member/component/_item/MemberCardForSp';

export type Props = {
  membersByGrade: Record<string, Member[]>;
};

export default function PagePresentational({ membersByGrade }: Props) {
  return (
    <>
      <div className="hidden md:block">
        <MemberCard membersByGrade={membersByGrade} />
      </div>
      <div className="block md:hidden">
        <MemberCardForSp membersByGrade={membersByGrade} />
      </div>
    </>
  );
}
