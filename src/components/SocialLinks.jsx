import React from 'react';
import { socialLinks } from '../data';
import '../styles/components/socialLinks.scss';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const iconMap = {
  FaGithub: FaGithub,
  FaLinkedinIn: FaLinkedinIn,
  FaTwitter: FaTwitter,
  FaInstagram: FaInstagram,
};

const SocialLinks = () => {
  return (
    <div className="social-links">
      {socialLinks.map((link, index) => {
        const Icon = iconMap[link.icon];
        
        return (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Icon />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;