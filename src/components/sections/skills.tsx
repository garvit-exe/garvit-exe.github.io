'use client'

import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio'

export function Skills() {
  return (
    <section id="skills" className="w-full py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/50 to-gray-900/0" />

      <div className="max-w-[1400px] mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-center relative z-10"
        >
          <span className="gradient-text">Technical Skills</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-16 max-w-3xl mx-auto relative z-10 text-lg sm:text-xl"
        >
          A comprehensive list of my technical skills and expertise
        </motion.p>

        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {portfolioConfig.skills.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-8 relative group card-hover"
              >
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 -z-10" />
                
                <h3 className="text-2xl font-semibold mb-6 gradient-text">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + i * 0.05,
                      }}
                      whileHover={{ scale: 1.05 }}
                      viewport={{ once: true }}
                      className="px-4 py-1.5 text-sm bg-gray-800/50 rounded-full text-gray-300 border border-gray-700/50 hover:border-gray-600 transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Decorative elements */}
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-300" />
                <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
