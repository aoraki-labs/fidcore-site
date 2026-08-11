import type { Metadata } from 'next'
import './globals.css'

const title = 'FidCore | Verifiable Agent Infrastructure'
const description =
  "The trust substrate for autonomous AI agents. Hardware attestation proves the code that ran; zero-knowledge proofs bound what it's allowed to do."

export const metadata: Metadata = {
  metadataBase: new URL('https://fidcore.xyz'),
  title,
  description,
  keywords: [
    'Verifiable Agent Infrastructure',
    'AI agents',
    'agent wallet',
    'TEE',
    'Confidential Computing',
    'Intel TDX',
    'remote attestation',
    'zero knowledge',
    'ZK',
    'no-log LLM relay',
    'fidrouter',
    'AgentBox',
  ],
  authors: [{ name: 'FidCore' }],
  icons: { icon: '/logos/fidcore-square.png', apple: '/logos/fidcore-square.png' },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_US',
    images: ['/logos/fidcore-square.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/logos/fidcore-square.png'],
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
