import React from 'react';
import '../styles/components/projectCard.scss';
import { motion as Motion } from 'framer-motion';
import { FaCode, FaExternalLinkAlt, FaGithub, FaPlayCircle } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <Motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <span className="project-index">0{index + 1}</span>
        {project.apiUsage && <span className="project-badge">API Integrated</span>}
        <div className="project-links">
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code on GitHub`}
          >
            <FaGithub />
            <span>Code</span>
          </a>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
          >
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

        <div className="project-actions">
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code on GitHub`}
          >
            <FaCode />
            Source
          </a>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
          >
            <FaPlayCircle />
            Live Demo
          </a>
        </div>
      </div>
    </Motion.div>
  );
};

export default ProjectCard;

