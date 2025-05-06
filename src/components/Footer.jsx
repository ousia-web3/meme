import React from 'react';
import { motion } from 'framer-motion';
import '../styles/section.css';

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="section-container"
  >
    <div className="section-description">
      <p>© 2025 OUSIA Project. Built with Web3 trust in mind.</p>
    </div>
  </motion.footer>
);

export default Footer;
