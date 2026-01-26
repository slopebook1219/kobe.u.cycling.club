import type { Metadata } from 'next';
import { Top } from '@/app/Top';
import { fetchTopImage } from '@/app/compoent/_actions';

export const metadata: Metadata = {
  title: '神戸大学体育会サイクリング部',
  description:
    '神戸大学体育会サイクリング部の公式サイトです。メンバー紹介や日々の活動記録、イベント情報を発信しています。',
  openGraph: {
    title: '神戸大学体育会サイクリング部',
    description: '神戸大学体育会サイクリング部の公式サイト。活動記録・メンバー紹介を掲載中。',
    url: 'https://（ここに本番URL）',
    siteName: '神戸大学体育会サイクリング部',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default async function Home() {
  const images = await fetchTopImage();
  if (!images?.length) return null;

  return <Top images={images} />;
}
