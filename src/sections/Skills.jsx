import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data';
import SkillBar from '../components/skillBar';
import '../styles/sections/skills.scss';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>My Skills</h2>
          <div className="underline"></div>
        </motion.div>

        <div className="skills-content">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{category.category}</h3>
              <div className="skills-container">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    skill={skill} 
                    index={skillIndex} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;