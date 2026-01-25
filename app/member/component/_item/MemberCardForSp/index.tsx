import { Member } from '@/app/member/component/_type';
import Link from 'next/link';
import Image from 'next/image';
import { gradeOrder } from '@/app/member/component/_contant';

export type Props = {
  membersByGrade: Record<string, Member[]>;
};

export function MemberCardForSp({ membersByGrade }: Props) {
  return (
    <section className="max-w-6xl mx-auto py-18 px-2">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold mb-3">メンバー紹介</h2>
        <p className="text-gray-600 leading-relaxed text-sm">
          メンバー紹介です。
          <br />
          学年を越えて日々さまざまな活動に取り組んでいます。
        </p>
      </div>

      <div className="space-y-12">
        {gradeOrder.map((grade) => {
          const members = membersByGrade[grade];
          if (!members || members.length === 0) return null;

          return (
            <section key={grade}>
              <h3 className="text-lg font-semibold mb-4 text-center">{grade}回生</h3>
              <div className="grid grid-cols-2 gap-4">
                {members.map((member) => (
                  <Link key={member.id} href={`/member/${member.id}`} className="block">
                    <div className="overflow-hidden border border-gray-300 bg-white">
                      <div className="relative aspect-square">
                        <Image
                          src={member.image.url}
                          alt={member.sei}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center py-2">
                        <p className="text-xs text-gray-500">{member.faculty}</p>
                        <p className="text-xs text-gray-500">{member.department}</p>
                        <h4 className="text-sm font-semibold">
                          {member.sei} {member.mei}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
