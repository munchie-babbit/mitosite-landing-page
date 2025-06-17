import React, { useEffect, useState } from "react";
import flowers from "../images/flowers.svg";
import { Expand, Maximize2, Minus, Plus, X } from "lucide-react";
import Companies from "./Companies";

const keyFeatures = [
  { "✺": "SEO Optimized" },
  { "✳": "Generated Blog Posts" },
  { "✦": "Self-updating" },
  { "✳": "AI-powered" },
];

const Splash: React.FC = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);

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

  // Duplicate keyFeatures for seamless scrolling
  const scrollingFeatures = [...keyFeatures, ...keyFeatures, ...keyFeatures];

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
        <div className="flex flex-col p-4">
            <div className="w-full h-full bg-gradient-to-b from-mitosite-beige via-[#B9BFB1]/50 to-mitosite-beige-mid rounded-2xl">
          <img
            src={flowers}
            alt="Flowers"
            className="w-full h-full object-contain opacity-100 z-50"
          />
          </div>
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
          <div className="p-4 border-b border-mitosite-beige-dark">
            <div className="text-sm font-medium text-mitosite-beige-dark mb-2">
              CLEAR VALUE PROP
            </div>
            <div className="bg-mitosite-beige-mid bg-opacity-50 rounded-lg h-56 mb-4"></div>
            {/* <div className="bg-mitosite-beige-mid bg-opacity-30 rounded-lg h-20"></div> */}
          </div>
          {/* SEO and Blog Section */}
          <div className="p-4 border-b border-mitosite-beige-dark overflow-hidden">
            <div className="relative w-full">
              <div className="flex animate-scroll whitespace-nowrap">
                {scrollingFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="text-sm font-medium text-mitosite-beige-dark uppercase flex items-center gap-2 mr-8"
                  >
                    <div className="">{Object.keys(feature)[0]}</div>
                    {Object.values(feature)[0]}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 h-40">
            <div className="border-r border-dashed border-mitosite-beige-dark"></div>
            <div className="border-r border-dashed border-mitosite-beige-dark"></div>
            <div></div>
          </div>
          {/* Footer */}
          <div className="col-span-2 bg-mitosite-beige-dark h-12"></div>
        </div>
      </div>
      <div className="col-span-2 bg-mitosite-beige-dark border-t border-mitosite-beige-dark">
        <Companies />
      </div>
    </div>
  );
};

export default Splash;
