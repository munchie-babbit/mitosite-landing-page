import React from 'react';

const GenerateAndMigrate: React.FC = () => {
  return (
    <section id="generate-migrate" className="min-h-screen py-8 bg-mitosite-beige-dark text-mitosite-beige flex justify-center">
      <div className="container flex flex-col">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
           Getting Started
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 ">
          {/* Generate Column */}
          <div className="bg-mitosite-beige p-8  shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-mitosite-beige-dark">✦ Generate New Site</h3>
            <p className="text-mitosite-beige-dark mb-8">
              Create a professional landing page from scratch using our AI-powered platform.
              Perfect for new businesses or those looking to start fresh.
            </p>
            
            <div className="aspect-video bg-mitosite-beige-mid mb-8 border border-mitosite-beige-dark">
              {/* Placeholder for generate image */}
            </div>

            <button className="w-full py-4 bg-mitosite-beige-mid border border-mitosite-beige-dark text-mitosite-beige-dark font-bold rounded-2xl hover:bg-mitosite-mustard-dark transition-colors">
              Generate New Page
            </button>
          </div>

          {/* Migrate Column */}
          <div className="bg-mitosite-beige p-8">
            <h3 className="text-2xl font-bold mb-4 text-mitosite-beige-dark">✺ Migrate Existing Site</h3>
            <p className="text-mitosite-beige-dark mb-8">
              Already have a website? We'll help you migrate your content and design
              from platforms like WordPress, Wix, or Squarespace.
            </p>
            
            <div className="aspect-video bg-mitosite-beige-mid mb-8 border border-mitosite-beige-dark">
              {/* Placeholder for migrate image */}
            </div>

            <button className="w-full py-4 bg-mitosite-beige-mid border border-mitosite-beige-dark text-mitosite-beige-dark font-bold rounded-2xl hover:bg-mitosite-mustard-dark transition-colors">
              Start Migration
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerateAndMigrate;
