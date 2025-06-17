import React from 'react';
import { motion, useTransform } from 'framer-motion';

// Product Section Component
export const OverviewProductSection: React.FC<{scrollYProgress: any}> = ({ scrollYProgress }) => {
  const productY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);
  const rightBlockY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 min-h-[70vh] items-center">
      {/* Left column */}
      <div className="flex flex-col justify-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-cardo font-bold text-mitosite-beige-dark mb-8 md:leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          We auto update your landing page based on your new feature releases
        </motion.h2>
        
        <motion.p 
          className="text-lg font-josefin text-mitosite-beige-dark"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Mitosite combines your product data, analytics, and competitor insights to create landing pages that continuously evolve with your business needs.
        </motion.p>
      </div>
      
      {/* Right column with parallax effect */}
      <div className="relative h-[500px]">
        {/* Product Block */}
        <motion.div 
          style={{ y: productY }}
          className="absolute left-0 top-0"
        >
          <div className="mb-2 font-cardo text-mitosite-beige-dark">Product</div>
          <div className="w-20 h-20 bg-mitosite-beige-dark"></div>
        </motion.div>
        
        {/* Connection Lines */}
        <svg className="absolute left-24 top-10 w-32 h-64 overflow-visible">
          {/* Product line */}
          <motion.path 
            d="M0,10 C30,10 50,40 80,40"
            fill="none"
            stroke="#5A4B2E"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
        
        {/* Product Display */}
        <motion.div 
          style={{ y: rightBlockY }}
          className="absolute right-0 top-10 w-56 h-[400px] bg-mitosite-beige-dark"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-[40px] left-[-10px] w-4 h-4 rounded-full bg-mitosite-beige-mid"></div>
        </motion.div>
      </div>
    </div>
  );
};

// Analytics Section Component
export const OverviewAnalyticsSection: React.FC<{scrollYProgress: any}> = ({ scrollYProgress }) => {
  const analyticsY = useTransform(scrollYProgress, [0.1, 0.6], [50, -20]);
  const rightBlockY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 min-h-[70vh] items-center">
      {/* Left column */}
      <div className="flex flex-col justify-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-cardo font-bold text-mitosite-beige-dark mb-8 md:leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          We analyze your analytics to improve your SEO and geo-targeting
        </motion.h2>
        
        <motion.p 
          className="text-lg font-josefin text-mitosite-beige-dark"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our platform automatically analyzes user behavior and optimizes your content for search engines and location-specific audiences.
        </motion.p>
      </div>
      
      {/* Right column with parallax effect */}
      <div className="relative h-[500px]">
        {/* Analytics Block */}
        <motion.div 
          style={{ y: analyticsY }}
          className="absolute left-0 top-32"
        >
          <div className="mb-2 font-cardo text-mitosite-beige-dark">Analytics</div>
          <div className="w-20 h-20 bg-mitosite-beige-dark"></div>
        </motion.div>
        
        {/* Connection Lines */}
        <svg className="absolute left-24 top-10 w-32 h-64 overflow-visible">
          {/* Analytics line */}
          <motion.path 
            d="M0,80 C30,80 50,100 80,100"
            fill="none"
            stroke="#5A4B2E"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
        
        {/* Product Display */}
        <motion.div 
          style={{ y: rightBlockY }}
          className="absolute right-0 top-10 w-56 h-[400px] bg-mitosite-beige-dark"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-[100px] left-[-10px] w-4 h-4 rounded-full bg-mitosite-beige-mid"></div>
        </motion.div>
      </div>
    </div>
  );
};

// Competitors Section Component
export const OverviewCompetitorsSection: React.FC<{scrollYProgress: any}> = ({ scrollYProgress }) => {
  const competitorsY = useTransform(scrollYProgress, [0.2, 0.7], [100, -10]);
  const rightBlockY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 min-h-[70vh] items-center">
      {/* Left column */}
      <div className="flex flex-col justify-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-cardo font-bold text-mitosite-beige-dark mb-8 md:leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          We keep an eye on your competitors to track their feature updates
        </motion.h2>
        
        <motion.p 
          className="text-lg font-josefin text-mitosite-beige-dark"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We monitor competitor websites and notify you of changes, helping you stay ahead in your market with timely feature updates.
        </motion.p>
      </div>
      
      {/* Right column with parallax effect */}
      <div className="relative h-[500px]">
        {/* Competitors Block */}
        <motion.div 
          style={{ y: competitorsY }}
          className="absolute left-0 top-64"
        >
          <div className="mb-2 font-cardo text-mitosite-beige-dark">Competitors</div>
          <div className="w-20 h-20 bg-mitosite-beige-dark"></div>
        </motion.div>
        
        {/* Connection Lines */}
        <svg className="absolute left-24 top-10 w-32 h-64 overflow-visible">
          {/* Competitors line */}
          <motion.path 
            d="M0,200 C30,200 50,160 80,160"
            fill="none"
            stroke="#5A4B2E"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
        
        {/* Product Display */}
        <motion.div 
          style={{ y: rightBlockY }}
          className="absolute right-0 top-10 w-56 h-[400px] bg-mitosite-beige-dark"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-[160px] left-[-10px] w-4 h-4 rounded-full bg-mitosite-beige-mid"></div>
        </motion.div>
      </div>
    </div>
  );
};

// Simple wrapper component for backward compatibility
const Overview: React.FC = () => {
  return (
    <section id="overview" className="relative py-24 bg-mitosite-beige overflow-hidden">
      <div className="container mx-auto px-6">
        <OverviewProductSection scrollYProgress={0} />
      </div>
    </section>
  );
};

export default Overview;
