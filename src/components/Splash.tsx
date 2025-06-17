import React, { useEffect, useState, useRef } from "react";
import flowers from "../images/flowers.svg";
import cell1 from "../images/cell1.svg";
import cell2 from "../images/cell2.svg";
import cell3 from "../images/cell3.svg";
import { Expand, Maximize2, Minus, Plus, X } from "lucide-react";
import { motion, useAnimationFrame } from "framer-motion";
import Companies from "./Companies";

const keyFeatures = [
  { "✺": "SEO Optimized" },
  { "✳": "Generated Blog Posts" },
  { "✦": "Self-updating" },
  { "✳": "AI-powered" },
  { "✺": "Conversion Optimized" },
  { "✦": "Competitor Tracking" },
];

const Splash: React.FC = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);
  
  // Refs for the scrolling features
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    setShowFirst(true);
    const t1 = setTimeout(() => setShowSecond(true), 100);
    const t2 = setTimeout(() => setShowThird(true), 500);
    const t3 = setTimeout(() => setShowFourth(true), 1000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // Calculate widths for the scrolling effect
  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current.parentElement;
      if (container) {
        setContainerWidth(container.offsetWidth);
      }
      setContentWidth(scrollRef.current.scrollWidth / 2); // Divide by 2 because we duplicate content
    }
  }, []);

  // Create infinite scrolling animation
  useAnimationFrame(() => {
    if (contentWidth <= 0) return;
    
    // Update scroll position
    setScrollX(prev => {
      // When we've scrolled the width of the original content, reset to start
      if (Math.abs(prev) >= contentWidth) {
        return 0;
      }
      return prev - 0.5; // Adjust speed here
    });
  });

  // Create duplicated content for seamless scrolling
  // We need to duplicate the content so when the first set scrolls out, the second set is visible
  const duplicatedFeatures = [...keyFeatures, ...keyFeatures, ...keyFeatures, ...keyFeatures];

  return (
    <div className="grid grid-cols-2 relative  bg-mitosite-beige border-b border-mitosite-beige-dark">
      <div className="container mx-auto pt-24 pb-12 md:pt-32 md:pb-24 col-span-1 ">
        <div className="max-w-4xl px-6">
          <h1 className="font-cardo text-4xl md:text-6xl font-bold text-mitosite-beige-dark mb-6 leading-snug md:leading-snug">
            <span
              className={`block transition-all duration-700 ${
                showFirst ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              Self-evolving
            </span>
            <span
              className={`block transition-all duration-700 ${
                showSecond ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              landing pages for
            </span>
            <span
              className={`block transition-all duration-700 ${
                showThird ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              ever growing startups
            </span>
          </h1>
          <div
            className={`block transition-all duration-700 ${
              showFourth ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <p className="font-josefin text-mitosite-beige-dark text-lg md:text-xl max-w-3xl mb-8">
              Join the startups building stunning, self-updating websites with
              Mitosite AI — from first launch to feature updates, SEO, and
              beyond.
            </p>

            <div className="flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-64 relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="placeholder:text-mitosite-beige-dark w-full px-4 py-3 bg-mitosite-beige-mid text-mitosite-beige-dark border border-mitosite-beige-dark focus:border-mitosite-beige-dark focus:outline-none"
                />
              </div>
              <button className="px-6 py-3 bg-mitosite-beige-dark hover:bg-mitosite-beige-darkest text-mitosite-beige font-medium transition-colors border border-mitosite-beige-dark">
                Start now →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 max-h-screen bg-mitosite-beige border-l border-mitosite-beige-dark">
        {/* Left Column */}
        <div className="flex flex-col p-4 flex items-end">
          <motion.div 
          initial={{height: 0, bottom: 0}}
          animate={{height: "100%", bottom: 100}}
          transition={{duration: 1}}
          className="origin-bottom w-full h-full bg-gradient-to-b from-mitosite-beige via-[#B9BFB1]/50 to-mitosite-beige-mid rounded-2xl">
            <motion.img
              initial={{ scale: 0}}
              animate={{ scale: 1}}
              transition={{delay: 1, duration: 0.5}}
              src={flowers}
              alt="Flowers"
              className="w-full h-full object-contain opacity-100 z-50"
            />
          </motion.div>
        </div>
        {/* Right Column */}
        <div className="flex flex-col border-l border-mitosite-beige-dark">
          {/* Browser Chrome */}
          <div className="bg-mitosite-beige border-b border-mitosite-beige-dark p-2 flex items-center">
            <div className="flex space-x-1.5 mr-4">
              <div className="w-4 h-4 rounded-full bg-mitosite-beige-dark flex items-center justify-center">
                <X className="w-2 h-2 text-mitosite-beige" />
              </div>
              <div className="w-4 h-4 rounded-full bg-mitosite-beige-dark flex items-center justify-center">
                <Minus className="w-3 h-3 text-mitosite-beige" />
              </div>
              <div className="w-4 h-4 rounded-full bg-mitosite-beige-dark flex items-center justify-center">
                <Expand className="w-2 h-2 text-mitosite-beige" />
              </div>
            </div>
            <X className="w-4 h-4 text-mitosite-beige-dark ml-auto" />
          </div>

          {/* Navigation */}
          <div className="flex justify-between px-4 py-3 border-b border-mitosite-beige-dark">
            <div className="text-sm font-medium text-mitosite-beige-dark">
              MENU
            </div>
            <div className="text-sm font-medium text-mitosite-beige-dark">
              LOGO
            </div>
            <div className="text-sm font-medium text-mitosite-beige-dark">
              CTA
            </div>
          </div>

          {/* Value Prop Section */}
          <motion.div 
          initial={{width: 0}}
          animate={{width: "100%"}}
          transition={{ duration: 1.5}}
          className="p-4 border-b border-mitosite-beige-dark">
            <motion.div initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.6, duration: 0.5}} className="text-sm font-medium text-mitosite-beige-dark mb-2 text-nowrap">
              CLEAR VALUE PROP
            </motion.div>
            <div className=" bg-gradient-to-b from-mitosite-beige to-[#B9BFB1]/60 rounded-lg h-56 mb-4"></div>
            {/* <div className="bg-mitosite-beige-mid bg-opacity-30 rounded-lg h-20"></div> */}
          </motion.div>
          {/* SEO and Blog Section */}
          <motion.div 
          initial={{width: 0}}
          animate={{width: "100%"}}
          transition={{ duration: 1.5}}
          className="p-4 border-b border-mitosite-beige-dark overflow-hidden">
            <div className="relative w-full overflow-hidden">
              <motion.div 
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.3}}
                ref={scrollRef}
                className="flex whitespace-nowrap"
                style={{ x: scrollX }}
              >
                {duplicatedFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="text-sm font-medium text-mitosite-beige-dark uppercase flex items-center gap-2 mr-8"
                  >
                    <div className="">{Object.keys(feature)[0]}</div>
                    {Object.values(feature)[0]}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          <div className="grid grid-cols-3 gap-2 h-40">
            <div className="border-r border-dashed border-mitosite-beige-dark">
              <motion.img
              initial={{scale: 0}}
              animate={{scale: 1}}
              transition={{delay: 0.3}}
                src={cell1}
                alt="Cell 1"
                className="w-full  object-contain p-3"
              />
              <motion.p 
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.3}}
              className="text-mitosite-beige-dark text-sm text-center">Analyze </motion.p>
              
            </div>
            <div className="border-r border-dashed border-mitosite-beige-dark">
              <motion.img
              initial={{scale: 0}}
              animate={{scale: 1}}
              transition={{delay: 0.6}}
                src={cell2}
                alt="Cell 2"
                className="w-full object-contain p-3"
              />
              <motion.p 
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.6}}
              className="text-mitosite-beige-dark text-sm text-center">Generate </motion.p>
            </div>

            <div className="">
              <motion.img
              initial={{scale: 0}}
              animate={{scale: 1}}
              transition={{delay: 0.9}}
                src={cell3}
                alt="Cell 3"
                className="w-full object-contain p-3"
              />
              <motion.p 
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.9}}
              className="text-mitosite-beige-dark text-sm text-center">Evolve </motion.p>
            </div>
          </div>
          {/* Footer */}
          <div className="border-t border-mitosite-beige-dark col-span-2 bg-gradient-to-r from-mitosite-beige via-[#B9BFB1]/50 to-mitosite-beige-mid h-12">
            <svg
              className="w-full h-full p-3"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <motion.path
                initial={{pathLength: 0}}
                d="M0,10 Q5,0 10,10 Q15,20 20,10 Q25,0 30,10 Q35,20 40,10 Q45,0 50,10 Q55,20 60,10 Q65,0 70,10 Q75,20 80,10 Q85,0 90,10 Q95,20 100,10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                className="text-mitosite-beige-dark"
                animate={{ pathLength: 1 }}
                transition={{ 
                  pathLength: { duration: 1.5, ease: "easeOut" }
                }}
                onAnimationComplete={() => {
                  // This is a placeholder for animation sequencing
                  // The actual wave animation is handled by the second path
                }}
              />
              
              {/* Second path for the wave animation that starts after the first animation */}
              <motion.path
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  d: [
                    "M0,10 Q5,0 10,10 Q15,20 20,10 Q25,0 30,10 Q35,20 40,10 Q45,0 50,10 Q55,20 60,10 Q65,0 70,10 Q75,20 80,10 Q85,0 90,10 Q95,20 100,10",
                    "M0,10 Q5,20 10,10 Q15,0 20,10 Q25,20 30,10 Q35,0 40,10 Q45,20 50,10 Q55,0 60,10 Q65,20 70,10 Q75,0 80,10 Q85,20 90,10 Q95,0 100,10",
                    "M0,10 Q5,0 10,10 Q15,20 20,10 Q25,0 30,10 Q35,20 40,10 Q45,0 50,10 Q55,20 60,10 Q65,0 70,10 Q75,20 80,10 Q85,0 90,10 Q95,20 100,10"
                  ]
                }}
                transition={{
                  opacity: { delay: 1.5, duration: 0.3 },
                  d: {
                    delay: 1.5,
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                d="M0,10 Q5,0 10,10 Q15,20 20,10 Q25,0 30,10 Q35,20 40,10 Q45,0 50,10 Q55,20 60,10 Q65,0 70,10 Q75,20 80,10 Q85,0 90,10 Q95,20 100,10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                className="text-mitosite-beige-dark"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-span-2 bg-mitosite-beige-dark border-t border-mitosite-beige-dark">
        <Companies />
      </div>
    </div>
  );
};

export default Splash;
