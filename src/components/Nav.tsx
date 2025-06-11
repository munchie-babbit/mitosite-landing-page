import React from 'react';

const Nav: React.FC = () => {
  return (
    <nav className="py-4 px-6 flex justify-between items-center bg-mitosite-beige">
      <div className="flex items-center">
        <a href="/" className="font-cardo text-mitosite-green font-bold text-2xl">mito</a>
        
        <div className="hidden md:flex ml-10 space-x-8">
          <a href="#products" className="text-mitosite-black hover:opacity-80 transition-opacity">Products</a>
          <a href="#solutions" className="text-mitosite-black hover:opacity-80 transition-opacity">Solutions</a>
          <a href="#developers" className="text-mitosite-black hover:opacity-80 transition-opacity">Developers</a>
          <a href="#resources" className="text-mitosite-black hover:opacity-80 transition-opacity">Resources</a>
          <a href="#pricing" className="text-mitosite-black hover:opacity-80 transition-opacity">Pricing</a>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <a href="/sign-in" className="text-mitosite-black hover:opacity-80 transition-opacity">Sign in</a>
        <a 
          href="/contact-sales" 
          className="bg-mitosite-green text-mitosite-beige hover:bg-opacity-90 px-4 py-2 rounded-full font-medium transition-colors"
        >
          Contact sales
        </a>
      </div>
    </nav>
  );
};

export default Nav; 