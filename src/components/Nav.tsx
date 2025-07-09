import React from "react";
import navIcons from "../images/nav-icons.svg";
import { motion } from "framer-motion";
import logo from "../images/logo.svg";

const Nav: React.FC = () => {
  return (
    <nav className=" flex flex-col bg-mitosite-beige-mid border-b border-mitosite-beige-dark">
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

        <div className="flex items-center space-x-4">
          {/* <a
            href="/sign-in"
            className="text-mitosite-black hover:opacity-80 transition-opacity text-nowrap font-medium"
          >
            Sign in
          </a> */}
          <a
            href="https://cal.com/estelle-anhjx1/30min"
            target="_blank"
            className="bg-mitosite-beige-dark text-mitosite-beige hover:bg-opacity-90 px-8 py-6 font-medium transition-colors text-nowrap"
          >
            Book a Call with Estelle
          </a>
        </div>
      </div>
      <div className="px-2 h-10 overflow-hidden relative">
        <div className="flex w-full h-full">
          <motion.div 
            className="flex "
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
            className="flex "
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
