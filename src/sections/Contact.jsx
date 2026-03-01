import React from 'react';
import { motion as Motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { contactInfo } from '../data';
import '../styles/sections/contact.scss';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

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

        <div className="contact-container">
          <Motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me using any of the following methods:</p>
            
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
          </Motion.div>
          
          <Motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Send A Message</h3>
            <ContactForm />
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
