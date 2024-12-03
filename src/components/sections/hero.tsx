'use client'

import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio'
import { Github, LinkedinIcon, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden py-20">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        {/* Gradient Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full blur-2xl" />
        <div className="absolute top-2/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="text-sm md:text-base font-medium text-white-400 bg-gray-800/50 px-4 py-2 rounded-full">
              {portfolioConfig.role}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight mt-8 text-white"
          >
            {portfolioConfig.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {portfolioConfig.bio}
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-6 flex-col sm:flex-row"
          >
            <a
              href="/resume.pdf"
              download="Garvit's Resume.pdf"
              className="px-8 py-3 rounded-full bg-white text-gray-900 font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 border-2 border-white"
            >
              Download Resume
            </a>
            <a
              href={`mailto:${portfolioConfig.contact.email}`}
              className="px-8 py-3 rounded-full border-2 border-gray-300 text-gray-300 font-medium hover:text-white hover:border-white transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-gray-500 flex items-start justify-center p-2">
          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-1 h-3 bg-gray-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
