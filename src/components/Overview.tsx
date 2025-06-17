import React, { useState, useEffect } from 'react';
import { motion, useTransform, AnimatePresence } from 'framer-motion';

// Combined Overview Component
const Overview: React.FC<{scrollYProgress: any}> = ({ scrollYProgress }) => {
  const [currentSection, setCurrentSection] = useState(0);
  
  // Parallax effects for different elements
  const productY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);
  const analyticsY = useTransform(scrollYProgress, [0.1, 0.6], [50, -20]);
  const competitorsY = useTransform(scrollYProgress, [0.2, 0.7], [100, -10]);
  const rightBlockY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  // Content for each section
  const sections = [
    {
      heading: "You ship features, we update your landing page to match",
      description: "Mitosite watches your product releases and updates your landing page to match. No more manual updates or missed opportunities.",
      blockLabel: "Your SaaS Product",
      blockY: productY,
      blockTop: "top-0",
      dotPosition: "top-[100px]",
      pathD: "M0,10 C30,10 50,40 80,40"
    },
    {
      heading: "You sit back, we drive traffic and conversions",
      description: "Our platform automatically analyzes user behavior and optimizes your content for search engines and location-specific audiences.",
      blockLabel: "Your Landing Page Analytics",
      blockY: analyticsY,
      blockTop: "top-32",
      dotPosition: "top-[200px]",
      pathD: "M0,80 C30,80 50,100 80,100"
    },
    {
      heading: "You relax, we keep an eye on your competitors",
      description: "We monitor competitor websites and notify you of changes, helping you stay ahead in your market with timely feature updates.",
      blockLabel: "Your Competitors",
      blockY: competitorsY,
      blockTop: "top-64",
      dotPosition: "top-[300px]",
      pathD: "M0,200 C30,200 50,160 80,160"
    }
  ];

  // Handle scroll to change sections
  const handleScroll = (e: React.WheelEvent) => {
    e.preventDefault();
    
    if (e.deltaY > 0) {
      // Scrolling down
      setCurrentSection(prev => Math.min(prev + 1, 2));
    } else {
      // Scrolling up
      setCurrentSection(prev => Math.max(prev - 1, 0));
    }
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        setCurrentSection(prev => Math.min(prev + 1, 2));
      } else if (e.key === 'ArrowUp') {
        setCurrentSection(prev => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const currentContent = sections[currentSection];
  
  return (
    <section 
      id="overview" 
      className="relative py-24 bg-mitosite-beige overflow-hidden"
      onWheel={handleScroll}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 min-h-[70vh] items-center">
          {/* Left column with animated content */}
          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`section-${currentSection}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h2 
                  className="text-4xl md:text-5xl font-cardo font-bold text-mitosite-beige-dark mb-8 md:leading-snug"
                >
                  {currentContent.heading}
                </motion.h2>
                
                <motion.p 
                  className="text-lg font-josefin text-mitosite-beige-dark"
                >
                  {currentContent.description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Right column with parallax effect */}
          <div className="relative h-[500px]">
            {/* All blocks are always present, but opacity changes based on current section */}
            {sections.map((section, index) => (
              <motion.div 
                key={`block-${index}`}
                style={{ y: section.blockY }}
                className={`absolute left-0 ${section.blockTop}`}
                animate={{ opacity: currentSection === index ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-2 font-cardo text-mitosite-beige-dark">{section.blockLabel}</div>
                <div className="w-20 h-20 bg-mitosite-beige-dark"></div>
              </motion.div>
            ))}
            
            {/* Connection Lines */}
            <svg className="absolute left-24 top-10 w-32 h-64 overflow-visible">
              {sections.map((section, index) => (
                <motion.path 
                  key={`path-${index}`}
                  d={section.pathD}
                  fill="none"
                  stroke="#5A4B2E"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ 
                    pathLength: currentSection >= index ? 1 : 0,
                    opacity: currentSection === index ? 1 : 0.3
                  }}
                  transition={{ duration: 1.5 }}
                />
              ))}
            </svg>
            
            {/* Product Display */}
            <motion.div 
              style={{ y: rightBlockY }}
              className="absolute right-0 top-10 w-56 h-[400px] bg-mitosite-beige-dark"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {sections.map((section, index) => (
                <motion.div 
                  key={`dot-${index}`}
                  className={`absolute ${section.dotPosition} left-[-10px] w-4 h-4 rounded-full bg-mitosite-beige-mid`}
                  animate={{ opacity: currentSection >= index ? 1 : 0.3 }}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Step Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[0, 1, 2].map((step) => (
          <button 
            key={step}
            className={`w-3 h-3 rounded-full transition-colors duration-300 
              ${currentSection === step ? 'bg-mitosite-beige-dark' : 'bg-mitosite-beige-mid'}`}
            onClick={() => setCurrentSection(step)}
          />
        ))}
      </div>
    </section>
  );
};

export default Overview;

// Export individual sections for backward compatibility
export const OverviewProductSection: React.FC<{scrollYProgress: any}> = ({ scrollYProgress }) => (
  <Overview scrollYProgress={scrollYProgress} />
);

export const OverviewAnalyticsSection: React.FC<{scrollYProgress: any}> = ({ scrollYProgress }) => (
  <Overview scrollYProgress={scrollYProgress} />
);

export const OverviewCompetitorsSection: React.FC<{scrollYProgress: any}> = ({ scrollYProgress }) => (
  <Overview scrollYProgress={scrollYProgress} />
);
