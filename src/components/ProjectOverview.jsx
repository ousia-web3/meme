// src/components/ProjectOverview.jsx
import React from 'react';
import '../styles/section.css';

const ProjectOverview = () => {
  return (
    <section className="section-container hidden">
      <h2 className="section-title">Project Overview</h2>
      <p className="section-description">
        OUSIA is a Web3 project that builds a transparent and trustworthy digital contract ecosystem by connecting real-world real estate transactions with blockchain technology.
        <br /><br />
        By certifying transactions as NFTs and offering tangible rewards, it enables users to participate in a new proof-of-reality environment where ownership is verified and fraud is minimized.
      </p>
    </section>
  );
};

export default ProjectOverview;