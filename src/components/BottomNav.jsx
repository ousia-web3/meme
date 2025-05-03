// src/components/BottomNav.jsx
import React from 'react';
import './bottomnav.css'; // 또는 '../styles/bottomnav.css' 위치에 따라 조정

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
