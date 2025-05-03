import React, { useEffect } from 'react';
import './section.css'; // 같은 폴더에 section.css 위치할 것

function HeroSection() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

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
