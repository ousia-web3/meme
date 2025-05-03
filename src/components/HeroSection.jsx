import React from 'react';
import '../../styles/section.css'; // 파일이 /src/styles/ 폴더에 있는 경우

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
