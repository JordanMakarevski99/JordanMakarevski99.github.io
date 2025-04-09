import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const SectionWrapper = ({ children, id, className = '' }) => {
  return (
    <motion.section
      id={id}
      className={`py-20 md:py-28 px-4 sm:px-6 lg:px-16 xl:px-32 overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;