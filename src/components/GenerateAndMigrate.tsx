import React from 'react';

const GenerateAndMigrate: React.FC = () => {
  return (
    <section id="generate-migrate" className="min-h-screen py-7 bg-mitosite-beige-dark text-mitosite-beige">
      <div className="container justify-center items-center flex flex-col">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Generate & Migrate in Minutes
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Whether you're starting from scratch or migrating from an existing platform, 
            Mitosite makes the process seamless and fast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 border-y border-mitosite-beige">
          {/* Generate Column */}
          <div className="bg-mitosite-beige p-8  shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-mitosite-beige-dark">Generate New Landing Page</h3>
            <p className="text-mitosite-beige-dark mb-8">
              Create a professional landing page from scratch using our AI-powered platform.
              Perfect for new businesses or those looking to start fresh.
            </p>
            
            <div className="aspect-video bg-mitosite-beige-mid mb-8">
              {/* Placeholder for generate image */}
            </div>

            <button className="w-full py-4 bg-mitosite-green text-white font-bold rounded-lg hover:bg-mitosite-green-dark transition-colors">
              Generate New Page
            </button>
          </div>

          {/* Migrate Column */}
          <div className="bg-mitosite-beige p-8">
            <h3 className="text-2xl font-bold mb-4 text-mitosite-beige-dark">Migrate Existing Site</h3>
            <p className="text-mitosite-beige-dark mb-8">
              Already have a website? We'll help you migrate your content and design
              from platforms like WordPress, Wix, or Squarespace.
            </p>
            
            <div className="aspect-video bg-mitosite-beige-mid mb-8">
              {/* Placeholder for migrate image */}
            </div>

            <button className="w-full py-4 bg-mitosite-mustard text-white font-bold rounded-lg hover:bg-mitosite-mustard-dark transition-colors">
              Start Migration
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerateAndMigrate;
