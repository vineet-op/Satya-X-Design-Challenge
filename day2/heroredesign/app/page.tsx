"use client"

import Image from "next/image";
import CustomCard from "./components/CustomCard/CustomCard";
import Navbar from "./components/Navbar/Navbar";
import { motion } from "motion/react"
export default function Home() {
  return (
    <main className="w-screen  h-full overflow-hidden bg-[radial-gradient(circle_at_center,_#FFEDE8_0%,_#FFD9D6_60%,_#FFC4C0_100%)]">
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
          className="px-4 py-2 bg-orange-400  text-white rounded-lg shadow-md border border-orange-400"
        >
          Install Customizer
        </motion.button>
      </motion.div>

      {/* //Cards sections */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="w-full flex justify-center mt-28 px-24 relative pb-44"
      >
        {/* Left Small Cards */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="absolute left-50 -top-12 flex flex-col gap-16 z-10 text-black"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl p-4 w-64 rotate-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="bg-white p-2 rounded-lg text-black tracking-tighter text-sm"
            >
              Change Quantities / Remove Items
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="bg-white rounded-lg p-5 mt-2"
            >
              <p className="text-sm font-semibold mb-2">Phone</p>
              <input
                type="text"
                placeholder="+91 12345 67890"
                className="w-full border rounded-lg px-2 py-1 text-sm"
              />
              <p className="text-sm font-semibold mt-3">Email</p>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full border rounded-lg px-2 py-1 text-sm"
              />
            </motion.div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl p-4 w-64 text-black -rotate-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="bg-white p-2 rounded-lg text-black tracking-tighter text-sm"
            >
              Change Quantities / Remove Items
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="bg-white p-5 rounded-lg mt-2"
            >
              <p className="text-sm font-semibold mb-2">City</p>
              <input
                type="text"
                placeholder="Enter your city"
                className="w-full border rounded-lg px-2 py-1 text-sm"
              />
              <p className="text-sm font-semibold mt-3">Street Address</p>
              <input
                type="text"
                placeholder="Enter your street address"
                className="w-full border rounded-lg px-2 py-1 text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Center Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="z-20"
        >
          <CustomCard />
        </motion.div>

        {/* Right Small Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="absolute right-50 -top-18 flex flex-col gap-16 z-10 "
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className=" rounded-2xl p-4 w-64 text-black -rotate-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="bg-white p-2 rounded-lg text-black tracking-tighter text-sm"
            >
              Change Quantities / Remove Items
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="bg-white mt-2 p-5 rounded-lg"
            >
              <p className="text-sm font-semibold mb-2">Preferred Delivery Date</p>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="delivery" />
                  <span>Free Delivery - Friday, 7 March</span>
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="delivery" />
                  <span>Fast Delivery (+$5) - Friday, 3 March</span>
                </label>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col gap-2 rounded-2xl p-4 w-64 rotate-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="bg-white p-2 rounded-lg text-black tracking-tighter text-sm"
            >
              Change Quantities / Remove Items
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="flex items-center gap-2 text-black bg-white p-5 rounded-lg"
            >
              <img
                src="/shirt.jpg"
                alt="Product"
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex items-center">
                <p className="text-sm font-semibold">Quantity</p>
                <input
                  type="number"
                  min="1"
                  defaultValue="2"
                  className="border rounded-lg text-center px-2 py-1 mt-1 text-sm w-16"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

    </main>
  );
}
