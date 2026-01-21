import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FidCore | Verifiable Confidential Computing Infrastructure',
  description:
    'The premier infrastructure for Verifiable Confidential Computing (VCC). Powering ZK protocols and Private AI agents with specialized silicon.',
  keywords: [
    'VCC',
    'Verifiable Confidential Computing',
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
    title: 'FidCore | Verifiable Confidential Computing Infrastructure',
    description:
      'The premier infrastructure for Verifiable Confidential Computing (VCC). Powering ZK protocols and Private AI agents with specialized silicon.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FidCore | Verifiable Confidential Computing Infrastructure',
    description:
      'The premier infrastructure for Verifiable Confidential Computing (VCC). Powering ZK protocols and Private AI agents with specialized silicon.',
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
