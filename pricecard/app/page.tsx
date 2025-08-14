"use client"

import Card from "./components/Card/Card";
import { motion } from "motion/react"


export default function Home() {
  return (
    <main className="w-screen text-neutral-900 h-screen overflow-y-auto bg-neutral-200">

      <div className='flex flex-col gap-2.5 mx-auto text-center items-center pt-24  justify-center'>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className='text-5xl font-semibold tracking-tighter'
        >
          Pricing plans
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className='text-lg font-medium tracking-tighter'
        >
          Choose the right plans for your needs
        </motion.p>
        <Card />
      </div>

    </main>
  );
}
