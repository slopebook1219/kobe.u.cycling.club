import { Member } from '@/app/member/component/_type';
import Link from 'next/link';
import Image from 'next/image';
import { gradeOrder } from '@/app/member/component/_contant';
export type Props = {
  membersByGrade: Record<string, Member[]>;
};

export function MemberCard({ membersByGrade }: Props) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-18">
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold mb-3">メンバー紹介</h2>
        <p className="text-gray-600 leading-relaxed">
          メンバー紹介です。
          <br />
          学部・学年を越えて、それぞれの関心や強みを活かしながら、
          日々さまざまな活動に取り組んでいます。
        </p>
      </div>

      <div className="space-y-16">
        {gradeOrder.map((grade) => {
          const members = membersByGrade[grade];
          if (!members || members.length === 0) return null;

          return (
            <section key={grade}>
              <h3 className="text-xl font-semibold mb-6 text-center">{grade}回生</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {members.map((member) => (
                  <Link key={member.id} href={`/member/${member.id}`} className="block">
                    <div className="overflow-hidden border border-gray-300 bg-white hover:bg-gray-50 transition">
                      <div className="relative aspect-square">
                        <Image
                          src={member.image.url}
                          alt={member.sei}
                          fill
                          className="object-cover p-5"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500">{member.faculty}</p>
                        <p className="text-sm text-gray-500">{member.department}</p>
                        <h4 className="mt-1 text-lg font-semibold mb-4">
                          {member.sei}　{member.mei}
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
