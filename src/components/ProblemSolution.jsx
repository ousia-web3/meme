import React from 'react';
import '../styles/section.css';

const ProblemSolution = () => {
  return (
    <section className="section-container hidden" id="problem-solution">
      <h2 className="section-title">Problem & Solution</h2>
      <div className="section-description">
        <p>
          ❗ <strong>Problems:</strong> Fake listings, unverifiable ownership, and centralized systems lacking transparency.
        </p>
        <p>
          ✅ <strong>Solutions:</strong> Upload contracts → Mint NFTs, authenticate mutually, reward users with OUSIA tokens, and grant DAO participation.
        </p>
      </div>
    </section>
  );
};

export default ProblemSolution;
