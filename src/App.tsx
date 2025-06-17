import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import { motion, useScroll, useSpring } from 'framer-motion';
import Nav from './components/Nav';
import Splash from './components/Splash';
import Overview from './components/Overview';
import GenerateAndMigrate from './components/GenerateAndMigrate';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Companies from './components/Companies';

// Add type definition for Google Analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function App() {
  const containerRef = useRef(null);
  const [overviewStep, setOverviewStep] = useState(0);
  const [isOverviewActive, setIsOverviewActive] = useState(false);
  const [currentSection, setCurrentSection] = useState('splash');

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

  // Track section changes with Google Analytics
  useEffect(() => {
    // Track page view
    if (window.gtag) {
      window.gtag('event', 'section_view', {
        'section_id': currentSection
      });
    }
  }, [currentSection]);

  // Regular sections
  const regularSections = [
    { id: 'splash', Component: Splash },
    { id: 'overview', Component: Overview },
    { id: 'generate-migrate', Component: GenerateAndMigrate },
    // { id: 'case-studies', Component: CaseStudies },
    { id: 'pricing', Component: Pricing },
    { id: 'faq', Component: FAQ },
    { id: 'footer', Component: Footer }
  ];

  // Setup intersection observers to track current section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const observerOptions = {
      root: containerRef.current,
      threshold: 0.6
    };

    // Create observers for each section
    regularSections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentSection(id);
            // Set overview as active when in view
            if (id === 'overview') {
              setIsOverviewActive(true);
            } else {
              setIsOverviewActive(false);
            }
          }
        });
      }, observerOptions);

      observer.observe(element);
      observers.push(observer);
    });

    // Cleanup
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // Track button clicks
  const trackButtonClick = (buttonName: string) => {
    if (window.gtag) {
      window.gtag('event', 'button_click', {
        'button_name': buttonName
      });
    }
  };

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
          trackButtonClick('scroll_indicator');
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
