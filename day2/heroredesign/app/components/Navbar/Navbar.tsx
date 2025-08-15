"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Navbar = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='w-full max-w-4xl mx-auto bg-white rounded-lg font-sans flex items-center h-16 mt-8 px-4'
            >
                <div className='flex flex-row w-full justify-between items-center'>
                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        <Image
                            src="/orange.jpg"
                            width={50}
                            height={50}
                            alt='Logo'
                            className='object-contain'
                        />
                    </motion.div>
                    <div className='flex gap-6 items-center text-neutral-800 font-medium'>
                        <motion.a
                            href="#"
                            className='tracking-tighter hover:text-orange-400 transition-colors'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Home
                        </motion.a>
                        <motion.a
                            href="#"
                            className='tracking-tighter hover:text-orange-400 transition-colors'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            How it Works
                        </motion.a>
                        <motion.a
                            href="#"
                            className='tracking-tighter hover:text-orange-400 transition-colors'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Resources
                        </motion.a>
                        <motion.button
                            className='bg-orange-400 font-medium px-4 py-2 text-white cursor-pointer rounded-lg tracking-tighter hover:bg-orange-500 transition-colors shadow-orange-500 shadow-md'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Install Customizer
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Navbar
