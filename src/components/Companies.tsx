import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  {
    name: "Sprites AI",
    logo: "",
  },
  {
    name: "Agentdora",
    logo: "",
  },
  {
    name: "Nosu",
    logo: "",
  },
  {
    name: "System AI",
    logo: "",
  },
  {
    name: "Cenote",
    logo: "",
  },
];

const Companies: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-mitosite-beige-dark">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-cardo text-center text-mitosite-beige text-xl p-6 md:pl-6 md:pr-4 justify-center"
      >
        Trusted by startups to generate and maintain their websites.
      </motion.div>
      
      <div className="flex flex-wrap md:flex-nowrap w-full md:w-auto">
        {/* Company logos would go here - using placeholder divs for now */}
        {companies.map((company, index) => (
          <div 
            key={index}
            className="w-1/2 sm:w-1/3 md:w-32 h-20 md:h-32 bg-mitosite-beige flex items-center justify-center border-t md:border-t-0 md:border-l border-mitosite-beige-dark border-l"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-mitosite-beige-dark font-cardo font-bold"
            >
              {company.name}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
