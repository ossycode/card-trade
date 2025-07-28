import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Card Trade',
    default: 'Card Trade - Buy, Sell & Trade Cards Without Fees or Fear',
  },
  description:
    'Card Trade is the secure, invite-only platform built for collectors who care about protecting The Hobby and building their reputation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <body>
        <Header />
        {children} <Footer />
      </body>
    </html>
  )
}
