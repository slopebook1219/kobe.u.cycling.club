'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';

import type { Album } from '@/app/member/component/_type';
import { formatDate } from '@/app/compoent/_utils';
import { filterByYear, filterByWord } from '@/app/album/component/_utils';
// ↑ パスは実際の配置に合わせて調整してください

export type Props = {
  results: Album[];
};

export default function PagePresentational({ results }: Props) {
  const [year, setYear] = useState('');
  const [word, setWord] = useState('');
  const years = Array.from(new Set(results.map((album) => album.start.slice(0, 4)))).sort((a, b) =>
    b.localeCompare(a)
  );
  const filteredResults = useMemo(() => {
    const byYear = filterByYear({ album: results, year });
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
          className="border rounded px-3 py-2 w-40"
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
          className="border rounded px-3 py-2 w-60"
        />
      </div>

      {filteredResults.length === 0 ? (
        <p className="text-center text-gray-500">該当する活動記録がありません</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredResults.map((album) => (
            <Link key={album.id} href={`/album/${album.id}`} className="group">
              <article className="relative overflow-hidden rounded-2xl shadow-sm border border-gray-200">
                <div className="relative aspect-square">
                  <Image
                    src={album.mainImage.url}
                    alt={album.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs text-gray-200 mb-1">
                    {formatDate(album.start)}〜{formatDate(album.end)}
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
