import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const geist = Geist({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hermes Group',
  description: 'An enigmatic Manila-born collective building projects under one shared name.',
  openGraph: {
    title: 'Hermes Group',
    description: 'An enigmatic Manila-born collective building projects under one shared name.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="bg-void text-snow min-h-screen">
        <Nav />
        {children}
      </body>
    </html>
  )
}
