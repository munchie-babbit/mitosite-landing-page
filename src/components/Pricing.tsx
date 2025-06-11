import React from 'react';

const PricingTier: React.FC<{
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}> = ({ name, price, description, features, popular = false }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md border ${popular ? 'border-mitosite-green' : 'border-gray-200'} relative`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-mitosite-green text-white py-1 px-4 rounded-bl-lg rounded-tr-lg text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-mitosite-black mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-mitosite-green">{price}</span>
        {price !== 'Custom' && <span className="text-gray-500">/month</span>}
      </div>
      <p className="text-mitosite-black mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-5 w-5 text-mitosite-green mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-mitosite-black">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button 
        className={`w-full py-3 rounded-full text-white font-medium ${popular ? 'bg-mitosite-green hover:bg-mitosite-red' : 'bg-mitosite-mustard hover:bg-mitosite-red'} transition-colors`}
      >
        Get Started
      </button>
    </div>
  );
};

const Pricing: React.FC = () => {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$49',
      description: 'Perfect for early-stage startups and solo founders.',
      features: [
        'Single landing page',
        'Basic AI design generation',
        'Monthly content updates',
        'Custom domain',
        'Mobile responsive',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Growth',
      price: '$99',
      description: 'For startups ready to scale their online presence.',
      features: [
        'Up to 5 landing pages',
        'Advanced AI design generation',
        'Weekly content updates',
        'SEO optimization',
        'A/B testing',
        'Analytics dashboard',
        'Priority email support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For established startups with complex needs.',
      features: [
        'Unlimited landing pages',
        'Premium AI design generation',
        'Daily content updates',
        'Advanced SEO tools',
        'Conversion optimization',
        'Custom integrations',
        'Dedicated success manager'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-mitosite-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-mitosite-green mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-mitosite-black max-w-2xl mx-auto">
            Choose the plan that works best for your startup's needs. 
            All plans include a 14-day free trial, no credit card required.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              popular={tier.popular}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-mitosite-black mb-4">
            Need a custom solution? Contact our sales team.
          </p>
          <a 
            href="#" 
            className="inline-block border border-mitosite-green text-mitosite-green hover:bg-mitosite-green hover:text-white font-medium px-6 py-3 rounded-full transition-colors"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
