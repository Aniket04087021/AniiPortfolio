import React from 'react';
import { motion as Motion } from 'framer-motion';
import { aboutData } from '../data';
import '../styles/sections/about.scss';
import {
  FaCheckCircle,
  FaDownload,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserTie,
} from 'react-icons/fa';

const About = () => {
  const quickStats = [
    { value: '15+', label: 'Projects Built' },
    { value: '2+', label: 'Years Learning' },
    { value: '100%', label: 'Commitment' },
  ];

  const detailItems = [
    { label: 'Name', value: 'Aniket Gupta', icon: <FaUserTie /> },
    {
      label: 'Email',
      value: 'gupta.aniket0408@gmail.com',
      icon: <FaEnvelope />,
    },
    {
      label: 'Location',
      value: 'Kalyan West, Maharashtra',
      icon: <FaMapMarkerAlt />,
    },
    { label: 'Freelance', value: 'Available', icon: <FaCheckCircle /> },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <Motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <div className="underline"></div>
        </Motion.div>

        <div className="about-content">
          <Motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="image-container">
              <img src="ani.jpg" alt="Aniket Gupta profile photo" />
              <div className="image-glow" />
            </div>
            <div className="about-floating-card">
              <span>Open to Work</span>
              <strong>MERN + UI-focused builds</strong>
            </div>
          </Motion.div>

          <Motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="about-kicker">MERN STACK DEVELOPER</span>
            <h3>Building practical products with clean interfaces.</h3>
            <p>{aboutData.description}</p>

            <div className="about-stats">
              {quickStats.map((item) => (
                <div className="stat-card" key={item.label}>
                  <h4>{item.value}</h4>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>

            <div className="about-details">
              {detailItems.map((item) => (
                <div className="detail-item" key={item.label}>
                  <span className="detail-icon">{item.icon}</span>
                  <div>
                    <h4>{item.label}</h4>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-cta">
              <Motion.a
                href={aboutData.resumeLink}
                className="btn primary-btn"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <FaDownload className="icon" /> Download CV
              </Motion.a>
              <a href="mailto:gupta.aniket0408@gmail.com" className="about-link-btn">
                Let&apos;s Collaborate
              </a>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

