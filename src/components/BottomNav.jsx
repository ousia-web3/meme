import React from 'react';
import '../styles/section.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#core-values">Values</a></li>
        <li><a href="#problem-solution">Solution</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
};

export default BottomNav;
