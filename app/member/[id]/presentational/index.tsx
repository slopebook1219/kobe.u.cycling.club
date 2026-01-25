import Image from 'next/image';
import type { Member } from '@/app/member/component/_type';

export type Props = {
  member: Member;
};

export default function PagePresentational({ member }: Props) {
  return (
    <main className="max-w-3xl md:max-w-2xl mx-auto px-8 md:pt-24 pt-20 py-12">
      <div className="relative mb-4 px-10">
        <Image
          src={member.image.url}
          alt={member.sei}
          width={member.image.width}
          height={member.image.height}
          className="w-full h-auto object-contain"
        />
      </div>
      <h1 className="text-2xl font-bold mb-2">
        {member.sei} {member.mei}
      </h1>
      <div className="space-y-1 mb-6">
        <p>
          所属：{member.faculty} {member.department}
        </p>
        <p>学年：{member.grade}回生</p>
        <p>出身：{member.hometown}</p>
        <p>趣味：{member.hobby}</p>
        <p>自転車：{member.bike}</p>
      </div>
      <div className="leading-relaxed whitespace-pre-line">{member.comment}</div>
    </main>
  );
}
