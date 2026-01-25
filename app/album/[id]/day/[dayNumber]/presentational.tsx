import type { Section } from '@/app/member/component/_type';
import Image from 'next/image';

export type Props = {
  sections: Section[];
  dayNumber: string;
};

export function PagePresentational({ sections, dayNumber }: Props) {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-24 pb-20">
      <h1 className="text-center text-3xl pb-3 font-bold tracking-wide">{dayNumber}日目</h1>
      {sections.map((section, i) => (
        <section key={i} className="mb-10">
          <div className="relative mb-2 overflow-hidden">
            <Image
              src={section.image.url}
              alt=""
              width={section.image.width}
              height={section.image.height}
              className="w-full h-auto object-contain"
            />
          </div>

          <p className="text-sm whitespace-pre-wrap">{section.content}</p>
        </section>
      ))}
    </main>
  );
}
