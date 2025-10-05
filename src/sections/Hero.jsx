import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';
import '../styles/sections/hero.scss';

const Hero = () => {
  const roles = useMemo(() => [
    'Web Developer',
    'MERN Stack Developer',
    'UI/UX Enthusiast',
  ], []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I'm <span className="highlight gradient-text">Aniket</span>
            </motion.h1>
            
            <motion.div
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
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Crafting responsive websites and web applications with modern technologies.
            </motion.p>

            <motion.div
              className="availability"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              <span className="dot" /> Available for freelance & full-time roles
            </motion.div>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.a
                href="#contact"
                className="btn primary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              
              <motion.a
                href="#projects"
                className="btn secondary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
            
            <motion.div
              className="hero-social"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <SocialLinks />
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="image-container">
              <img src="aniket.png" alt="Aniket" />
              <div className="glow" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;