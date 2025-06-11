import React from 'react';

const CaseStudies: React.FC = () => {
  const studies = [
    {
      id: 1,
      company: 'Bloomtech',
      title: 'How Bloomtech increased conversion by 27% with a redesigned landing page',
      description: 'Bloomtech needed a landing page that better communicated their value proposition to potential students.',
      result: '27% increase in conversion rate',
      category: 'Education'
    },
    {
      id: 2,
      company: 'Aerofly',
      title: 'Aerofly launched their beta with a landing page that drove 5,000 signups',
      description: 'Aerofly needed to build excitement for their upcoming travel app and collect beta users.',
      result: '5,000 beta signups in the first week',
      category: 'Travel'
    },
    {
      id: 3,
      company: 'Nurtify',
      title: 'How Nurtify rebuilt their entire site in 3 days using Mitosite',
      description: 'Nurtify had an urgent need to relaunch their site before a major PR push.',
      result: 'Complete redesign in 3 days',
      category: 'Health & Wellness'
    }
  ];

  return (
    <section id="case-studies" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-mitosite-green mb-12 text-center">
          Success Stories
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {studies.map(study => (
            <div key={study.id} className="bg-mitosite-beige p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <span className="text-xs font-josefin font-medium bg-mitosite-pink text-mitosite-black px-3 py-1 rounded-full">
                  {study.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-mitosite-black">
                {study.title}
              </h3>
              <p className="text-mitosite-black mb-4">
                {study.description}
              </p>
              <p className="font-bold text-mitosite-green">
                Result: {study.result}
              </p>
              <div className="mt-6">
                <a href="#" className="text-mitosite-red hover:underline font-medium">
                  Read full case study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
