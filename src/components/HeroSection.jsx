import React from 'react';
import './section.css'; // 필요 시 스타일 파일도 함께 작성됨

function HeroSection() {
  return (
    <section className="hero-section hidden">
      <div className="container">
        <h1>OUSIA Project</h1>
        <p>A Utility Meme Coin for a Trust-Based Digital Asset Ecosystem in the Web3 Era</p>
      </div>
    </section>
  );
}

export default HeroSection;
