import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import { Providers } from '@/app/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '오늘도 빡코딩!!',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel='icon' href='/favicon.ico' />
      <body className={inter.className}>
      <Header />
      <Providers>{children}</Providers>
      <Footer />
      </body>
    </html>
  )
}
