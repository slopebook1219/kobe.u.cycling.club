import Image from 'next/image';
import type { Member } from '@/app/member/component/_type';

export type Props = {
  member: Member;
};

export default function PagePresentational({ member }: Props) {
  return (
    <main className="max-w-3xl md:max-w-2xl mx-auto px-8 md:pt-24 pt-20 py-12">
      <div className="relative aspect-square mb-6">
        <Image src={member.image.url} alt={member.name} fill className="object-cover rounded" />
      </div>
      <h1 className="text-2xl font-bold mb-4">{member.name}</h1>
      <div className="space-y-1 text-gray-700 mb-6">
        <p>所属：{member.faculty}</p>
        <p>学年：{member.grade}</p>
        <p>出身：{member.hometown}</p>
      </div>
      <div className="leading-relaxed whitespace-pre-line">{member.comment}</div>
    </main>
  );
}
