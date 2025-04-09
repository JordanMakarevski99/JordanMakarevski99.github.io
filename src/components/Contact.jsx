import React, { useEffect } from 'react'
import SectionWrapper from './SectionWrapper'
import { personalInfo } from '../data'
import { FaEnvelope } from 'react-icons/fa'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import { useInView } from 'react-intersection-observer'

const Contact = ({ id, setActiveSection }) => {
  const { ref, inView } = useInView({
    threshold: 0.4
  })
  useEffect(() => {
    if (inView) {
      setActiveSection(id)
    }
  }, [inView, setActiveSection, id])

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <div ref={ref}>
      <SectionWrapper id='contact' className='bg-card'>
        {' '}
        <h2 className='text-primary'>Get In Touch</h2>
        <p className='text-lg text-text-secondary text-center max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed'>
          {' '}
          I'm actively looking for new challenges and opportunities. Whether you
          have a question, a proposal, or just want to say hi, feel free to
          reach out!
        </p>
        <div className='max-w-lg mx-auto'>
          <motion.div
            className='space-y-6 mb-12'
            variants={listVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
          >
            {personalInfo.contact.map((item, index) => (
              <motion.div
                key={index}
                className='flex items-center text-lg group'
                variants={itemVariants}
              >
                <span className='flex-shrink-0 w-10 h-10 mr-5 flex items-center justify-center rounded-full bg-primary/10 text-primary'>
                  <item.icon className='text-xl' />
                </span>
                {item.icon === FaEnvelope ? (
                  <a
                    href={`mailto:${item.text}`}
                    className='text-text-secondary hover:text-primary transition-colors duration-200 break-all'
                  >
                    {item.text}
                  </a>
                ) : (
                  <span className='text-text-secondary'>{item.text}</span>
                )}
              </motion.div>
            ))}
          </motion.div>


          <motion.div
            className='flex justify-center space-x-8'
            variants={listVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
          >
            {personalInfo.socials.map(social => (
              <motion.a
                key={social.name}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-secondary hover:text-primary transition-colors duration-300 text-3xl'
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                title={social.name}
                variants={itemVariants}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default Contact
