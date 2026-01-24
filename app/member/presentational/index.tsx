import Image from 'next/image';
import Link from 'next/link';
import type { Member } from '@/app/member/component/_type';
import { MemberCard } from '@/app/member/component/_item/MemberCard';
import { MemberCardForSp } from '@/app/member/component/_item/MemberCardForSp';

export type Props = {
  results: Member[];
};

export default function PagePresentational({ results }: Props) {
  return (
    <>
      <div className="hidden md:block">
        <MemberCard results={results} />
      </div>
      <div className="block md:hidden">
        <MemberCardForSp results={results} />
      </div>
    </>
  );
}
