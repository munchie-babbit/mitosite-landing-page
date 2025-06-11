import React from 'react';

const GenerateAndMigrate: React.FC = () => {
  return (
    <section id="generate-migrate" className="py-16 bg-mitosite-green text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Generate & Migrate in Minutes
            </h2>
            <p className="text-lg mb-8">
              Whether you're starting from scratch or migrating from an existing platform, 
              Mitosite makes the process seamless and fast.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mitosite-green" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">AI-Powered Generation</h3>
                  <p>Our AI analyzes your business information and generates a professionally designed landing page tailored to your industry and goals.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mitosite-green" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">One-Click Migration</h3>
                  <p>Already have a website? Mitosite can migrate your content and design elements from popular platforms like WordPress, Wix, or Squarespace with just one click.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mitosite-green" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Custom Domain Setup</h3>
                  <p>Easily connect your custom domain with our guided setup process, or get a free Mitosite subdomain to get started immediately.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="flex space-x-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="bg-gray-100 h-8 rounded-md flex items-center px-4">
                <span className="text-sm text-gray-500">https://yoursite.mitosite.com</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="h-8 bg-mitosite-beige rounded-md w-2/3"></div>
              <div className="h-4 bg-mitosite-beige rounded-md w-full"></div>
              <div className="h-4 bg-mitosite-beige rounded-md w-5/6"></div>
              <div className="h-4 bg-mitosite-beige rounded-md w-4/5"></div>
              <div className="h-12 bg-mitosite-pink rounded-md w-1/2 mt-8"></div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <div className="bg-mitosite-green text-white text-sm py-2 px-4 rounded-md">
                Migration Complete! 🎉
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerateAndMigrate;
