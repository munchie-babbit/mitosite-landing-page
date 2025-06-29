import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import { motion, useScroll, useSpring } from 'framer-motion';
import Nav from './components/Nav';
import Splash from './components/Splash';
// import Overview from './components/Overview';
import GenerateAndMigrate from './components/GenerateAndMigrate';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Companies from './components/Companies';



function App() {
  const containerRef = useRef(null);

  // Regular sections
  const regularSections = [
    { id: 'splash', Component: Splash },
    // { id: 'overview', Component: Overview },
    { id: 'generate-migrate', Component: GenerateAndMigrate },
    // { id: 'case-studies', Component: CaseStudies },
    { id: 'pricing', Component: Pricing },
    { id: 'faq', Component: FAQ },
    { id: 'footer', Component: Footer }
  ];


  return (
    <div className="App relative bg-mitosite-beige h-screen overflow-hidden ">
      {/* Fixed navigation that stays on top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Nav />
      </div>
      
      {/* Scroll snapping container */}
      <div 
        ref={containerRef}
        className="h-[calc(100vh-113px)] overflow-y-auto md:snap-y md:snap-mandatory scroll-smooth snap-container mt-[113px]"
        style={{ overflowX: 'hidden' }}
      >
        <div className="border-r border-mitosite-beige-dark">
        {/* Remaining regular sections */}
        {regularSections.map(({ id, Component }, index) => {
          return (
            <div 
              key={id}
              id={id}
              className={'md:h-[calc(100vh-113px)] md:snap-start md:snap-always md:snap-section'}
            >
              <Component />
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}

export default App;
