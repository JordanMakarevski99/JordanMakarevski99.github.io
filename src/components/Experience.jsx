import React, { useState, useEffect } from 'react'
import SectionWrapper from './SectionWrapper'
import { experience } from '../data'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experience = ({ id, setActiveSection }) => {
  const { ref, inView } = useInView({
    threshold: 0.4
  })
  useEffect(() => {
    if (inView) {
      setActiveSection(id)
    }
  }, [inView, setActiveSection, id])

  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectedJob = experience[selectedIndex]

  const contentVariants = {
    initial: { opacity: 0, y: 20, scale: 0.98 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.98,
      transition: { duration: 0.2, ease: 'easeIn' }
    }
  }

  return (
    <div ref={ref}>
      <SectionWrapper id='experience' className='bg-card'>
        <h2 className='text-primary'>Professional Journey</h2>

        <div className='flex flex-col md:flex-row gap-4 md:gap-12 min-h-[450px]'>
          <motion.div
            className='w-full md:w-1/4 pb-2 md:pb-0'
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className='flex flex-col space-y-2 w-full'>
              {experience.map((job, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`
                    px-3 py-2 md:px-4 md:py-3 text-left rounded-md transition-all duration-300 ease-in-out w-full text-base whitespace-normal
                    ${
                      selectedIndex === index
                        ? 'bg-primary/15 text-primary font-semibold shadow-sm'
                        : 'text-text-secondary hover:bg-background hover:text-text-primary'
                    }
                  `}
                >
                  <span className='font-medium'>{job.company}</span>
                  <span className='block text-xs opacity-80'>{job.title}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <div className='md:w-3/4 relative'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={selectedIndex}
                variants={contentVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                className='bg-background p-6 rounded-lg shadow-lg border border-border-color/50 min-h-[350px] md:min-h-full flex flex-col'
              >
                <h3 className='text-xl md:text-2xl font-bold text-text-primary mb-1 text-left'>
                  {selectedJob.title}
                </h3>
                <p className='text-lg text-primary font-semibold mb-3 text-left'>
                  @ {selectedJob.company}
                </p>
                <div className='flex flex-col sm:flex-row text-sm text-secondary mb-5 space-y-1 sm:space-y-0 sm:space-x-4'>
                  <span className='flex items-center'>
                    {' '}
                    <FaCalendarAlt className='mr-2 mt-0 text-xs opacity-70' />{' '}
                    {selectedJob.duration}
                  </span>
                  {selectedJob.location && (
                    <span className='flex items-center'>
                      {' '}
                      <FaMapMarkerAlt className='mr-2 mt-0 text-xs opacity-70' />{' '}
                      {selectedJob.location}
                    </span>
                  )}
                </div>

                <div className='flex-grow justify-left text-left'>
                  <ul className='list-disc pl-5 space-y-2 text-text-secondary text-base leading-relaxed'>
                    {selectedJob.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default Experience
