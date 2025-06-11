import React from 'react';

const Companies: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-6 py-8 bg-mitosite-beige">
      <div className="font-cardo text-mitosite-black text-xl">
        Trusted by
      </div>
      
      <div className="flex space-x-6">
        {/* Company logos would go here - using placeholder divs for now */}
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div 
            key={index}
            className="w-24 h-24 border-2 border-mitosite-green rounded-lg flex items-center justify-center"
          >
            <span className="text-mitosite-green">Logo {index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
