import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { motion as Motion } from 'framer-motion';
import { socialLinks } from './data';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import { motion } from 'framer-motion';
import { aboutData, projectsData, skillsData, experienceData, educationData, contactInfo, socialLinks } from './data';
import './App.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
};

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

function App() {
  const featured = projectsData.slice(0, 4);

  return (
    <div className="portfolio">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Aniket Gupta home">AG<span>.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Selected work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href={`mailto:${contactInfo.email}`}>Let's talk <span>↗</span></a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-topline"><span>PORTFOLIO / 2026</span><span>BASED IN INDIA · AVAILABLE FOR OPPORTUNITIES</span></div>
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp}>
            <p className="eyebrow"><span className="status-dot" /> FULL-STACK DEVELOPER & CREATIVE BUILDER</p>
            <h1>ANIKET<br /><span>GUPTA<span className="hero-period">.</span></span></h1>
            <div className="hero-bottom">
              <p className="hero-intro">I build thoughtful digital experiences<br />that make the complex feel simple.</p>
              <a className="round-link" href="#work" aria-label="Explore selected work">↓</a>
              <p className="hero-index">01 / 06<br />SCROLL TO EXPLORE</p>
            </div>
          </motion.div>
          <div className="hero-image-wrap">
            <div className="hero-image-label">THE PERSON BEHIND THE PIXELS</div>
            <img className="hero-image" src="/aniket.png" alt="Aniket Gupta" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <span className="image-stamp">AG<br />✳</span>
          </div>
          <div className="hero-marquee"><span>DESIGN MINDED&nbsp; ✳ &nbsp;DEVELOPMENT FOCUSED&nbsp; ✳ &nbsp;ALWAYS LEARNING&nbsp; ✳ &nbsp;</span><span>DESIGN MINDED&nbsp; ✳ &nbsp;DEVELOPMENT FOCUSED&nbsp; ✳ &nbsp;ALWAYS LEARNING&nbsp; ✳ &nbsp;</span></div>
        </section>

        <section className="about section-shell" id="about">
          <div className="section-kicker"><span>01 — ABOUT ME</span><span>A LITTLE INTRODUCTION</span></div>
          <motion.div className="about-grid" {...reveal}>
            <h2>Curious mind.<br /><em>Builder's</em> mindset.</h2>
            <div className="about-copy">
              <p>{aboutData.description}</p>
              <p className="about-note">I enjoy turning ideas into useful products — from the first sketch to the final line of code.</p>
              <a className="text-link" href={aboutData.resumeLink} target="_blank" rel="noreferrer">VIEW MY RESUME <span>↗</span></a>
            </div>
          </motion.div>
          <div className="about-facts">
            <div><strong>01</strong><span>FRONTEND<br />EXPERIENCE</span></div>
            <div><strong>02</strong><span>FULL-STACK<br />PROJECTS</span></div>
            <div><strong>∞</strong><span>IDEAS TO<br />EXPLORE</span></div>
          </div>
        </section>

        <section className="work-section section-shell" id="work">
          <div className="section-kicker"><span>02 — SELECTED WORK</span><span>THINGS I'VE BUILT</span></div>
          <div className="section-heading-row"><h2>Featured<br /><em>projects.</em></h2><p>A selection of digital products, experiments and solutions built with curiosity and care.</p></div>
          <div className="project-list">
            {featured.map((project, index) => (
              <motion.article className="project-row" key={project.id} {...reveal}>
                <div className="project-number">0{index + 1}</div>
                <div className="project-visual">
                  <img src={`/${project.image}`} alt={project.title} loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  <span className="project-visual-fallback">{project.title}</span>
                </div>
                <div className="project-info">
                  <div className="project-meta"><span>WEB APPLICATION</span><span>2024 — 2026</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags?.slice(0, 5).map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-links">
                    {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noreferrer">LIVE WEBSITE ↗</a>}
                    {project.sourceCode && <a href={project.sourceCode} target="_blank" rel="noreferrer">SOURCE CODE ↗</a>}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="more-projects"><span>MORE EXPERIMENTS & BUILDS</span><a href="https://github.com/Aniket04087021" target="_blank" rel="noreferrer">EXPLORE GITHUB ↗</a></div>
        </section>

        <section className="skills-section section-shell" id="skills">
          <div className="section-kicker"><span>03 — TOOLKIT</span><span>MY EVERYDAY STACK</span></div>
          <div className="section-heading-row"><h2>Tools of<br /><em>the trade.</em></h2><p>Technology is a tool. The goal is always to make something useful, clear and reliable.</p></div>
          <div className="skills-grid">
            {skillsData.map((group, index) => (
              <motion.div className="skill-card" key={group.category} {...reveal}>
                <span className="skill-index">0{index + 1} / STACK</span>
                <h3>{group.category}</h3>
                <div className="skill-items">{group.skills.map(skill => <span key={skill.name}>{skill.name}</span>)}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="experience-section section-shell" id="experience">
          <div className="section-kicker"><span>04 — EXPERIENCE</span><span>WHERE I'VE CONTRIBUTED</span></div>
          <div className="section-heading-row"><h2>Growing through<br /><em>experience.</em></h2><p>Every role has been a chance to learn, collaborate and turn challenges into progress.</p></div>
          <div className="timeline">
            {experienceData.map((item, index) => (
              <motion.article className="timeline-row" key={item.company + index} {...reveal}>
                <span className="timeline-dot" />
                <div className="timeline-date">{item.period}</div>
                <div className="timeline-content"><h3>{item.position}</h3><h4>{item.company}</h4><p>{item.description}</p></div>
                <span className="timeline-count">0{index + 1}</span>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="education-section section-shell" id="education">
          <div className="section-kicker"><span>05 — EDUCATION</span><span>THE FOUNDATION</span></div>
          <h2 className="education-title">Always a student<br /><em>of the process.</em></h2>
          <div className="education-list">
            {educationData.map((item, index) => (
              <motion.div className="education-row" key={item.institution} {...reveal}>
                <span>0{index + 1}</span><div><h3>{item.degree}</h3><p>{item.institution}</p></div><strong>{item.period}</strong>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <div className="section-kicker"><span>06 — GET IN TOUCH</span><span>HAVE A GOOD ONE IN MIND?</span></div>
            <p className="contact-overline">HAVE A PROJECT, IDEA OR JUST WANT TO SAY HELLO?</p>
            <h2>Let's make<br /><em>it happen.</em></h2>
            <a className="contact-email" href={`mailto:${contactInfo.email}`}>{contactInfo.email} <span>↗</span></a>
            <div className="contact-bottom">
              <div><span>BASED IN</span><p>{contactInfo.address}</p></div>
              <div><span>ELSEWHERE ON THE INTERNET</span><div className="social-list">{socialLinks.map(link => <a key={link.id} href={link.url} target="_blank" rel="noreferrer">{link.id} ↗</a>)}</div></div>
              <a className="back-top" href="#home">BACK TO TOP ↑</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Analytics />
      <footer className="site-footer"><span>© {new Date().getFullYear()} ANIKET GUPTA</span><span>DESIGNED WITH INTENTION · BUILT WITH CODE</span><span>INDIA / IN</span></footer>
    </div>
  );
}

export default App;
