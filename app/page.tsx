import Image from 'next/image';
import { Top } from '@/app/compoent/Top';
import { fetchTopImage } from '@/app/compoent/_actions';

export default async function Home() {
  const images = await fetchTopImage();
  if (!images?.length) return null;

  return <Top images={images} />;
}
