import { Member } from '@/app/member/component/_type';
import Link from 'next/link';
import Image from 'next/image';
export type Props = {
  results: Member[];
};
export function MemberCard({ results }: Props) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold mb-3">メンバー紹介</h2>
        <p className="text-gray-600 leading-relaxed">
          私たちは現在<strong>{results.length}名</strong>で活動しています。
          <br />
          学部・学年を越えて、それぞれの関心や強みを活かしながら、
          日々さまざまな活動に取り組んでいます。
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {results.map((member) => (
          <Link key={member.id} href={`/member/${member.id}`} className="block">
            <div className="overflow-hidden border border-gray-300 bg-white hover:bg-gray-50 transition">
              <div className="relative aspect-square">
                <Image src={member.image.url} alt={member.name} fill className="object-cover p-5" />
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">所属：{member.faculty}</p>
                <h3 className="mt-1 text-lg font-semibold mb-4">名前：{member.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
