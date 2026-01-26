import Image from 'next/image';
import { notoSerif } from '@/app/fonts';

type Slide = {
  image: {
    url: string;
    width: number;
    height: number;
  };
};

type Props = {
  images: Slide[];
};

export function Top({ images }: Props) {
  const image = images[0];
  if (!image) return null;

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center gap-6 px-4"
      aria-labelledby="site-title"
    >
      <h1
        id="site-title"
        className={`${notoSerif.className} text-2xl md:text-6xl font-semibold tracking-wide text-center leading-tight`}
      >
        神戸大学体育会サイクリング部
      </h1>
      <div className="max-w-xs md:max-w-4xl">
        <Image
          src={image.image.url}
          width={image.image.width}
          height={image.image.height}
          alt="神戸大学体育会サイクリング部の活動風景"
          priority
        />
      </div>
    </section>
  );
}
