import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../data';
import '../styles/sections/about.scss';
import { FaDownload } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <div className="underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="image-container">
              <img src="ani.jpg" alt="Aniket" />
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Who I Am</h3>
            <p>{aboutData.description}</p>
            
            <div className="about-details">
              <div className="detail-item">
                <h4>Name:</h4>
                <p>Aniket</p>
              </div>
              <div className="detail-item">
                <h4>Email:</h4>
                <p>gupta.aniket0408@gmail.com</p>
              </div>
              <div className="detail-item">
                <h4>Location:</h4>
                <p>kalyan west, Maharashtra</p>
              </div>
              <div className="detail-item">
                <h4>Freelance:</h4>
                <p>Available</p>
              </div>
            </div>
            
            <motion.a
              href={aboutData.resumeLink}
              className="btn primary-btn"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="icon" /> Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
