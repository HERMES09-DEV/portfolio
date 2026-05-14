import type { Metadata } from 'next'
import { Fraunces, Manrope } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: 'variable',
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
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
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="bg-void text-snow min-h-screen">
        <Nav />
        {children}
      </body>
    </html>
  )
}
