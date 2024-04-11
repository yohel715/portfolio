import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.scss'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  generator: 'Next.js',
  title: 'Portfolio | Yohel Ureña Mora  Web Development',
  description: 'My personal portfolio in web development and software engineering. Here you can find my projects, experiences, and more.',
  keywords: ['portfolio', 'web development', 'software engineering'],
  metadataBase: new URL('https://yohelurena.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https:///yohelurena.com',
    siteName: 'Yohel Ureña Mora',
    title: 'Portfolio | Yohel Ureña Mora',
    description: 'My personal portfolio',
    images: [
      {
        url: 'https://yohelurena.com/images/opengraph-image.png', //Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'Yohel Ureña Mora - Portfolio',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
    )
}
