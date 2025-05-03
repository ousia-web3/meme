// src/components/TokenInfo.jsx
import React from 'react';
import '../styles/section.css';

const TokenInfo = () => {
  return (
    <section className="section-container hidden">
      <h2 className="section-title">Token Information</h2>
      <div className="section-description">
        <p><strong>Token Name:</strong> OUSIA</p>
        <p><strong>Ticker:</strong> OSIA</p>
        <p><strong>Blockchain:</strong> Solana</p>
        <p><strong>Token Standard:</strong> SPL</p>
        <p><strong>Total Supply:</strong> 1,000,000,000 (1 billion)</p>
        <br />
        <ul>
          <li>🌟 Linked to real-world verification</li>
          <li>🌟 Usable as rewards in finance, travel, and shopping</li>
          <li>🌟 Meme IP designed for viral digital marketing</li>
        </ul>
      </div>
    </section>
  );
};

export default TokenInfo;
