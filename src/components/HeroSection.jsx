// src/components/HeroSection.jsx
import React from 'react';
import '../styles/section.css';
import logo from '../assets/ousia-logo.png'; // 첨부한 고양이 코인 이미지

const HeroSection = () => {
  return (
    <section className="hero-section hidden">
      <div className="hero-content">
        <img src={logo} alt="OUSIA Logo" className="hero-logo" />
        <h1 className="hero-title">Prove Real Ownership Through Memes</h1>
        <p className="hero-subtitle">A utility meme coin for a trust-based digital asset ecosystem</p>
      </div>
    </section>
  );
};

export default HeroSection;
