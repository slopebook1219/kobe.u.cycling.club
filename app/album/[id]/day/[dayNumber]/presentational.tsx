import type { Section } from '@/app/member/component/_type';
import Image from 'next/image';

export type Props = {
  sections: Section[];
  dayNumber: string;
};

export function PagePresentational({ sections, dayNumber }: Props) {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-24 pb-20">
      <h3>{dayNumber}日目</h3>
      {sections.map((section, i) => (
        <section key={i} className="mb-10">
          <div className="relative aspect-square mb-4 overflow-hidden">
            <Image src={section.image.url} alt="" fill className="object-cover" />
          </div>

          <p className="text-sm whitespace-pre-wrap">{section.content}</p>
        </section>
      ))}
    </main>
  );
}
