import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const ibmMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hermes Group',
  description: 'Born in Manila. Made of many. Known as one.',
  openGraph: {
    title: 'Hermes Group',
    description: 'Born in Manila. Made of many. Known as one.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${ibmMono.variable}`}>
      <body className="bg-void text-snow min-h-screen">
        <Nav />
        {children}
      </body>
    </html>
  )
}
