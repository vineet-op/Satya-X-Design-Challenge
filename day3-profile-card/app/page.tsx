"use client"

import Image from "next/image";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="w-screen h-screen bg-neutral-300 flex flex-col justify-center items-center font-sans">
      {/* //Card container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-xl rounded-4xl h-[350px] bg-lime-500 "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-xl rounded-4xl h-72 bg-neutral-900 p-8 relative shadow-neutral-800 shadow-md"
        >
          <div className="flex w-full justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="font-light text-neutral-400 tracking-tighter"
            >
              Available for work
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="text-neutral-400 font-light tracking-tighter"
            >
              7:15PM
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex gap-5 items-center mt-5"
          >
            <div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Image src={"/pfp.jpg"} height={60} width={60} alt="Logo-Profile" className="rounded-full" />
              </motion.div>
            </div>
            <div className="flex flex-col gap-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                className="text-neutral-200 text-xl"
              >
                Vineet Jadhav
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                className="text-neutral-400 text-sm font-normal"
              >
                Fullstack Developer
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="flex w-full gap-5 mt-12 justify-evenly"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-60 bg-neutral-600 p-3 rounded-xl cursor-pointer hover:scale-105 hover:bg-gradient-to-t from-neutral-800 to-lime-500 transition-all duration-300 ease-in"
            >
              Hire Me
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-60 bg-neutral-600 p-3 rounded-xl cursor-pointer hover:scale-105 hover:bg-gradient-to-t from-neutral-800 to-lime-500 transition-all duration-300 ease-in"
            >
              Copy Email
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex items-center justify-center gap-2 font-medium text-sm text-center mt-5 tracking-tight text-neutral-900"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
          </svg>
          Currently High on Creativity
        </motion.div>
      </motion.div>
    </main>
  );
}
