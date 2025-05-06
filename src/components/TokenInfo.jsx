import React from 'react';
import { motion } from 'framer-motion';
import '../styles/section.css';

const TokenInfo = () => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="section-container"
  >
    <h2 className="section-title">Token Information</h2>
    <div className="section-description">
      <p>🔹 <strong>Name:</strong> OUSIA (OSIA)</p>
      <p>🔹 <strong>Chain:</strong> Solana (SPL)</p>
      <p>🔹 <strong>Supply:</strong> 1,000,000,000</p>
      <p>🔹 <strong>Utility:</strong> Verified rewards in finance, travel, shopping</p>
    </div>
  </motion.section>
);

export default TokenInfo;
