import React from 'react';
import '../styles/components/projectCard.scss';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-links">
          <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
            <FaGithub />
            <span>Code</span>
          </a>
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt />
            <span>Demo</span>
          </a>
        </div>
      </div>
      
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        
        <div className="project-tags">
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;