// OUSIA Landing Page (GitHub Pages용 SPA 구조)
// React + HTML5 + CSS3 + LazyLoad + Scroll Animation + Fixed BottomNav

import React, { Suspense, lazy } from "react";
import { useEffect } from "react";
import "./App.css";

// Lazy loaded components
const HeroSection = lazy(() => import("./components/HeroSection"));
const ProjectOverview = lazy(() => import("./components/ProjectOverview"));
const MemeUniverse = lazy(() => import("./components/MemeUniverse"));
const CoreValues = lazy(() => import("./components/CoreValues"));
const ProblemSolution = lazy(() => import("./components/ProblemSolution"));
const RewardsTable = lazy(() => import("./components/RewardsTable"));
const TokenInfo = lazy(() => import("./components/TokenInfo"));
const Footer = lazy(() => import("./components/Footer"));
const BottomNav = lazy(() => import("./components/BottomNav"));

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <ProjectOverview />
        <MemeUniverse />
        <CoreValues />
        <ProblemSolution />
        <RewardsTable />
        <TokenInfo />
        <Footer />
        <BottomNav />
      </Suspense>
    </div>
  );
}

export default App;
