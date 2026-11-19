import React, { useMemo } from 'react';
import { motion as Motion } from 'framer-motion';
import { projectsData } from '../data';
import ProjectCard from '../components/ProjectCard';
import { FaCodeBranch, FaLayerGroup, FaRocket } from 'react-icons/fa';
import '../styles/sections/projects.scss';

const Projects = () => {
  const projectStats = useMemo(() => {
    const total = projectsData.length;
    const live = projectsData.filter((project) => project.liveDemo).length;
    const uniqueTech = new Set(projectsData.flatMap((project) => project.tags || []));

    return {
      total,
      live,
      techCount: uniqueTech.size,
    };
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <Motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>My Projects</h2>
          <div className="underline"></div>
        </Motion.div>

        <Motion.p
          className="section-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are selected builds that combine product thinking, solid engineering, and polished UX.
        </Motion.p>

        <Motion.div
          className="projects-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <div className="stat-item">
            <span className="icon"><FaLayerGroup /></span>
            <div>
              <strong>{projectStats.total}</strong>
              <p>Portfolio Projects</p>
            </div>
          </div>
          <div className="stat-item">
            <span className="icon"><FaRocket /></span>
            <div>
              <strong>{projectStats.live}</strong>
              <p>Live Deployments</p>
            </div>
          </div>
          <div className="stat-item">
            <span className="icon"><FaCodeBranch /></span>
            <div>
              <strong>{projectStats.techCount}+</strong>
              <p>Technologies Used</p>
            </div>
          </div>
        </Motion.div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <Motion.div
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
        </Motion.div>
      </div>
    </section>
  );
};

export default Projects;
