import React from 'react';
import HeroSection from './components/HeroSection';
import CoreValues from './components/CoreValues';
import MemeUniverse from './components/MemeUniverse';
import ProjectOverview from './components/ProjectOverview';
import ProblemSolution from './components/ProblemSolution';
import RewardsTable from './components/RewardsTable';
import TokenInfo from './components/TokenInfo';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <HeroSection />
      <CoreValues />
      <MemeUniverse />
      <ProjectOverview />
      <ProblemSolution />
      <RewardsTable />
      <TokenInfo />
      <Footer />
    </>
  );
}

export default App;
