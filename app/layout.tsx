import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Facronactz's Landing Page",
  description: 'Landing page for Facronactz',
  generator: 'facronactz',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
