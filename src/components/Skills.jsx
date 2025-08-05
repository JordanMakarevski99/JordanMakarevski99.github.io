import React, { useEffect } from 'react'
import SectionWrapper from './SectionWrapper'
import { skills } from '../data'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import useMediaQuery from '../hooks/useMediaQuery'
const Skills = ({ id, setActiveSection }) => {
  const { ref, inView } = useInView({
    threshold: 0.4
  })
  useEffect(() => {
    if (inView) {
      setActiveSection(id)
    }
  }, [inView, setActiveSection, id])

  const isDesktop = useMediaQuery('(min-width: 768px)')

  const skillVariants = {
    hidden: { opacity: 0 },
    visible: i => ({
      opacity: 1,
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
          {skills.map((skill, index) => {
            const Component = isDesktop ? motion.div : 'div'
            const commonProps = {
              key: skill.name,
              className:
                'group flex flex-col items-center justify-center p-4 h-36 md:h-40 bg-card rounded-xl shadow-sm border border-border-color transition-all duration-300 hover:border-primary/60 hover:shadow-custom-light ' +
                (isDesktop ? 'hover:-translate-y-2' : '')
            }
            const motionProps = isDesktop
              ? {
                  custom: index,
                  variants: skillVariants,
                  initial: 'hidden',
                  whileInView: 'visible',
                  viewport: { once: true, amount: 0.2 },
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 }
                }
              : {}

            return (
              <Component {...commonProps} {...motionProps}>
                {skill.icon ? (
                  <skill.icon className='text-4xl sm:text-5xl mb-3 text-secondary group-hover:text-primary transition-colors duration-300' />
                ) : (
                  <div className='h-[40px] sm:h-[52px] w-full mb-3'></div>
                )}
                <span className='text-sm md:text-base font-medium text-text-secondary group-hover:text-text-primary text-center transition-colors duration-300'>
                  {skill.name}
                </span>
              </Component>
            )
          })}
        </div>
        <p className='text-center text-text-secondary mt-12'>
          ...and always eager to learn more!
        </p>
      </SectionWrapper>
    </div>
  )
}

export default Skills
