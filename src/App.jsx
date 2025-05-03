// src/App.jsx
import React from 'react';
import './index.css'; // 글로벌 스타일

// 개별 컴포넌트 import
import HeroSection from './components/HeroSection';
import CoreValues from './components/CoreValues';
import MemeUniverse from './components/MemeUniverse';
import ProblemSolution from './components/ProblemSolution';
import ProjectOverview from './components/ProjectOverview';
import RewardsTable from './components/RewardsTable';
import TokenInfo from './components/TokenInfo';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <CoreValues />
      <MemeUniverse />
      <ProblemSolution />
      <ProjectOverview />
      <RewardsTable />
      <TokenInfo />
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
