import type { Section } from '@/app/album/type';
import Image from 'next/image';

export type Props = {
  sections: Section[];
  dayNumber: string;
};

export function PagePresentational({ sections, dayNumber }: Props) {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-24 pb-20">
      <h1 className="text-center text-3xl pb-3 font-bold  tracking-wide">{dayNumber}日目</h1>
      {sections.map((section, i) => (
        <section key={i} className="mb-10">
          <div className="relative mb-2 overflow-hidden">
            <Image
              src={section.image?.url ?? '/NoImage.jpg'}
              alt={`${dayNumber}日目の画像`}
              width={section.image?.width ?? 800}
              height={section.image?.height ?? 600}
              className="w-full h-auto object-contain"
            />
          </div>

          <p className="text-sm whitespace-pre-wrap">{section.content}</p>
        </section>
      ))}
    </main>
  );
}
