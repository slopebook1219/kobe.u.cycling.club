// app/fonts.ts
import { Noto_Serif_JP } from 'next/font/google';

export const notoSerif = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
});
