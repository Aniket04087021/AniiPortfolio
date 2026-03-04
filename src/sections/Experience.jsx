import React, { useMemo } from 'react';
import { motion as Motion } from 'framer-motion';
import { experienceData } from '../data';
import '../styles/sections/experience.scss';
import { FaAward, FaBriefcase, FaBuilding, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
  const experienceStats = useMemo(() => {
    const totalRoles = experienceData.length;
    const activeRoles = experienceData.filter((item) =>
      item.period.toLowerCase().includes('present')
    ).length;
    const totalHighlights = experienceData.reduce(
      (sum, item) => sum + (item.achievements?.length || 0),
      0
    );

    return { totalRoles, activeRoles, totalHighlights };
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <Motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Work Experience</h2>
          <div className="underline"></div>
        </Motion.div>

        <Motion.p
          className="section-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Roles where I built real products, collaborated in teams, and shipped meaningful results.
        </Motion.p>

        <Motion.div
          className="experience-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="stat-card">
            <span className="icon"><FaBriefcase /></span>
            <div>
              <strong>{experienceStats.totalRoles}</strong>
              <p>Total Roles</p>
            </div>
          </div>
          <div className="stat-card">
            <span className="icon"><FaCalendarAlt /></span>
            <div>
              <strong>{experienceStats.activeRoles}</strong>
              <p>Current Roles</p>
            </div>
          </div>
          <div className="stat-card">
            <span className="icon"><FaAward /></span>
            <div>
              <strong>{experienceStats.totalHighlights}</strong>
              <p>Career Highlights</p>
            </div>
          </div>
        </Motion.div>

        <div className="timeline">
          {experienceData.map((item, index) => (
            <Motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <div className="timeline-meta">
                  <span className="timeline-date">{item.period}</span>
                  {item.period.toLowerCase().includes('present') && (
                    <span className="status-chip">Current</span>
                  )}
                </div>
                <h3>{item.position}</h3>
                <h4><FaBuilding /> {item.company}</h4>
                <p>{item.description}</p>
                <div className="achievement-header">
                  <span><FaCheckCircle /> Key Contributions</span>
                  <small>{item.achievements.length} highlights</small>
                </div>
                <ul className="achievements">
                  {item.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
