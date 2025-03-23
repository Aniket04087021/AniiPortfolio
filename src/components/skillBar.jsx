import React from 'react';
import '../styles/components/skillBar.scss';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, index }) => {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.proficiency}%</span>
      </div>
      
      <div className="skill-progress-bg">
        <motion.div
          className="skill-progress-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default SkillBar;