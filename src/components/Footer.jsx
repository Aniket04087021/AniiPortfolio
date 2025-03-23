import React from 'react';
import SocialLinks from './SocialLinks';
import '../styles/components/footer.scss';
import { navLinks, contactInfo } from '../data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Aniket</h3>
            <p>Web Developer & Designer</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p>
              <span>Email:</span> {contactInfo.email}
            </p>
            <p>
              <span>Phone:</span> {contactInfo.phone}
            </p>
            <p>
              <span>Location:</span> {contactInfo.address}
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="social-links-wrapper">
            <SocialLinks />
          </div>
          <p className="copyright">
            &copy; {currentYear} Aniket - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;