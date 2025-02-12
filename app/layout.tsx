import type { Metadata } from 'next'
import { Roboto, Courgette } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-body',
})

const courgette = Courgette({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-title',
})

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${courgette.variable} antialiased text-body font-body`}
      >
        {children}
      </body>
    </html>
  )
}
