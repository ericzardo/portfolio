import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Comfortaa } from 'next/font/google';
import './globals.css';

const comfortaa = Comfortaa({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'portfolio developed by me, with nextjs, react and tailwindcss',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className} w-screen scroll-smooth antialiased`}>{children}</body>
    </html>
  );
}
