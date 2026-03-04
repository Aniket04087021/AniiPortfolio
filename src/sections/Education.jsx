import React, { useMemo } from 'react';
import { motion as Motion } from 'framer-motion';
import { educationData } from '../data';
import '../styles/sections/education.scss';
import { FaAward, FaBookOpen, FaCalendarAlt, FaGraduationCap, FaUniversity } from 'react-icons/fa';

const Education = () => {
  const educationStats = useMemo(() => {
    const totalPrograms = educationData.length;
    const ongoingPrograms = educationData.filter((item) => {
      const parts = item.period.split('-');
      const end = parts[1]?.trim();
      return end && Number(end) >= new Date().getFullYear();
    }).length;
    const totalAchievements = educationData.reduce(
      (sum, item) => sum + (item.achievements?.length || 0),
      0
    );

    return { totalPrograms, ongoingPrograms, totalAchievements };
  }, []);

  return (
    <section id="education" className="education-section">
      <div className="container">
        <Motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Education</h2>
          <div className="underline"></div>
        </Motion.div>

        <Motion.p
          className="section-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Academic foundation that shaped my engineering mindset, product approach, and technical discipline.
        </Motion.p>

        <Motion.div
          className="education-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="stat-card">
            <span className="icon"><FaBookOpen /></span>
            <div>
              <strong>{educationStats.totalPrograms}</strong>
              <p>Programs</p>
            </div>
          </div>
          <div className="stat-card">
            <span className="icon"><FaCalendarAlt /></span>
            <div>
              <strong>{educationStats.ongoingPrograms}</strong>
              <p>Currently Pursuing</p>
            </div>
          </div>
          <div className="stat-card">
            <span className="icon"><FaAward /></span>
            <div>
              <strong>{educationStats.totalAchievements}</strong>
              <p>Academic Highlights</p>
            </div>
          </div>
        </Motion.div>

        <div className="timeline">
          {educationData.map((item, index) => (
            <Motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-icon">
                <FaGraduationCap />
              </div>
              <div className="timeline-content">
                <div className="timeline-meta">
                  <span className="timeline-date">{item.period}</span>
                  {item.period.includes('2026') && <span className="status-chip">Current</span>}
                </div>
                <h3>{item.degree}</h3>
                <h4><FaUniversity /> {item.institution}</h4>
                <p>{item.description}</p>
                <div className="achievement-header">
                  <span><FaAward /> Achievements</span>
                  <small>{item.achievements.length} key points</small>
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

export default Education;
