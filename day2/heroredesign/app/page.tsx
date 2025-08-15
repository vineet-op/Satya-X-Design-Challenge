"use client"

import Navbar from "./components/Navbar/Navbar";
import { motion } from "motion/react"
export default function Home() {
  return (
    <main className="w-screen h-screen overflow-hidden bg-[radial-gradient(circle_at_center,_#FFEDE8_0%,_#FFD9D6_60%,_#FFC4C0_100%)]">
      <Navbar />

      {/* //Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-sans flex rounded-full w-56 p-1 gap-1 text-sm mt-10 items-center bg-white mx-auto text-center justify-between shadow-md"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
          className="bg-orange-400 rounded-full text-base w-12"
        >
          31%
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="text-neutral-900 font-medium tracking-tight"
        >
          Increased AOV Value 🎉
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="font-sans font-semibold text-neutral-800 text-6xl text-center max-w-2xl tracking-tighter mx-auto w-full mt-5"
      >
        Cut Support Tickets & Let Customer Edit Orders
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-neutral-500 font-sans font-medium w-full mx-auto text-center mt-4 max-w-2xl tracking-tighter text-lg leading-snug"
      >
        Let the Customers Edit Orders Themselves: Save your customers time <br /> and yourself from support email headsches
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="w-full flex gap-4 mt-5 mx-auto text-center justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-white text-orange-400 rounded-lg shadow-md"
        >
          Get Demo
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-orange-400 text-white rounded-lg shadow-md border border-orange-400"
        >
          Install Customizer
        </motion.button>
      </motion.div>



    </main>
  );
}
