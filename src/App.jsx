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
import { motion } from 'framer-motion';
import { socialLinks } from './data';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const siteUrl = window.location.origin;
    const pageUrl = window.location.href;

    document.title = 'Aniket Gupta | MERN Stack Developer Portfolio';

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', pageUrl);
    }

    const existingSchema = document.getElementById('person-schema');
    if (existingSchema) {
      existingSchema.remove();
    }

    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Aniket Gupta',
      jobTitle: 'MERN Stack Developer',
      url: pageUrl,
      email: 'mailto:gupta.aniket0408@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kalyan',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
      sameAs: socialLinks.map((link) => link.url),
      image: `${siteUrl}/aniket.png`,
      knowsAbout: [
        'React',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JavaScript',
        'Full Stack Development',
      ],
    };

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Aniket Gupta Portfolio',
      url: siteUrl,
    };

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'person-schema';
    schemaScript.textContent = JSON.stringify([personSchema, websiteSchema]);
    document.head.appendChild(schemaScript);

    return () => {
      const scriptNode = document.getElementById('person-schema');
      if (scriptNode) {
        scriptNode.remove();
      }
    };
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          className="loader"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading...
        </motion.h2>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
