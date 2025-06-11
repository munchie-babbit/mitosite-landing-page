import React from 'react';

const Overview: React.FC = () => {
  const features = [
    {
      id: 1,
      title: 'AI-Powered Design',
      description: 'Our AI generates professionally designed landing pages based on your business needs and industry standards.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-mitosite-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Continuous Updates',
      description: 'As your startup evolves, Mitosite automatically updates your landing page to reflect new features and milestones.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-mitosite-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Conversion Optimization',
      description: 'Built-in analytics and A/B testing help optimize your landing page for maximum conversions and engagement.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-mitosite-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'SEO Optimized',
      description: 'Every Mitosite landing page is built with SEO best practices to help your startup get discovered by potential customers.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-mitosite-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Mobile Responsive',
      description: 'All landing pages are fully responsive and optimized for every device, ensuring a seamless experience for all visitors.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-mitosite-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Integration Ready',
      description: 'Easily connect your landing page with popular tools like Google Analytics, Mailchimp, Stripe, and more.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-mitosite-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    }
  ];

  return (
    <section id="overview" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-mitosite-green mb-4">
            How Mitosite Works
          </h2>
          <p className="text-mitosite-black max-w-2xl mx-auto">
            Mitosite is the only landing page platform designed specifically for startups 
            that need to continuously evolve their online presence as they grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(feature => (
            <div key={feature.id} className="bg-mitosite-beige p-6 rounded-lg transition-transform hover:scale-105">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-mitosite-black">
                {feature.title}
              </h3>
              <p className="text-mitosite-black">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-block bg-mitosite-green hover:bg-mitosite-red text-white font-medium px-6 py-3 rounded-full transition-colors"
          >
            Explore All Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Overview;
