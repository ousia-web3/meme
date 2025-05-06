import React from 'react';
import { motion } from 'framer-motion';
import '../styles/section.css';

const ProjectOverview = () => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="section-container"
  >
    <h2 className="section-title">Project Overview</h2>
    <div className="section-description">
      <p>This Web3 project aims to build a transparent and trustworthy digital contract ecosystem by linking real-world real estate transactions with blockchain technology. It records the reliability of transactions using NFTs and provides tangible rewards in return.</p>
    </div>
  </motion.section>
);

export default ProjectOverview;
