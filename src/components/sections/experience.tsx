'use client'

import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio'
import { Building2, Calendar, ChevronRight } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/50 to-gray-900/0" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-4 text-center relative z-10 text-white"
      >
        Experience
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-400 text-center mb-12 max-w-2xl mx-auto relative z-10"
      >
        My professional journey and achievements
      </motion.p>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="space-y-12">
          {portfolioConfig.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-gray-700 group"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="absolute w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full -left-[9px] top-0 group-hover:scale-125 transition-transform duration-300"
              />

              {/* Content */}
              <div className="bg-[#0a0a0a] p-6 rounded-xl relative group-hover:translate-x-2 transition-transform duration-300">
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <div className="flex items-center gap-4 text-gray-400 mt-2">
                    <div className="flex items-center gap-1">
                      <Building2 size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mt-4">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <ChevronRight size={16} className="mt-1 text-gray-500" />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Decorative elements */}
                <div className="absolute -right-2 -top-2 w-20 h-20 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-300" />
                <div className="absolute -left-2 -bottom-2 w-20 h-20 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
