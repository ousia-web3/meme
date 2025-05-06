import React from 'react';
import { motion } from 'framer-motion';
import '../styles/section.css';

const RewardsTable = () => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="section-container"
  >
    <h2 className="section-title">Reward Structure</h2>
    <div className="section-description">
      <table>
        <thead>
          <tr><th>Transaction Type</th><th>Base</th><th>Bonus</th><th>Max</th></tr>
        </thead>
        <tbody>
          <tr><td>Sale</td><td>250 RTDG</td><td>+150</td><td>400</td></tr>
          <tr><td>Lease</td><td>120 RTDG</td><td>+80</td><td>200</td></tr>
          <tr><td>Rent</td><td>60 RTDG</td><td>+40</td><td>100</td></tr>
        </tbody>
      </table>
    </div>
  </motion.section>
);

export default RewardsTable;
