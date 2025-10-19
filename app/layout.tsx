import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Voice Thread - Asynchronous Voice Conversations',
  description: 'AI-powered voice conversations for Farcaster',
  openGraph: {
    title: 'Voice Thread',
    description: 'Asynchronous voice conversations, AI-powered for Farcaster',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
