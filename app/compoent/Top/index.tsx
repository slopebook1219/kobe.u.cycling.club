import Image from 'next/image';
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
  return (
    <main>
      {images.map((item, index) => (
        <Image
          key={index}
          src={item.image.url}
          width={item.image.width}
          height={item.image.height}
          alt=""
        />
      ))}
    </main>
  );
}
