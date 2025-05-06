import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import ProjectOverview from "./components/ProjectOverview";
import MissionUniverse from "./components/MissionUniverse";
import CoreValues from "./components/CoreValues";
import ProblemSolution from "./components/ProblemSolution";
import RewardsTable from "./components/RewardsTable";
import TokenInfo from "./components/TokenInfo";
import Footer from "./components/Footer";

function useInViewObserver(ref) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isVisible;
}

function AnimatedSection({ children, effect = "fadeUp" }) {
  const ref = useRef();
  const isVisible = useInViewObserver(ref);

  const variants = {
    fadeUp: { opacity: 1, y: 0 },
    scaleIn: { opacity: 1, scale: 1 },
    flipY: { opacity: 1, rotateY: 0 },
    glow: { opacity: 1, boxShadow: "0 0 20px rgba(255,255,255,0.4)" },
  };

  const initial = {
    fadeUp: { opacity: 0, y: 50 },
    scaleIn: { opacity: 0, scale: 0.95 },
    flipY: { opacity: 0, rotateY: 90 },
    glow: { opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={initial[effect]}
      animate={isVisible ? variants[effect] : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.div>
  );
}

function App() {
  return (
    <div className="font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection />
        </div>
      </motion.div>
      <AnimatedSection effect="fadeUp">
        <ProjectOverview />
      </AnimatedSection>
      <AnimatedSection effect="fadeUp">
        <MissionUniverse />
      </AnimatedSection>
      <AnimatedSection effect="scaleIn">
        <CoreValues />
      </AnimatedSection>
      <AnimatedSection effect="fadeUp">
        <ProblemSolution />
      </AnimatedSection>
      <AnimatedSection effect="flipY">
        <RewardsTable />
      </AnimatedSection>
      <AnimatedSection effect="scaleIn">
        <TokenInfo />
      </AnimatedSection>
      <AnimatedSection effect="glow">
        <Footer />
      </AnimatedSection>
    </div>
  );
}

export default App;
