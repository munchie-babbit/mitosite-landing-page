import React from 'react';
import splash from '../images/splash.jpg';

const Splash: React.FC = () => {
  return (
    <div className=" grid grid-cols-2 relative min-h-screen bg-mitosite-beige">
      <div className="container mx-auto pt-24 pb-12 md:pt-32 md:pb-24 col-span-1">
        <div className="max-w-4xl">
          <h1 className="font-cardo text-5xl md:text-7xl font-bold text-mitosite-green mb-6">
          Evolving landing pages for ever-changing startups
            
          </h1>
          
          <p className="font-josefin text-mitosite-black text-lg md:text-xl max-w-3xl mb-8">
          Join the startups building stunning, self-updating websites with Mitosite — from first launch to feature updates, SEO, and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center">
            <div className="w-full sm:w-64 relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full px-4 py-3 rounded-l-full text-mitosite-black border-2 border-mitosite-green focus:border-white focus:outline-none"
              />
            </div>
            <button className="px-6 py-3 bg-mitosite-green hover:bg-mitosite-red text-mitosite-beige font-medium rounded-r-full transition-colors">
              Start now →
            </button>
          </div>
        </div>
      </div>
      
      <img src={splash} alt="Splash" className="col-span-1 max-h-screen" />
    </div>
  );
};

export default Splash; 