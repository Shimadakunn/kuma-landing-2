import { Heading } from '@/components/heading'
import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'

const dmSans = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Omni Gas',
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
