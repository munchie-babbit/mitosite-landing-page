import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import { motion, useScroll, useSpring } from 'framer-motion';
import Nav from './components/Nav';
import Splash from './components/Splash';
import { OverviewProductSection, OverviewAnalyticsSection, OverviewCompetitorsSection } from './components/Overview';
import GenerateAndMigrate from './components/GenerateAndMigrate';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Companies from './components/Companies';

function App() {
  const containerRef = useRef(null);
  const [overviewStep, setOverviewStep] = useState(0);
  const [isOverviewActive, setIsOverviewActive] = useState(false);

  const { scrollYProgress } = useScroll({
    container: containerRef
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  // Enable/disable container scrolling based on overview state
  useEffect(() => {
    const container = containerRef.current as HTMLElement | null;
    if (!container) return;
    
    if (isOverviewActive) {
      container.classList.remove('overflow-y-auto');
      container.classList.add('overflow-hidden');
    } else {
      container.classList.remove('overflow-hidden');
      container.classList.add('overflow-y-auto');
    }
  }, [isOverviewActive]);

  // Regular sections (excluding overview sections)
  const regularSections = [
    { id: 'splash', Component: Splash },
    { id: 'overview1', Component: OverviewProductSection },
    { id: 'overview2', Component: OverviewAnalyticsSection },
    { id: 'overview3', Component: OverviewCompetitorsSection },
    { id: 'generate-migrate', Component: GenerateAndMigrate },
    // { id: 'case-studies', Component: CaseStudies },
    { id: 'pricing', Component: Pricing },
    { id: 'faq', Component: FAQ },
    { id: 'footer', Component: Footer }
  ];


  return (
    <div className="App relative bg-mitosite-beige">
      {/* Fixed navigation that stays on top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Nav />
      </div>
      
      {/* Scroll snapping container */}
      <div 
        ref={containerRef}
        className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth snap-container mt-[113px]"
      >
        
        {/* Remaining regular sections */}
        {regularSections.map(({ id, Component }) => (
          <div 
            key={id}
            id={id}
            className="h-screen snap-start snap-always snap-section"
          >
            <Component scrollYProgress={scrollYProgress} />
          </div>
        ))}
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="fixed bottom-8 right-8 w-10 h-10 rounded-full bg-mitosite-beige-dark flex items-center justify-center z-40 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => {
          const nextSection = document.getElementById('overview');
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-mitosite-beige" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
}

export default App;
