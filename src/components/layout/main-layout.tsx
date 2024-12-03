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
      <footer className="border-t border-gray-800 bg-gray-900/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          <table className="w-full">
            <tbody>
              <tr>
                <td className="w-1/3 align-top text-left pr-8">
                  <h3 className="text-lg font-semibold text-white mb-4">About Me</h3>
                  <p className="text-gray-400">{portfolioConfig.bio2}</p>
                  <p className="text-gray-400 mt-4">Based in {portfolioConfig.role}</p>
                </td>
                <td className="w-1/3 align-top text-center px-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                  <nav className="flex flex-col space-y-2">
                    <a href="#about" className="text-gray-400 hover:text-white transition-colors">Home</a>
                    <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
                    <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
                    <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>
                  </nav>
                </td>
                <td className="w-1/3 align-top text-right pl-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Let's Connect</h3>
                  <div className="space-y-3">
                    <a 
                      href={`mailto:${portfolioConfig.contact.email}`}
                      className="flex items-center justify-end text-gray-400 hover:text-white transition-colors group"
                    >
                      <span>{portfolioConfig.contact.email}</span>
                      <svg className="h-5 w-5 ml-3 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                    <a 
                      href={portfolioConfig.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-end text-gray-400 hover:text-white transition-colors group"
                    >
                      <span>GitHub</span>
                      <svg className="h-5 w-5 ml-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href={portfolioConfig.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-end text-gray-400 hover:text-white transition-colors group"
                    >
                      <span>LinkedIn</span>
                      <svg className="h-5 w-5 ml-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Copyright */}
          <div className="hidden">Made with ❤️ by Garvit Budhiraja • {new Date().getFullYear()}</div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              Made with ❤️ by {portfolioConfig.name} • {new Date().getFullYear()}
            </p>
          </div>
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
