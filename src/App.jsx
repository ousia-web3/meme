import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
// 고정 헤더 및 섹션 컴포넌트
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectOverview from "./components/ProjectOverview";
import MissionUniverse from "./components/MissionUniverse";
import CoreValues from "./components/CoreValues";
import ProblemSolution from "./components/ProblemSolution";
import RewardsTable from "./components/RewardsTable";
import TokenInfo from "./components/TokenInfo";
import Footer from "./components/Footer";

// 전체 배경에 적용될 동적 그라데이션 & 블러 효과
const DynamicBackground = () => {
  const [index, setIndex] = useState(0);
  const gradients = [
    "from-indigo-700 via-purple-600 to-pink-500",
    "from-purple-700 via-pink-500 to-yellow-500",
    "from-teal-700 via-cyan-500 to-blue-500"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % gradients.length);
    }, 8000); // 8초마다 전환
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full -z-10 blur-md transition-all duration-1000 bg-gradient-to-br ${gradients[index]}`}
    />
  );
};

// 스크롤 인터섹션 애니메이션 Hook
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

// 각 섹션 애니메이션 래퍼
function AnimatedSection({ children, effect = "fadeUp" }) {
  const ref = useRef();
  const isVisible = useInViewObserver(ref);

  const variants = {
    fadeUp: { opacity: 1, y: 0 },
    scaleIn: { opacity: 1, scale: 1 },
    flipY: { opacity: 1, rotateY: 0 },
    glow: { opacity: 1, boxShadow: "0 0 20px rgba(255,255,255,0.4)" }
  };
  const initial = {
    fadeUp: { opacity: 0, y: 50 },
    scaleIn: { opacity: 0, scale: 0.95 },
    flipY: { opacity: 0, rotateY: 90 },
    glow: { opacity: 0 }
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

// App 구성
function App() {
  return (
    <div className="font-sans relative">
      <DynamicBackground />
      <Header />

      {/* 헤더 높이만큼 여백 확보 */}
      <div className="pt-16">
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
          <section id="overview"><ProjectOverview /></section>
        </AnimatedSection>
        <AnimatedSection effect="fadeUp">
          <section id="mission"><MissionUniverse /></section>
        </AnimatedSection>
        <AnimatedSection effect="scaleIn">
          <section id="values"><CoreValues /></section>
        </AnimatedSection>
        <AnimatedSection effect="fadeUp">
          <section id="solution"><ProblemSolution /></section>
        </AnimatedSection>
        <AnimatedSection effect="flipY">
          <section id="rewards"><RewardsTable /></section>
        </AnimatedSection>
        <AnimatedSection effect="scaleIn">
          <section id="token"><TokenInfo /></section>
        </AnimatedSection>
        <AnimatedSection effect="glow">
          <Footer />
        </AnimatedSection>
      </div>
    </div>
  );
}

export default App;
