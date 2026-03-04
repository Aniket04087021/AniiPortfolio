import React from 'react';
import { motion as Motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { contactInfo } from '../data';
import '../styles/sections/contact.scss';
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone, FaReply } from 'react-icons/fa';
import SocialLinks from '../components/SocialLinks';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <Motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          <div className="underline"></div>
        </Motion.div>

        <Motion.p
          className="section-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Have an idea, freelance opportunity, or collaboration in mind? Let&apos;s build something meaningful.
        </Motion.p>

        <div className="contact-container">
          <Motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Contact Information</h3>
            <p>Reach out through any channel below. I usually reply within 24 hours.</p>

            <div className="contact-highlights">
              <div className="highlight-item">
                <FaReply />
                <span>Fast Response</span>
              </div>
              <div className="highlight-item">
                <FaClock />
                <span>Mon-Sat Availability</span>
              </div>
            </div>

            <div className="info-items">
              <div className="info-item">
                <div className="icon">
                  <FaEnvelope />
                </div>
                <div className="text">
                  <h4>Email</h4>
                  <p>{contactInfo.email}</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon">
                  <FaPhone />
                </div>
                <div className="text">
                  <h4>Phone</h4>
                  <p>{contactInfo.phone}</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="text">
                  <h4>Location</h4>
                  <p>{contactInfo.address}</p>
                </div>
              </div>
            </div>

            <div className="social-connect">
              <h4>Connect On</h4>
              <SocialLinks />
            </div>
          </Motion.div>

          <Motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Send A Message</h3>
            <p>Tell me about your project goals, expected timeline, and any preferred tech stack.</p>
            <ContactForm />
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
