import React from "react";
import navIcons from "../images/nav-icons.svg";
import { motion } from "framer-motion";

const Nav: React.FC = () => {
  return (
    <nav className=" flex flex-col bg-mitosite-beige-mid border-b border-mitosite-beige-dark">
      <div className="flex justify-between items-center border-b border-mitosite-beige-dark">
        <div className="flex items-center py-4 px-6">
          <a
            href="/"
            className="font-cardo text-mitosite-beige-dark font-bold text-2xl text-nowrap"
          >
            mitosite ai
          </a>

          <div className="hidden md:flex ml-10 space-x-8">
            <a
              href="#product"
              className="text-mitosite-beige-dark hover:opacity-80 transition-opacity font-medium"
            >
              Product
            </a>
            <a
              href="#solutions"
              className="text-mitosite-beige-dark hover:opacity-80 transition-opacity font-medium"
            >
              Solutions
            </a>
            <a
              href="#developers"
              className="text-mitosite-beige-dark hover:opacity-80 transition-opacity font-medium"
            >
              Developers
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
          <a
            href="/sign-in"
            className="text-mitosite-black hover:opacity-80 transition-opacity text-nowrap font-medium"
          >
            Sign in
          </a>
          <a
            href="https://form.typeform.com/to/GxmVIilb"
            target="_blank"
            className="bg-mitosite-beige-dark text-mitosite-beige hover:bg-opacity-90 px-8 py-6 font-medium transition-colors text-nowrap"
          >
            Contact sales
          </a>
        </div>
      </div>
      <div className="px-2 h-10">
        <motion.img src={navIcons} alt="Mitosite" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2}}/>
      </div>
    </nav>
  );
};

export default Nav;
