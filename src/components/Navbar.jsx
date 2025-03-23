import React, { useState, useEffect } from 'react';
import { navLinks } from '../data';
import '../styles/components/navbar.scss';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
          setActive(id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home">Aniket</a>
        </motion.div>

        <ul className="nav-links desktop-nav">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: navLinks.indexOf(link) * 0.1 }}
            >
              <a
                href={`#${link.id}`}
                className={active === link.id ? 'active-link' : ''}
                onClick={() => setActive(link.id)}
              >
                {link.title}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="mobile-menu">
          <div className="mobile-menu-icon" onClick={() => setToggle(!toggle)}>
            {toggle ? <FaTimes /> : <FaBars />}
          </div>

          <motion.div 
            className={`mobile-nav ${toggle ? 'show-menu' : ''}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: toggle ? 1 : 0,
              x: toggle ? 0 : 50
            }}
            transition={{ duration: 0.3 }}
          >
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={active === link.id ? 'active-link' : ''}
                    onClick={() => {
                      setActive(link.id);
                      setToggle(false);
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;