"use client"

import { motion } from "framer-motion"
import AnimatedGrid from "./animated-grid"

export default function Hero() {
  return (
    <section className="relative py-36 px-6 text-center max-w-7xl mx-auto overflow-hidden">

      <AnimatedGrid />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-6xl md:text-7xl font-bold leading-tight"
      >
        Build Intelligent <br />
        <span className="bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
          Digital Products
        </span>
      </motion.h1>

      <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto">
        We design and develop scalable platforms, AI-powered systems and
        high-performance applications.
      </p>

      <div className="mt-12 flex justify-center gap-6">
        <button className="px-8 py-4 bg-black text-white rounded-xl">
          Start a Project
        </button>

        <button className="px-8 py-4 border rounded-xl">
          Selected Works
        </button>
      </div>

    </section>
  )
}