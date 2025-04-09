import React, { useState } from 'react'
import { personalInfo } from '../data'
import { FiMenu, FiX } from 'react-icons/fi'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ]


  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-md border-b border-border-color/50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <a
            href='#hero'
            className='text-2xl font-bold text-primary hover:text-primary-focus transition-colors duration-300'
          >
            {personalInfo.name}
          </a>
          <div className='hidden md:flex space-x-2'>
            {navLinks.map(link => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`
                    px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group
                    ${
                      isActive
                        ? 'text-primary font-semibold'
                        : 'text-text-secondary hover:text-primary'
                    }
                  `}
                >
                  {link.name}
                  <span
                    className={`
                      absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300
                      ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                    `}
                  ></span>
                </a>
              )
            })}
          </div>
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-primary hover:bg-card focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-all'
              aria-controls='mobile-menu'
              aria-expanded={isOpen}
            >
              <span className='sr-only'>Open main menu</span>
              {isOpen ? (
                <FiX className='block h-6 w-6' aria-hidden='true' />
              ) : (
                <FiMenu className='block h-6 w-6' aria-hidden='true' />
              )}
            </button>
          </div>{' '}
        </div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`md:hidden overflow-hidden ${
          isOpen ? 'border-t border-border-color/50' : ''
        }`}
        id='mobile-menu'
      >
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          {navLinks.map(link => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                       block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                       ${
                         isActive
                           ? 'text-primary bg-card'
                           : 'text-text-secondary hover:text-primary hover:bg-card'
                       }
                     `}
              >
                {link.name}
              </a>
            )
          })}
        </div>
      </motion.div>{' '}
    </nav>
  )
}

export default Navbar
