import React, { useEffect } from 'react'
import SectionWrapper from './SectionWrapper'
import { skills } from '../data'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = ({ id, setActiveSection }) => {
  const { ref, inView } = useInView({
    threshold: 0.4
  })
  useEffect(() => {
    if (inView) {
      setActiveSection(id)
    }
  }, [inView, setActiveSection, id])

  const skillVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: i => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: 'easeOut'
      }
    })
  }

  return (
    <div ref={ref}>
      <SectionWrapper id='skills'>
        <h2 className='text-primary'>Skills & Technologies</h2>{' '}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6'>
          {' '}
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className='group flex flex-col items-center justify-center p-4 h-36 md:h-40  bg-card rounded-xl shadow-sm border border-border-color transition-all duration-300 hover:border-primary/60 hover:shadow-custom-light hover:-translate-y-2'
              custom={index}
              variants={skillVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill.icon ? (
                <skill.icon className='text-4xl sm:text-5xl mb-3 text-secondary group-hover:text-primary transition-colors duration-300' />
              ) : (
                <div className='h-[40px] sm:h-[52px] mb-3'></div>
              )}
              <span className='text-sm md:text-base font-medium text-text-secondary group-hover:text-text-primary text-center transition-colors duration-300'>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
        <p className='text-center text-text-secondary mt-12'>
          ...and always eager to learn more!
        </p>
      </SectionWrapper>
    </div>
  )
}

export default Skills
