/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'
import Loader from '@components/ui/Loader'
import { Analytics } from '@scripts/Analytics'

const comfortaa = Comfortaa({ subsets: [ 'latin' ] })

export const metadata: Metadata = {
  title: 'Zardo Portfolio',
  description: 'Zardo\'s portfolio showcase, a skilled web developer. Built using Next.js, React, and TailwindCSS. Explore projects, skills, and contact info.',
  keywords: [
    'Portfolio',
    'Frontend Developer',
    'Web Developer',
    'React Projects',
    'Next.js',
    'TailwindCSS',
    'Zardo',
    'Eric Zardo',
  ],
  openGraph: {
    title: 'Zardo Portfolio',
    description:
      'Zardo\'s portfolio showcase, a skilled web developer. Built using Next.js, React, and TailwindCSS. Explore projects, skills, and contact info.',
    url: 'https://zardo.mentesmart.com.br',
    siteName: 'Zardo Portfolio',
    images: [
      {
        url: 'https://zardo.mentesmart.com.br/og.webp',
        width: 1200,
        height: 630,
        alt: 'Zardo Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  const schema = {
    '@context': 'http://schema.org',
    '@type': 'Person',
    'name': 'Eric Zardo',
    'url': 'https://zardo.mentesmart.com.br',
    'image': 'https://zardo.mentesmart.com.br/og.webp',
    'description': 'Zardo\'s portfolio showcase, a skilled web developer. Built using Next.js, React, and TailwindCSS. Explore projects, skills, and contact info.',
    'sameAs': [
      'https://www.linkedin.com/in/eric-zardo-a53630228/',
      'https://github.com/ericzardo'
    ],
    'jobTitle': 'Web Developer',  
    'mainEntityOfPage': 'https://zardo.mentesmart.com.br'
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </head>
      <body className={`${comfortaa.className} relative w-screen overflow-x-hidden antialiased`}>
        <Analytics />
        <Loader />
        <div id='background'></div>
        {children}
      </body>
    </html>
  )
}