import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'

const Josefin = Josefin_Sans({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MetaCert',
  description: 'Educational credentials on your wallet',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${Josefin.className} bg-stone-700`}>{children}</body>
    </html>
  )
}
