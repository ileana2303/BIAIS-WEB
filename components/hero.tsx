"use client"

import { motion } from "framer-motion"
import AnimatedGrid from "./animated-grid"
import Section from "./layout/section"
import Container from "./layout/container"

export default function Hero() {
  return (
    <Section className="relative min-h-[90vh] flex items-center overflow-hidden">

      <AnimatedGrid />

      <Container className="text-center">

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
          <a
            href="/contact-us"
            data-cursor-theme="light"
            className="px-8 py-4 rounded-full border-2 border-black 
text-white flex items-center gap-2

bg-[linear-gradient(to_top,black_50%,#FFFAF0_50%)]
bg-[length:100%_220%] bg-[position:0_100%]

transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

hover:bg-[position:0_0] hover:text-black"
          >
            Start Your Project
          </a>

          <a
            href="#projects"
            data-cursor-theme="light"
            className="px-8 py-4 rounded-full border-2 border-black 
text-black flex items-center gap-2

bg-[linear-gradient(to_top,#FFFAF0_50%,black_50%)]
bg-[length:100%_220%] bg-[position:0_100%]

transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

hover:bg-[position:0_0] hover:text-white"
          >
            Selected Projects ↓
          </a>
        </div>

      </Container>

    </Section>
  )
}
