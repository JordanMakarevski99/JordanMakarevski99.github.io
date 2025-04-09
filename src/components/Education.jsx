import React, { useEffect } from "react";
import SectionWrapper from "./SectionWrapper";
import { education, languages } from "../data";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Education = ({ id, setActiveSection }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  useEffect(() => {
    if (inView) {
      setActiveSection(id);
    }
  }, [inView, setActiveSection, id]);
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div ref={ref}>
      <SectionWrapper id="education">
        <h2 className="text-primary">Education & Languages</h2>
        <div className="space-y-8 max-w-3xl mx-auto text-left">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="flex flex-col sm:flex-row items-start p-6 bg-card rounded-lg shadow-md transition-all duration-300 hover:shadow-custom-light hover:border-border-color border border-transparent"
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 p-3 bg-primary/10 rounded-full">
                {" "}
                <FaGraduationCap className="text-3xl text-primary" />
              </div>
              <div className="flex-grow">
                {" "}
                <h3 className="text-xl font-bold text-text-primary mb-1">
                  {edu.institution}
                </h3>
                <p className="text-lg text-secondary font-semibold mb-2">
                  {edu.degree}
                </p>
                <div className="flex items-center text-sm text-secondary">
                  {" "}
                  <FaCalendarAlt className="mr-2 text-xs" />
                  <span>{edu.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-border-color/50 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-text-primary">
            Languages
          </h3>{" "}
          {/* Primary text */}
          <motion.div
            className="flex flex-wrap justify-center gap-x-6 gap-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {languages.map((lang) => (
              <div key={lang.name} className="text-center">
                <p className="text-lg font-medium text-text-primary">
                  {lang.name}
                </p>
                <p className="text-sm text-secondary bg-card px-3 py-1 rounded-full inline-block mt-1">
                  {lang.level}
                </p>{" "}
              </div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Education;
