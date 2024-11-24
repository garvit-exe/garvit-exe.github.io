'use client'

import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Get in Touch
      </motion.h2>
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 mb-8"
        >
          I'm always interested in hearing about new opportunities and collaborations.
          Feel free to reach out!
        </motion.p>
        <div className="flex justify-center space-x-6 mb-8">
          <SocialLink
            href={`mailto:${portfolioConfig.contact.email}`}
            icon={<Mail size={24} />}
            label="Email"
          />
          <SocialLink
            href={portfolioConfig.contact.github}
            icon={<Github size={24} />}
            label="GitHub"
          />
          <SocialLink
            href={portfolioConfig.contact.linkedin}
            icon={<Linkedin size={24} />}
            label="LinkedIn"
          />
          <SocialLink
            href={portfolioConfig.contact.twitter}
            icon={<Twitter size={24} />}
            label="Twitter"
          />
        </div>
      </div>
    </section>
  )
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="text-gray-400 hover:text-white transition-colors duration-200"
      aria-label={label}
    >
      {icon}
    </motion.a>
  )
}
