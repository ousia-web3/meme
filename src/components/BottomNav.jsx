// src/components/BottomNav.jsx
import React from 'react';
import '../styles/section.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#rewards">Rewards</a></li>
        <li><a href="#token">Token</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
};

export default BottomNav;
