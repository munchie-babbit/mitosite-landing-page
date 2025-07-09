import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import placeholder images - replace these with actual feature images
import updateImg from "../images/updating-feature.png";
import cmsImg from "../images/cms-feature.png";
import seoImg from "../images/seo-feature.png";


interface FeatureItem {
  title: string;
  description: string;
  icon: string;
  image: string;
}

const featuresList: FeatureItem[] = [
  {
    title: "SEO blog posts that sound human and rank higher",
    description: "Our AI writes SEO-focused articles for you—based on keywords that actually rank—and makes them sound like they came from a human, not a robot.",
    icon: "✦",
    image: seoImg
  },
  {
    title: "Automatic updates for new product features",
    description: "Install us as a plugin to your product and we'll automatically update your landing page when you push new features.",
    icon: "✺",
    image: updateImg
  },
  {
    title: "No code landing page editor + CMS",
    description: "Our AI-powered editor makes it easy to create and manage your landing page, with a CMS that allows you to easily add and edit content like job postings, pricing, and more.",
    icon: "✳",
    image: cmsImg
  },
];

const Features: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string>(featuresList[0].title);

  // Get current feature data
  const currentFeature = featuresList.find(feature => feature.title === selectedFeature) || featuresList[0];

  return (
    <section className="min-h-screen py-8 bg-mitosite-beige text-mitosite-beige-dark flex justify-center border-b border-mitosite-beige-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 bg-mitosite-beige-dark px-6 py-8">
          <h2 className="font-cardo text-2xl md:text-4xl font-bold  text-mitosite-beige">Never worry about your landing page again.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 ">
          {/* Left Side: Features List */}
          <div className="flex flex-col border border-b-0 border-mitosite-beige-dark mr-6 h-fit w-full">
            {featuresList.map((feature) => (
              <div 
                key={feature.title}
                onClick={() => setSelectedFeature(feature.title)}
                className={`cursor-pointer p-4 border-b border-mitosite-beige-dark transition-all duration-300 
                  ${selectedFeature === feature.title ? 'bg-gradient-to-r from-mitosite-purple/20 to-[#B9BFB1]/20' : 'hover:bg-mitosite-beige-mid/30'}`}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-4">{feature.icon}</span>
                  <h3 className="font-cardo text-xl md:text-2xl font-bold">{feature.title}</h3>
                </div>
                
                {selectedFeature === feature.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 pl-10 font-josefin"
                  >
                    <p>{feature.description}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side: Feature Image */}
          <div className="bg-mitosite-beige-mid/30 p-6 border border-mitosite-beige-dark">
            <div className="flex items-center justify-center h-full ">
              <motion.div
                key={currentFeature.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full overflow-hidden"
              >
                <div className="overflow-hidden flex items-center justify-center border border-mitosite-beige-dark bg-mitosite-beige h-[400px]">
                  <img
                    src={currentFeature.image}
                    alt={currentFeature.title}
                    className="w-full h-full object-contain bg-mitosite-beige"
                  />
                </div>
                {/* <div className="mt-4 text-center">
                  <h4 className="font-cardo text-xl font-bold">{currentFeature.icon} {currentFeature.title} {currentFeature.icon}</h4>
                </div> */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 