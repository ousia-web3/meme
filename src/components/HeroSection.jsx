import React, { useEffect, useRef, useState } from 'react';
import '../components/styles/section.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const HeroSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.3 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`section-container ${isVisible ? 'fade-in' : ''}`}>
      <h1 className="section-title">OUSIA Project</h1>
      <p className="section-description">A Utility Meme Coin for a Trust-Based Digital Asset Ecosystem in the Web3 Era</p>
      <LazyLoadImage
        src="/assets/hero-image.png"
        alt="Hero visual"
        effect="blur"
        className="hero-image"
      />
    </section>
  );
};

export default HeroSection;