'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { notoSerif } from '@/app/fonts';

type Props = {
  mainSlides: {
    image: {
      url: string;
      height: number;
      width: number;
    };
  }[];
};

export function PagePresentational({ mainSlides }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextSlide() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mainSlides.length);
  }

  function handleClick() {
    nextSlide();
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [currentIndex, mainSlides.length]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-6 px-4">
      <h1
        className={`${notoSerif.className} text-2xl md:text-6xl font-semibold tracking-wide text-center leading-tight`}
      >
        神戸大学体育会サイクリング部
      </h1>
      <div
        onClick={handleClick}
        className="relative w-full max-w-4xl aspect-video cursor-pointer overflow-hidden"
      >
        {mainSlides.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={item.image.url}
              width={item.image.width}
              height={item.image.height}
              alt="活動風景"
              className="w-full h-full object-contain"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
