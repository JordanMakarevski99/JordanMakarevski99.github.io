import React, { useEffect } from 'react';
import SectionWrapper from './SectionWrapper';
import { summary } from '../data';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'

import profilePic from '../assets/portfolio-pic.jpeg';

const About = ({ id, setActiveSection }) => {
    const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(id);
    }
  }, [inView, setActiveSection, id]);

  return (
    <div ref={ref}>

    <SectionWrapper id="about" className="bg-card">
       <h2 className="text-primary">About Me</h2>
       <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
         <motion.div
           className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72"
           initial={{ opacity: 0, scale: 0.5 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 0.6, ease: 'easeOut' }}
         >
           <img
             src={profilePic}
             alt="Jordan Makarevski"
             className="w-full h-full rounded-full object-cover border-4 border-primary/50 shadow-custom-light"
           />
          </motion.div>
         <motion.div
           className="text-center md:text-left"
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
           <p className="text-lg text-text-secondary leading-relaxed whitespace-pre-line">
             {summary}
             <br /><br />
             Committed to clean, maintainable code, I’m always expanding my skills to stay ahead of the curve in a rapidly evolving tech landscape.
            </p>
          </motion.div>
       </div>
    </SectionWrapper>
    </div>
  );
};

export default About;