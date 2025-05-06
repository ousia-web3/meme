import React from 'react';
import { motion } from 'framer-motion';
import '../styles/section.css';

const CoreValues = () => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="section-container"
  >
    <h2 className="section-title">Core Values & Vision</h2>
    <div className="section-description">
      <ul>
        <li>🌟 <strong>Authenticity Verification</strong>: Validated on the blockchain</li>
        <li>🌟 <strong>Utility-Centric Meme Coin</strong>: Linked to real-world use cases</li>
        <li>🌟 <strong>Meme × Tech Integration</strong>: Combining meme power with tangible value</li>
        <li>🌟 <strong>Vision</strong>: Digital society rooted in trust and substance</li>
      </ul>
    </div>
  </motion.section>
);

export default CoreValues;
