import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from './SectionWrapper'
import { projects } from '../data'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Projects = ({ id, setActiveSection }) => {
  const { ref, inView } = useInView({
    threshold: 0.2
  })

  useEffect(() => {
    if (inView) {
      setActiveSection(id)
    }
  }, [inView, setActiveSection, id])

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: i => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  }

  return (
    <div ref={ref}>
      <SectionWrapper id={id} className='bg-background'>
        <h2 className='text-primary'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              variants={cardVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.1 }}
              className='bg-card rounded-lg overflow-hidden shadow-lg flex flex-col border border-border-color/50 transition-all duration-300 hover:shadow-custom-light hover:border-primary/40'
              whileHover={{ y: -6 }}
            >
              {project.imageUrl && (
                <div className='w-full h-48 overflow-hidden group'>
                  {' '}
                  {/* Added group here for potential image hover */}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' // Group hover now works
                  />
                </div>
              )}

              {/* This div remains flex-grow to fill the card space */}
              <div className='p-6 flex flex-col flex-grow'>
                <h3 className='text-xl font-bold text-text-primary mb-2'>
                  {project.title}
                </h3>
                {/* REMOVED flex-grow from this paragraph */}
                <p className='text-text-secondary text-base mb-4'>
                  {project.description}
                </p>

                {/* Technologies section - Stays as is */}
                <div className='mb-4'>
                  <p className='text-sm font-semibold text-primary mb-2'>
                    Technologies:
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className='bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded-full'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links section - Stays at the bottom due to mt-auto */}
                <div className='flex justify-end space-x-4 mt-auto pt-4 border-t border-border-color/30'>
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-secondary hover:text-primary transition-colors duration-200 text-2xl'
                      title='GitHub Repository'
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-secondary hover:text-primary transition-colors duration-200 text-2xl'
                      title='Live Demo'
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}

export default Projects
