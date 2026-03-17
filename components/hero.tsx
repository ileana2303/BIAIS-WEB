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
          <button
            data-cursor-theme="dark"
            className="px-8 py-4 bg-black text-white rounded-full shadow-sm hover:bg-gray-800"
          >
            Start Your Project
          </button>

          <a
            href="#projects"
            data-cursor-theme="light"
            className="px-8 py-4 border bg-white rounded-full shadow-sm hover:bg-gray-50 flex items-center gap-2"
          >
            Selected Projects ↓
          </a>
        </div>

      </Container>

    </Section>
  )
}
