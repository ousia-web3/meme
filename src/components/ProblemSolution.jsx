import React from 'react';
import { motion } from 'framer-motion';
import '../styles/section.css';

const ProblemSolution = () => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="section-container"
  >
    <h2 className="section-title">Problem & Solution</h2>
    <div className="section-description">
      <p>🌟 <strong>Problems:</strong> Fake listings, unverifiable ownership, and centralized systems.</p>
      <p>🌟 <strong>Solutions:</strong> Upload real estate contracts → Generate NFTs → Authenticate → Reward with tokens and DAO access.</p>
    </div>
  </motion.section>
);

export default ProblemSolution;
