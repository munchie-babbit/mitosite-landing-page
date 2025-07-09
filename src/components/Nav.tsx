import React, { useState } from "react";
import navIcons from "../images/nav-icons.svg";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../images/logo.svg";
import { Menu, X } from "lucide-react";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="flex flex-col bg-mitosite-beige-mid border-b border-mitosite-beige-dark">
      <div className="flex justify-between items-center border-b border-mitosite-beige-dark">
        <div className="flex items-center py-4 px-6">
          <a
            href="/"
            className="font-cardo text-mitosite-beige-dark font-bold text-2xl text-nowrap flex flex-row items-center"
          >
            <img src={logo} alt="Mitosite AI" className="w-8 h-8 mr-3" />
            Mitosite AI
          </a>

          <div className="hidden md:flex ml-10 space-x-8">
            <a
              href="#getting-started"
              className="text-mitosite-beige-dark hover:opacity-80 transition-opacity font-medium"
            >
              Getting Started
            </a>
            <a
              href="#faq"
              className="text-mitosite-beige-dark hover:opacity-80 transition-opacity font-medium"
            >
              FAQ
            </a>
            <a
              href="#pricing"
              className="text-mitosite-beige-dark hover:opacity-80 transition-opacity font-medium"
            >
              Pricing
            </a>
          </div>
        </div>

        <div className="flex items-center">
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden mr-4 text-mitosite-beige-dark focus:outline-none"
          >
            <Menu size={24} />
          </button>

          {/* Call to action button */}
          <a
            href="https://cal.com/estelle-anhjx1/30min"
            target="_blank"
            className="bg-mitosite-beige-dark text-mitosite-beige hover:bg-opacity-90 px-4 sm:px-8 py-4 sm:py-6 font-medium transition-colors text-nowrap hidden md:inline-block"
          >
            Book a Call with Estelle
          </a>
        </div>
      </div>
      
      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-mitosite-beige-mid z-50 flex flex-col"
          >
            <div className="flex justify-between items-center py-4 px-6 border-b border-mitosite-beige-dark">
              <a
                href="/"
                className="font-cardo text-mitosite-beige-dark font-bold text-2xl text-nowrap flex flex-row items-center"
              >
                <img src={logo} alt="Mitosite AI" className="w-8 h-8 mr-3" />
                Mitosite AI
              </a>
              <button 
                onClick={toggleMenu}
                className="text-mitosite-beige-dark focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-center flex-1 space-y-8 text-center">
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                href="#getting-started"
                onClick={toggleMenu}
                className="text-mitosite-beige-dark text-xl font-medium"
              >
                Getting Started
              </motion.a>
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                href="#faq"
                onClick={toggleMenu}
                className="text-mitosite-beige-dark text-xl font-medium"
              >
                FAQ
              </motion.a>
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                href="#pricing"
                onClick={toggleMenu}
                className="text-mitosite-beige-dark text-xl font-medium"
              >
                Pricing
              </motion.a>
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                href="https://cal.com/estelle-anhjx1/30min"
                target="_blank"
                onClick={toggleMenu}
                className="mt-4  bg-mitosite-beige-dark text-mitosite-beige hover:bg-opacity-90 px-8 py-4 font-medium transition-colors"
              >
                Book a Call with Estelle
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="px-6 h-10 overflow-hidden relative ">
        <div className="flex w-full h-full justify-center overflow-hidden">
          <motion.div 
            className="flex absolute"
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            transition={{duration: 2}}
          >
            {/* Repeat the image multiple times to ensure it fills wide screens */}
            <img src={navIcons} alt="" className="h-10 w-auto object-cover" />
            <img src={navIcons} alt="" className="h-10 w-auto object-cover" />
            <img src={navIcons} alt="" className="h-10 w-auto object-cover" />
            <img src={navIcons} alt="" className="h-10 w-auto object-cover" />
          </motion.div>
          {/* Duplicate the entire set for seamless looping */}
          <motion.div 
            className="flex absolute"
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            transition={{duration: 2}}
          >
            <img src={navIcons} alt="" className="h-10 w-auto object-cover" />
            <img src={navIcons} alt="" className="h-10 w-auto object-cover" />
            <img src={navIcons} alt="" className="h-10 w-auto object-cover" />
            <img src={navIcons} alt="" className="h-10 w-auto object-cover" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
