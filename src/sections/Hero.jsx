import React, { useMemo } from 'react';
import { motion as Motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';
import '../styles/sections/hero.scss';

const Hero = () => {
  const roles = useMemo(() => [
    'Web Developer',
    'MERN Stack Developer',
    'UI/UX Enthusiast',
  ], []);
  const highlightChips = useMemo(
    () => ['React', 'Node.js', 'MongoDB', 'Express', 'API Integration'],
    []
  );
  const quickStats = useMemo(
    () => [
      { label: 'Projects Built', value: '12+' },
      { label: 'Tech Stack', value: 'MERN' },
      { label: 'Experience', value: '2+ Years' },
    ],
    []
  );
  const floatingTags = useMemo(
    () => ['React', 'Node.js', 'MongoDB', 'OpenAI API'],
    []
  );

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="hero-container">
        <div className="hero-content">
          <Motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="eyebrow">Portfolio of</span>
              <span className="name gradient-text">Aniket Gupta</span>
            </Motion.h1>
            
            <Motion.div
              className="typewriter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2>
                I'm a{' '}
                <span className="highlight rotating">
                  <span className="roles-track">
                    {roles.map((role) => (
                      <span key={role} className="role">{role}</span>
                    ))}
                  </span>
                </span>
              </h2>
            </Motion.div>
            
            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              I build fast, responsive, and scalable web applications with clean UI,
              production-ready architecture, and strong problem-solving.
            </Motion.p>

            <Motion.div
              className="availability"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              <span className="dot" /> Available for freelance & full-time roles
            </Motion.div>

            <Motion.div
              className="hero-chips"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.95 }}
            >
              {highlightChips.map((chip) => (
                <span key={chip} className="chip">{chip}</span>
              ))}
            </Motion.div>
            
            <Motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Motion.a
                href="#contact"
                className="btn primary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </Motion.a>
              
              <Motion.a
                href="#projects"
                className="btn secondary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </Motion.a>
            </Motion.div>

            <Motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              {quickStats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </Motion.div>
            
            <Motion.div
              className="hero-social"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.25 }}
            >
              <SocialLinks />
            </Motion.div>
          </Motion.div>
          
          <Motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="image-container">
              <img src="aniket.png" alt="Portrait of Aniket Gupta" />
              <div className="image-ring ring-one" />
              <div className="image-ring ring-two" />
              <div className="floating-tags" aria-hidden="true">
                {floatingTags.map((tag) => (
                  <span key={tag} className="floating-tag">{tag}</span>
                ))}
              </div>
              <div className="glow" />
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

