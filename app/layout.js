import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
import Header from '@/components/Header'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'DigiPakistan',
    template: '%s | DigiPakistan'
  },
  description: 'DigiPakistan - A perfect place for your business website.',
}

function RootLayout({ children }) {
  return (
    <html lang='en-US'>
      <body className={inter.className}>
        <Header/>
        <hr className='lg:hidden'/>
        {children}
      </body>
    </html>
  )
}
export default RootLayout
