import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data';
import SkillBar from '../components/skillBar';
import '../styles/sections/skills.scss';

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [query, setQuery] = useState('');
  const [view, setView] = useState('bars');

  const filteredSkills = useMemo(() => {
    const currentCategory = skillsData[activeTab];
    if (!currentCategory) return [];
    if (!query.trim()) return currentCategory.skills;
    const q = query.toLowerCase();
    return currentCategory.skills.filter(s => s.name.toLowerCase().includes(q));
  }, [activeTab, query]);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>My Skills</h2>
          <div className="underline"></div>
        </motion.div>

        <div className="skills-content">
          <div className="skills-controls">
            <div className="skills-tabs">
              {skillsData.map((category, idx) => (
                <button
                  key={category.category}
                  className={`tab-btn ${activeTab === idx ? 'active' : ''}`}
                  onClick={() => setActiveTab(idx)}
                >
                  {category.category}
                </button>
              ))}
            </div>
            <div className="skills-actions">
              <input
                type="text"
                className="skills-search"
                placeholder="Search skills..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search skills"
              />
              <div className="view-toggle" role="tablist" aria-label="Skills view mode">
                <button
                  className={`toggle-btn ${view === 'bars' ? 'active' : ''}`}
                  onClick={() => setView('bars')}
                  role="tab"
                  aria-selected={view === 'bars'}
                >
                  Bars
                </button>
                <button
                  className={`toggle-btn ${view === 'badges' ? 'active' : ''}`}
                  onClick={() => setView('badges')}
                  role="tab"
                  aria-selected={view === 'badges'}
                >
                  Badges
                </button>
              </div>
            </div>
          </div>

          <div className="skills-list">
            {skillsData.map((category, categoryIndex) => (
              activeTab === categoryIndex && (
                <motion.div
                  key={category.category}
                  className="skills-category"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3>{category.category}</h3>
                  {view === 'bars' ? (
                    <div className="skills-container">
                      {filteredSkills.map((skill, skillIndex) => (
                        <SkillBar
                          key={`${category.category}-${skill.name}`}
                          skill={skill}
                          index={skillIndex}
                        />
                      ))}
                      {filteredSkills.length === 0 && (
                        <div className="empty-state">No skills match your search.</div>
                      )}
                    </div>
                  ) : (
                    <div className="badges-grid">
                      {filteredSkills.map((skill, skillIndex) => (
                        <motion.div
                          key={`${category.category}-${skill.name}`}
                          className={`skill-badge level-${Math.round(skill.proficiency / 10)}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                          viewport={{ once: true }}
                          title={`${skill.name} - ${skill.proficiency}%`}
                        >
                          <div className="ring">
                            <svg viewBox="0 0 36 36" className="circular-chart">
                              <path
                                className="circle-bg"
                                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <motion.path
                                className="circle"
                                initial={{ strokeDasharray: '0, 100' }}
                                whileInView={{ strokeDasharray: `${skill.proficiency}, 100` }}
                                transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                viewport={{ once: true }}
                                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                            </svg>
                            <span className="percent">{skill.proficiency}%</span>
                          </div>
                          <span className="name">{skill.name}</span>
                        </motion.div>
                      ))}
                      {filteredSkills.length === 0 && (
                        <div className="empty-state">No skills match your search.</div>
                      )}
                    </div>
                  )}
                </motion.div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;