'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { notoSerif } from '@/app/fonts';
import { IndexIntroductions } from '@/app/compoent/_item/IndexIntroductions';

type Props = {
  mainSlides: {
    image: {
      url: string;
      height: number;
      width: number;
    };
  }[];
  aboutUs: string;
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

export function PagePresentational({ mainSlides, aboutUs, introductions }: Props) {
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
    <div className="w-full">
      <section className="relative h-screen w-full flex flex-col justify-center items-center gap-4 overflow-hidden">
        <h1
          className={`${notoSerif.className} text-2xl md:text-6xl font-semibold tracking-wide text-center leading-tight`}
        >
          神戸大学体育会サイクリング部
        </h1>
        <div
          onClick={handleClick}
          className="relative w-full h-[40vh] md:h-[60vh] cursor-pointer overflow-hidden"
        >
          {mainSlides.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out flex justify-center items-start md:px-10 px-4 ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={item.image.url}
                width={item.image.width}
                height={item.image.height}
                alt="その他の紹介"
                className="h-full w-full object-contain object-top"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-10 flex flex-col items-center animate-bounce">
          <p className="text-sm tracking-[0.3em] text-neutral-500 mb-1">SCROLL</p>
          <span className="text-2xl text-neutral-500">↓</span>
        </div>
      </section>
      <section className=" w-full flex items-start justify-center py-10 px-8 md:px-0">
        <div className="md:max-w-4xl max-w-3xl w-full text-start">
          <h2 className={`${notoSerif.className} text-3xl md:text-5xl font-semibold mb-5`}>
            部紹介
          </h2>
          <p className="text-base md:text-xl leading-9 whitespace-pre-line break-words">
            {aboutUs}
          </p>
        </div>
      </section>
      <IndexIntroductions introductions={introductions} />
    </div>
  );
}
