import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data';
import ProjectCard from '../components/ProjectCard';
import '../styles/sections/projects.scss';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>My Projects</h2>
          <div className="underline"></div>
        </motion.div>

        <motion.p
          className="section-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are some of my recent projects. Each demonstrates different aspects of my skills and expertise.
        </motion.p>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="more-projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a 
            href="https://github.com/Aniket04087021" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn secondary-btn"
          >
            View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;