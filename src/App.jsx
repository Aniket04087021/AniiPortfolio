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
    const siteUrl = 'https://aniketgupta.me';

    document.title = 'Aniket Gupta Portfolio | MERN Stack Developer in India';

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', siteUrl);
    }

    const upsertMeta = (selector, attributes) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (attributes.name) {
          meta.setAttribute('name', attributes.name);
        }
        if (attributes.property) {
          meta.setAttribute('property', attributes.property);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', attributes.content);
    };

    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: siteUrl,
    });
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: 'Aniket Gupta Portfolio | MERN Stack Developer',
    });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: 'Official portfolio of Aniket Gupta. Discover MERN projects, skills, and experience.',
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: 'Aniket Gupta Portfolio | MERN Stack Developer',
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: 'Official portfolio of Aniket Gupta with projects, skills, and experience.',
    });

    return () => {
      // Keep static SEO tags from index.html untouched on unmount.
    };
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <Motion.div
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
        <Motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading...
        </Motion.h2>
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

