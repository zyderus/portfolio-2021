import '@/assets/styles/globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// TODO: Place favicon.ico to assets folder

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Rustam Ziyadov',
  description:
    'Rustam is a software engineer based in Moscow, Russia who specializes in developing high-performing, human-friendly, conversion-oriented applications.',
  keywords:
    'rustam, ziyadov, rustam ziyadov, portfolio, software engineer, web developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
