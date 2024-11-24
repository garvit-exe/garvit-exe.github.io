'use client'

import { ReactNode } from 'react'
import { NavMenu } from './nav-menu'
import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <NavMenu />
      <main>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
        >
          {children}
        </motion.div>
      </main>
      <footer className="py-8 text-center text-gray-400">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p> {new Date().getFullYear()} {portfolioConfig.name}. All rights reserved.</p>
        </motion.div>
      </footer>
    </div>
  )
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  )
}
