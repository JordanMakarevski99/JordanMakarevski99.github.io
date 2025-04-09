// src/components/Footer.jsx
import React from 'react'
import { personalInfo } from '../data'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-background py-6 px-4 md:px-8 border-t border-border-color/50'>
      {' '}
      {/* Added border */}
      <div className='max-w-6xl mx-auto text-center text-secondary text-sm'>
        {' '}
        {/* Use secondary color */}
        <p>
          © {currentYear} {personalInfo.name}. All Rights Reserved.
        </p>
        <p className='mt-1 opacity-70'>
          {' '}
          Crafted with{' '}
          <span role='img' aria-label='heart'>
            ❤️
          </span>{' '}
          using React & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default Footer
