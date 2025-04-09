import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { personalInfo } from '../data';
import { FaDownload } from 'react-icons/fa';

const Particle = ({ delay = 0 }) => (
  <motion.div
    className="absolute rounded-full bg-primary/30"
    style={{
      width: Math.random() * 5 + 2,
      height: Math.random() * 5 + 2,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 0.6, 0], scale: [0, 1, 0] }}
    transition={{
      duration: Math.random() * 3 + 2,
      repeat: Infinity,
      delay: delay + Math.random() * 5,
      ease: "easeInOut",
    }}
  />
);


const Hero = () => {
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: { staggerChildren: 0.2, delayChildren: 0.3 }
      }
   };

   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1, y: 0,
         transition: { duration: 0.6, ease: 'easeOut' }
      }
   };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center px-4 bg-gradient-to-br from-background via-slate-900 to-background relative overflow-hidden">
       <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000 pointer-events-none"></div>
       <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Generate a bunch of particles */}
         {[...Array(30)].map((_, i) => <Particle key={i} />)}
      </div>

      <motion.div
         className="z-10 relative"
         variants={containerVariants}
         initial="hidden"
         animate="visible"
       >
         <motion.h1
           className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-focus to-teal-300"
           variants={itemVariants}
         >
           {personalInfo.name}
         </motion.h1>
         <motion.p
           className="text-xl md:text-2xl lg:text-3xl text-text-secondary mb-8"
           variants={itemVariants}
         >
          {personalInfo.title}
         </motion.p>
          <motion.p
           className="text-lg md:text-xl text-secondary mb-10 max-w-xl mx-auto"
           variants={itemVariants}
         >
            Building dynamic and intuitive web experiences from Strumica, North Macedonia.
          </motion.p>
         <motion.div
            className="flex justify-center space-x-6 mb-12"
            variants={itemVariants}
          >
           {personalInfo.socials.map((social) => (
             <motion.a
               key={social.name}
               href={social.url}
               target="_blank"
               rel="noopener noreferrer"
               className="text-secondary hover:text-primary transition-colors duration-300 text-3xl md:text-4xl"
               whileHover={{ scale: 1.15, y: -3 }}
               whileTap={{ scale: 0.9 }}
               title={social.name}
                >
              <social.icon />
             </motion.a>
           ))}
         </motion.div>

         {personalInfo.cv && (
            <motion.a
             href={personalInfo.cv}
             download
             className="inline-flex items-center bg-primary hover:bg-primary-focus text-slate-900 hover:text-slate-900 font-bold py-3 px-8 rounded-lg shadow-custom-light hover:shadow-custom-hover transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.98 }}
             variants={itemVariants}
            >
            <FaDownload className="mr-3 h-5 w-5" />
            Download CV
            </motion.a>
         )}
       </motion.div>
    </section>
  );
};

export default Hero;