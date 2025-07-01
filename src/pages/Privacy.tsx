import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Privacy: React.FC = () => {
  return (
    <div className="bg-mitosite-beige min-h-screen">
      <Nav />
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-mitosite-beige-dark mb-8 font-cardo">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-mitosite-beige-dark font-josefin">
          <p className="mb-6">Last Updated: June 1, 2023</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-cardo">1. Introduction</h2>
          <p>At Mitosite AI ("we," "our," or "us"), we respect your privacy and are committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website and use our services, and our practices for collecting, using, maintaining, protecting, and disclosing that information.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-cardo">2. Information We Collect</h2>
          <p>We collect several types of information from and about users of our Services, including:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Personal information such as name, email address, and contact details when you register for an account</li>
            <li>Information about your website and business when you use our services</li>
            <li>Usage data and analytics about how you interact with our services</li>
            <li>Information you provide when you contact our support team</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-cardo">3. How We Use Your Information</h2>
          <p>We use information that we collect about you or that you provide to us:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>To provide, maintain, and improve our Services</li>
            <li>To process your transactions and manage your account</li>
            <li>To send you important information regarding the Services, changes to our terms, conditions, and policies</li>
            <li>To personalize your experience and deliver content relevant to your interests</li>
            <li>To respond to your inquiries and provide customer support</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-cardo">4. Disclosure of Your Information</h2>
          <p>We may disclose personal information that we collect or you provide:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>To our subsidiaries and affiliates</li>
            <li>To contractors, service providers, and other third parties we use to support our business</li>
            <li>To comply with any court order, law, or legal process</li>
            <li>To enforce our Terms of Service</li>
            <li>If we believe disclosure is necessary to protect the rights, property, or safety of Mitosite AI, our customers, or others</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-cardo">5. Data Security</h2>
          <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure. We cannot guarantee the security of your personal information transmitted to our Services.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-cardo">6. Your Choices About Our Collection, Use, and Disclosure</h2>
          <p>You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. If you disable or refuse cookies, please note that some parts of the Services may be inaccessible or not function properly.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-cardo">7. Accessing and Correcting Your Information</h2>
          <p>You can review and change your personal information by logging into the Services and visiting your account profile page. You may also send us an email at <a href="mailto:hello@mitosite.ai" className="text-mitosite-beige-dark underline hover:text-mitosite-green">hello@mitosite.ai</a> to request access to, correct, or delete any personal information that you have provided to us.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-cardo">8. Changes to Our Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. If we make material changes to how we treat our users' personal information, we will notify you through a notice on our website. The date the Privacy Policy was last revised is identified at the top of the page.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-cardo">9. Contact Information</h2>
          <p>If you have any questions or comments about this Privacy Policy and our privacy practices, please contact us at <a href="mailto:hello@mitosite.ai" className="text-mitosite-beige-dark underline hover:text-mitosite-green">hello@mitosite.ai</a>.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy; 