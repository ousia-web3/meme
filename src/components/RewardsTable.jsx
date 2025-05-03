// src/components/RewardsTable.jsx
import React from 'react';
import '../styles/section.css';

const RewardsTable = () => {
  return (
    <section className="section-container hidden">
      <h2 className="section-title">Rewards & NFT Structure</h2>
      <div className="section-description">
        <table className="reward-table">
          <thead>
            <tr>
              <th>Transaction Type</th>
              <th>Base Reward</th>
              <th>Verification Bonus</th>
              <th>Max Reward</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Sale</td><td>250 RTDG</td><td>+150 RTDG</td><td>400 RTDG</td></tr>
            <tr><td>Lease (Jeonse)</td><td>120 RTDG</td><td>+80 RTDG</td><td>200 RTDG</td></tr>
            <tr><td>Monthly Rent</td><td>60 RTDG</td><td>+40 RTDG</td><td>100 RTDG</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RewardsTable;
