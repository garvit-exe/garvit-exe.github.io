'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export function NavMenu() {
  const [activeSection, setActiveSection] = useState('about')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(({ href }) => 
        document.querySelector(href) as HTMLElement
      )
      
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        if (!section) return
        
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })

      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-md py-4 shadow-lg' : 'py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <ul className="flex justify-center space-x-8">
          {navItems.map(({ name, href }) => (
            <motion.li key={name}>
              <a
                href={href}
                className={`text-lg transition-colors duration-200 ${
                  activeSection === href.slice(1)
                    ? 'text-white font-semibold'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(href)?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }}
              >
                {name}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}
