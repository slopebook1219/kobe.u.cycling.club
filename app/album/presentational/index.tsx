'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';

import type { Album } from '@/app/member/component/_type';
import { formatDate } from '@/app/compoent/_utils';
import { filterByYear, filterByWord } from '@/app/album/component/_utils';

export type Props = {
  results: Album[];
};

export default function PagePresentational({ results }: Props) {
  const [year, setYear] = useState('');
  const [word, setWord] = useState('');

  const years = useMemo(() => {
    if (!results) return [];
    const yearSet = results.filter((album) => album.start).map((album) => album.start.slice(0, 4));
    return Array.from(new Set(yearSet)).sort((a, b) => b.localeCompare(a));
  }, [results]);

  const filteredResults = useMemo(() => {
    const byYear = filterByYear({ album: results || [], year });
    return filterByWord({ album: byYear, word });
  }, [results, year, word]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-5 text-center">
        <h2 className="text-3xl font-bold mb-3">活動記録</h2>
        <p className="text-gray-500">私たちの日常を写真でお届けします</p>
      </div>

      <div className="flex justify-center gap-4 mx-auto mb-10">
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border rounded-[8px] px-3 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="" disabled>
            年で絞り込む
          </option>
          <option value="">リセット</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}年
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="ワードで絞り込む"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className="border rounded-[8px] px-3 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {filteredResults.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">該当する活動記録がありません</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredResults.map((album) => (
            <Link key={album.id} href={`/album/${album.id}`} className="group">
              <article className="relative overflow-hidden rounded-[16px] shadow-sm border border-gray-200 bg-white">
                <div className="relative aspect-square bg-gray-100">
                  {album.mainImage?.url ? (
                    <Image
                      src={album.mainImage.url}
                      alt={album.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      No Image
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs text-gray-200 mb-1">
                    {album.start ? formatDate(album.start) : '----/--/--'} 〜{' '}
                    {album.end ? formatDate(album.end) : '----/--/--'}
                  </p>
                  <h3 className="text-lg font-semibold text-white leading-snug line-clamp-2">
                    {album.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
