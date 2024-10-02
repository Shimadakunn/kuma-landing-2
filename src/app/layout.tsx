import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'
import { Heading } from '@/components/heading'

const dmSans = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kuma',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>

          {children}
          <Heading />

      </body>
    </html>
  )
}
