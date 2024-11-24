'use client'

import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'

export function Projects() {
  return (
    <section id="projects" className="w-full py-20 px-4">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-center"
        >
          <span className="gradient-text">Featured Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-16 max-w-3xl mx-auto text-lg sm:text-xl"
        >
          Here are some of my recent projects that showcase my skills and experience
        </motion.p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {portfolioConfig.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-800/30 rounded-xl overflow-hidden card-hover glass"
            >
              <div className="relative h-64 lg:h-72 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 gradient-text">{project.title}</h3>
                <p className="text-gray-300 mb-6 text-lg line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 text-sm bg-gray-700/50 rounded-full text-gray-300 hover:bg-gray-600/50 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-6">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={24} />
                    <span className="text-lg">View Code</span>
                  </motion.a>
                  <motion.a
                    href={project.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={24} />
                    <span className="text-lg">Live Link</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
