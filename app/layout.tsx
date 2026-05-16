import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://nena-melbin-wedding.vercel.app'),
  title: 'Melbin & Nena | Wedding Day',
  description:
    'Join us as we celebrate our love with the blessing of God and our families. 31 May 2026 · St. Athanasius Cathedral, Kolencherry, Kerala.',
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Melbin & Nena | Wedding Day',
    description:
      '31 May 2026 · St. Athanasius Cathedral, Kolencherry, Kerala. Join us as we celebrate our love with the blessing of God and our families.',
    siteName: 'Melbin & Nena Wedding',
    locale: 'en_IN',
    type: 'website',
    url: 'https://nena-melbin-wedding.vercel.app',
    images: [
      {
        url: '/og-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Melbin & Nena Wedding',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Melbin & Nena | Wedding Day',
    description:
      '31 May 2026 · St. Athanasius Cathedral, Kolencherry, Kerala. Celebrate with us!',
    images: ['/og-img.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-cream">
      <body className="font-serif antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
