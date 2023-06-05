'use client'
import Hero from './components/Hero'
import Services from './components/Services'
const imageURL='/../public/images/slider1.jpeg'
import { motion } from "framer-motion";

export default function Home() {
  return( <>
   <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
  <Hero/>
  <Services/>
  </motion.div></>  )

}
