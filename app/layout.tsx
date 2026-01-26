import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import HeaderWithMenu from '@/app/compoent/_item/HeaderWithMenu';

export const metadata = {
  title: {
    default: '神戸大学サイクリング部',
    template: '神戸大学サイクリング部',
  },
  description: '神戸大学のサイクリング部のホームページです',
  verification: {
    google: 'KvWNGfmzKsf_3XpITugU_7fl0Yd-ENN8NTcQDL5rTIg',
  },
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <HeaderWithMenu />
        {children}
      </body>
    </html>
  );
}
