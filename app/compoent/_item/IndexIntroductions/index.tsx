type Props = {
  introductions: {
    title: string;
    image: {
      url: string;
      height: number;
      width: number;
    };
    description: string;
  }[];
};
import Image from 'next/image';
import { notoSerif } from '@/app/fonts';
export function IndexIntroductions({ introductions }: Props) {
  return (
    <section className="w-full flex flex-col items-center justify-center py-10 px-8 md:px-0">
      {introductions.map((introduction, index) => (
        <div key={index} className="md:max-w-4xl max-w-3xl w-full text-start mb-24 mx-auto">
          <h2 className={`${notoSerif.className} text-3xl md:text-5xl font-semibold mb-5`}>
            {introduction.title}
          </h2>
          <Image
            src={introduction.image.url}
            width={introduction.image.width}
            height={introduction.image.height}
            alt={introduction.title}
            className="w-full px-8 md:px-20 py-3 mb-4"
            priority={index === 0}
          />
          <p className="text-base md:text-xl leading-9 whitespace-pre-line break-words">
            {introduction.description}
          </p>
        </div>
      ))}
    </section>
  );
}
