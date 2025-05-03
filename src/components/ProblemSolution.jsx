// src/components/ProblemSolution.jsx
import React from 'react';
import '../styles/section.css';

const ProblemSolution = () => {
  return (
    <section className="section-container hidden">
      <h2 className="section-title">Problems & Solutions</h2>
      <div className="section-description">
        <p><strong>🌟 Problems</strong></p>
        <ul>
          <li>Fake listings and fraudulent transactions</li>
          <li>Inability to verify true ownership</li>
          <li>Lack of transparency and fair rewards in centralized systems</li>
        </ul>
        <br />
        <p><strong>🌟 Solutions</strong></p>
        <ul>
          <li>Upload real estate contracts → Generate transaction NFTs</li>
          <li>Enable mutual contract authentication</li>
          <li>Provide OUSIA reward tokens</li>
          <li>Grade NFTs + Grant DAO participation rights</li>
        </ul>
      </div>
    </section>
  );
};

export default ProblemSolution;
