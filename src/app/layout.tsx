import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FidCore | Verifiable Computing Infrastructure',
  description:
    'The premier infrastructure for Verifiable Computing. Powering ZK protocols and Private AI agents with GPU/ASIC.',
  keywords: [
    'VC',
    'Verifiable Computing',
    'ZK',
    'Zero Knowledge',
    'FHE',
    'Fully Homomorphic Encryption',
    'Web3',
    'Infrastructure',
    'Cryptography',
    'Privacy',
  ],
  authors: [{ name: 'FidCore' }],
  openGraph: {
    title: 'FidCore | Verifiable Computing Infrastructure',
    description:
      'The premier infrastructure for Verifiable Computing. Powering ZK protocols and Private AI agents with GPU/ASIC.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FidCore | Verifiable Computing Infrastructure',
    description:
      'The premier infrastructure for Verifiable Computing. Powering ZK protocols and Private AI agents with GPU/ASIC.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-background antialiased">
        {children}
      </body>
    </html>
  )
}
