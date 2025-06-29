import React from "react";
import generateImg from "../images/generate.png";
import migrateImg from "../images/migrate.png";

const GenerateAndMigrate: React.FC = () => {
  return (
    <section
      id="getting-started"
      className="min-h-screen py-8 bg-mitosite-beige-dark text-mitosite-beige flex justify-center"
    >
      <div className="container flex flex-col">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-4xl font-bold">Getting Started</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 flex-1">
          {/* Generate Column */}
          <div className="bg-mitosite-beige p-4 md:p-6 lg:p-8 shadow-xl flex flex-col h-fit">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-mitosite-beige-dark">
              ✦ Generate New Site
            </h3>
            <p className="text-mitosite-beige-dark mb-4 md:mb-6 text-sm md:text-base">
              Create a professional landing page from scratch using our
              AI-powered platform. Perfect for new businesses or those looking
              to start fresh.
            </p>

            <div className="overflow-hidden flex items-center justify-center border border-mitosite-beige-dark bg-mitosite-beige-mid mb-4 md:mb-6">
              <img
                src={generateImg}
                alt="Generate"
                className="w-full h-auto max-h-[30vh] object-contain"
              />
            </div>
            <a href="https://app.mitosite.ai" target="_blank" className="">
              <div className="flex justify-center items-center w-full py-3 md:py-4 bg-gradient-to-r from-mitosite-purple/60 to-[#B9BFB1]/60 border border-mitosite-beige-dark text-mitosite-beige-dark font-bold rounded-2xl hover:bg-mitosite-mustard-dark transition-colors">
                Start Generating
              </div>
            </a>
          </div>

          {/* Migrate Column */}
          <div className="bg-mitosite-beige p-4 md:p-6 lg:p-8 flex flex-col h-fit">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-mitosite-beige-dark">
              ✺ Migrate Existing Site
            </h3>
            <p className="text-mitosite-beige-dark mb-4 md:mb-6 text-sm md:text-base">
              Already have a website? We'll help you migrate your content and
              design from platforms like WordPress, Wix, or Squarespace.
            </p>

            <div className="overflow-hidden flex items-center justify-center border border-mitosite-beige-dark bg-mitosite-beige-mid mb-4 md:mb-6">
              <img
                src={migrateImg}
                alt="Migrate"
                className="w-full h-auto max-h-[30vh] object-contain"
              />
            </div>

            <a href="https://app.mitosite.ai" target="_blank" className="">
              <div className="flex justify-center items-center w-full py-3 md:py-4 bg-gradient-to-r from-mitosite-purple/60 to-[#B9BFB1]/60 border border-mitosite-beige-dark text-mitosite-beige-dark font-bold rounded-2xl hover:bg-mitosite-mustard-dark transition-colors">
                Start Migration
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerateAndMigrate;
