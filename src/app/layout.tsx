/* eslint-disable @next/next/no-img-element */

import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const comfortaa = Comfortaa({ subsets: [ 'latin' ] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'portfolio developed by me, with nextjs, react and tailwindcss',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className} relative w-screen overflow-x-hidden antialiased`}>
        <div id='background'></div>
        {children}
      </body>
    </html>
  )
}
