import React, { useState } from 'react';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-mitosite-beige py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-cardo font-bold text-lg text-mitosite-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="ml-4">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 font-josefin text-mitosite-black">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How does Mitosite compare to traditional website builders?",
      answer: "Unlike traditional website builders that require manual updates, Mitosite continuously evolves your landing page based on your startup's growth and feedback. Our AI-powered platform ensures your site is always current without the need for constant redesigns."
    },
    {
      question: "Can I customize the design to match my brand?",
      answer: "Absolutely! Mitosite offers extensive customization options including colors, typography, and layout. You can provide your brand guidelines, and our platform will ensure your landing page perfectly reflects your brand identity."
    },
    {
      question: "How long does it take to launch a new landing page?",
      answer: "Most startups launch their Mitosite landing page within 24-48 hours. Our streamlined process and templates allow for quick deployment, while still maintaining high quality and customization."
    },
    {
      question: "Do I need technical skills to use Mitosite?",
      answer: "No technical skills required! Mitosite is designed for non-technical founders and marketers. Our intuitive interface makes it easy to make changes, and our support team is always available to help with more complex requests."
    },
    {
      question: "Can Mitosite help with SEO and conversion optimization?",
      answer: "Yes! Mitosite includes built-in SEO tools and conversion optimization features. We continuously analyze your site's performance and suggest improvements to increase traffic and conversions."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-mitosite-beige">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-mitosite-green mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Everything you need to know about Mitosite and how it can help your startup grow.
        </p>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
