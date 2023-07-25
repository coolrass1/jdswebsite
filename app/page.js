"use client";
import Hero from "./components/Hero";
import Services from "./components/Services";
const imageURL = "/../public/images/slider1.jpeg";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <div className="container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl">
      <AnimatePresence mode="wait">
        <motion.div
          className="container text-center  bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <Hero />
          <Services />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
