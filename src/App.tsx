import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Splash from './components/Splash';
import Features from './components/Features';
import GenerateAndMigrate from './components/GenerateAndMigrate';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import { MOBILE_NAV_HEIGHT, DESKTOP_NAV_HEIGHT } from "./constants"

function HomePage() {
  const containerRef = useRef(null);

  // Regular sections
  const regularSections = [
    { id: 'splash', Component: Splash },
    { id: 'features', Component: Features },
    { id: 'generate-migrate', Component: GenerateAndMigrate },
    { id: 'pricing', Component: Pricing },
    { id: 'faq', Component: FAQ },
    { id: 'footer', Component: Footer }
  ];

  return (
    <div className="App relative bg-mitosite-beige h-screen overflow-hidden">
      {/* Fixed navigation that stays on top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Nav />
      </div>
      
      {/* Scroll snapping container */}
      <div 
        ref={containerRef}
        className={`h-[calc(100vh-${MOBILE_NAV_HEIGHT}px)] md:h-[calc(100vh-${DESKTOP_NAV_HEIGHT}px)] overflow-y-auto lg:snap-y lg:snap-mandatory scroll-smooth snap-container mt-[113px]`}
        style={{ overflowX: 'hidden' }}
      >
        <div className="border-r border-mitosite-beige-dark">
          {/* Remaining regular sections */}
          {regularSections.map(({ id, Component }) => (
            <div 
              key={id}
              id={id}
              className={`h-[calc(100vh-${MOBILE_NAV_HEIGHT}px)] md:h-[calc(100vh-${DESKTOP_NAV_HEIGHT}px)] lg:snap-start lg:snap-always lg:snap-section`}
            >
              <Component />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
