import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from './SectionWrapper'
import { projects } from '../data'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import useMediaQuery from '../hooks/useMediaQuery'

const Projects = ({ id, setActiveSection }) => {
  const { ref, inView } = useInView({
    threshold: 0.2
  })

  useEffect(() => {
    if (inView) {
      setActiveSection(id)
    }
  }, [inView, setActiveSection, id])

  const isDesktop = useMediaQuery('(min-width: 768px)')

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: i => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: 'easeOut'
      }
    })
  }

  const linkHoverTapProps = isDesktop
    ? { whileHover: { scale: 1.15 }, whileTap: { scale: 0.95 } }
    : {}

  return (
    <div ref={ref}>
      <SectionWrapper id={id} className='bg-background'>
        <h2 className='text-primary'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => {
            const CardComponent = isDesktop ? motion.div : 'div'
            const LinkComponent = isDesktop ? motion.a : 'a'

            const cardCommonProps = {
              key: project.title,
              className: `bg-card rounded-lg overflow-hidden shadow-lg flex flex-col border border-border-color/50 lg:transition-all duration-300 hover:shadow-custom-light hover:border-primary/40 ${
                isDesktop ? 'lg:hover:-translate-y-1.5' : ''
              }`
            }

            const cardMotionProps = isDesktop
              ? {
                  custom: index,
                  variants: cardVariants,
                  initial: 'hidden',
                  whileInView: 'visible',
                  viewport: { once: true, amount: 0.1 }
                }
              : {}

            return (
              <CardComponent {...cardCommonProps} {...cardMotionProps}>
                {project.imageUrl && (
                  <div className='w-full h-48 overflow-hidden group'>
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className='w-full h-full object-cover lg:transition-transform duration-300 group-hover:scale-105'
                    />
                  </div>
                )}

                <div className='p-6 flex flex-col flex-grow'>
                  <h3 className='text-xl font-bold text-text-primary mb-2'>
                    {project.title}
                  </h3>
                  <p className='text-text-secondary text-base mb-4'>
                    {project.description}
                  </p>

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

                  <div className='flex justify-end space-x-4 mt-auto pt-4 border-t border-border-color/30'>
                    {project.githubUrl && (
                      <LinkComponent
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-secondary hover:text-primary lg:transition-colors duration-200 text-2xl'
                        title='GitHub Repository'
                        {...linkHoverTapProps}
                      >
                        <FaGithub />
                      </LinkComponent>
                    )}
                    {project.liveUrl && (
                      <LinkComponent
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-secondary hover:text-primary lg:transition-colors duration-200 text-2xl'
                        title='Live Demo'
                        {...linkHoverTapProps}
                      >
                        <FaExternalLinkAlt />
                      </LinkComponent>
                    )}
                  </div>
                </div>
              </CardComponent>
            )
          })}
        </div>
      </SectionWrapper>
    </div>
  )
}

export default Projects
