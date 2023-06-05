'use client'
import ButtonNav from './components/ButtonNav'
import Footer from './components/Footer'
import Topbar from './components/Topbar'
import './globals.css'
import { AnimatePresence } from "framer-motion"
import { Inter, Roboto } from 'next/font/google'

const roboto = Roboto({   weight: '400',subsets: ['latin'] })

export const metadata = {
  title: 'Jdssolicitors website',
  description: 'lawyers website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={roboto.className}>
      <AnimatePresence mode="wait">
      <Topbar/>
        {children}
        <ButtonNav/>
        <Footer/>
        </AnimatePresence>
        </body>
    </html>
  )
}
