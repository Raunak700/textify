import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Textify - Add Text Behind Images',
  description: 'A simple tool to add text behind your images',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
