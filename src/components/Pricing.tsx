import { motion } from "framer-motion";
import React from "react";

const PricingTier: React.FC<{
  name: string;
  subtitle: string;
  price: string;
  description?: string;
  features: string[];
  popular?: boolean;
}> = ({ name, subtitle, price, description, features, popular = false }) => {
  return (
    <motion.div
      whileHover={{y: -30, scale: 1.05}}
      className={`bg-gradient-to-b from-mitosite-beige to-[#B9BFB1]/60 p-6 border border-mitosite-beige-dark relative flex flex-col h-full`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-mitosite-beige-dark text-mitosite-beige py-1 px-4 text-sm font-semibold">
          Most Popular
        </div>
      )}

      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-mitosite-black mb-2">{name}</h3>
        <p className="text-mitosite-black mb-2">{subtitle}</p>
        <div className="mb-4">
          <span className="text-3xl font-bold text-mitosite-beige-dark">
            {price}
          </span>
          {price !== "Custom" && (
            <span className="text-mitosite-beige-dark/70">/month</span>
          )}
        </div>
        {description && <p className="text-mitosite-black mb-6">{description}</p>}

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="h-5 w-5 text-mitosite-green mr-2 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-mitosite-beige-dark">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`mt-auto bg-mitosite-beige-dark w-full py-3 rounded-2xl border border-mitosite-beige-dark text-mitosite-beige font-medium hover:bg-gradient-to-b hover:from-mitosite-beige hover:to-[#B9BFB1]/60 transition-colors`}
      >
        Get {name}
      </button>
    </motion.div>
  );
};

const Pricing: React.FC = () => {
  const pricingTiers = [
    {
      name: "Basic",
      subtitle: "AI code & asset generation",
      price: "$19",
      features: [
        "Single landing page",
        "Basic AI design generation",
        "Monthly content updates",
        "Mobile responsive",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Pro",
      subtitle: "AI code & asset generation + human design",
      price: "$99",
      features: [
        "Everything in Basic",
        "Advanced AI design generation",
        "Weekly content updates",
        "Priority email support",
      ],
      popular: true,
    },
    {
      name: "Bespoke",
      subtitle: "Hand-crafted design and development",
      price: "$199",
      features: [
        "Everything in Pro",
        "Dedicated human design partner",
        "Conversion optimization",
        "Custom integrations",
        "Dedicated success manager",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-mitosite-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-mitosite-beige-dark border border-mitosite-beige-dark p-4">
           
              ✳
           
            Pricing{" "}

              ✳
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mx-auto border border-mitosite-beige-dark p-4">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              name={tier.name}
              price={tier.price}
              subtitle={tier.subtitle}
              features={tier.features}
              popular={tier.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
