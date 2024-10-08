import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { BackgroundGrid } from '@/components/ui/background-grid'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pedro Paulo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <BackgroundGrid />
      </body>
    </html>
  )
}
