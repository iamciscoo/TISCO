
import React from 'react';
import Layout from '../components/Layout';
import { Separator } from '@/components/ui/separator';

const Privacy: React.FC = () => {
  return (
    <Layout>
      <div className="py-10 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-6 italic">Last Updated: March 14, 2025</p>
        
        <p className="mb-6">
          At TISCO ("we," "us," or "our"), we value your privacy and are committed to protecting your personal information. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website (the "Site") 
          or purchase products and services from us. By using the Site, you consent to the practices described below.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
        <p className="mb-4">We collect information to provide you with a seamless shopping experience and comply with applicable laws. The types of data we collect include:</p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">1.1 Personal Information</h3>
        <ul className="list-disc pl-8 mb-4">
          <li className="mb-2">Name, email address, phone number, and physical address (provided during registration, checkout, or customer support interactions).</li>
          <li className="mb-2">Payment details (e.g., mobile money transaction IDs or bank card information, though we do not store full card numbers).</li>
        </ul>
        
        <h3 className="text-xl font-medium mt-6 mb-3">1.2 Automatically Collected Information</h3>
        <ul className="list-disc pl-8 mb-4">
          <li className="mb-2">Device information (e.g., IP address, browser type, operating system).</li>
          <li className="mb-2">Usage data (e.g., pages visited, time spent on the Site, items viewed or added to your cart).</li>
          <li className="mb-2">Cookies and tracking technologies (to enhance functionality and analyze Site performance).</li>
        </ul>
        
        <h3 className="text-xl font-medium mt-6 mb-3">1.3 Other Information</h3>
        <ul className="list-disc pl-8 mb-4">
          <li className="mb-2">Communications you send us (e.g., emails, feedback, or inquiries).</li>
          <li className="mb-2">Information required for tax compliance (e.g., receipts issued via Electronic Fiscal Devices as mandated by the TRA).</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Collect Information</h2>
        <ul className="list-disc pl-8 mb-4">
          <li className="mb-2"><strong>Directly from You:</strong> When you create an account, place an order, or contact us.</li>
          <li className="mb-2"><strong>Automatically:</strong> Through cookies, web beacons, and server logs as you interact with the Site.</li>
          <li className="mb-2"><strong>From Third Parties:</strong> From payment providers (e.g., M-Pesa, Tigo Pesa) or delivery partners to process transactions and shipments.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
        <p className="mb-4">We use your data for the following purposes:</p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">3.1 Order Fulfillment</h3>
        <p className="mb-4">To process and deliver your purchases, issue receipts, and provide customer support.</p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">3.2 Site Improvement</h3>
        <p className="mb-4">To analyze usage trends, enhance functionality, and personalize your experience.</p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">3.3 Marketing</h3>
        <p className="mb-4">To send promotional offers, newsletters, or updates (with your consent, where required).</p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">3.4 Legal Compliance</h3>
        <p className="mb-4">To meet obligations under Tanzanian laws, such as tax reporting to the TRA or electronic transaction records under the Electronic Transactions Act of 2015.</p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">3.5 Security</h3>
        <p className="mb-4">To detect and prevent fraud, abuse, or unauthorized access to the Site.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">4. How We Share Your Information</h2>
        <p className="mb-4">We do not sell your personal information. We may share it with:</p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">4.1 Service Providers</h3>
        <p className="mb-4">Third parties like payment processors (e.g., mobile money operators), shipping companies, or IT support, who assist in operating the Site and fulfilling orders.</p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">4.2 Legal Authorities</h3>
        <p className="mb-4">When required by law, court order, or to comply with TCRA or TRA regulations.</p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">4.3 Business Transfers</h3>
        <p className="mb-4">In the event of a merger, acquisition, or sale of assets, your data may be transferred to the new entity.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookies and Tracking</h2>
        <h3 className="text-xl font-medium mt-6 mb-3">5.1 What Are Cookies?</h3>
        <p className="mb-4">Small data files stored on your device to improve Site functionality and track usage.</p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">5.2 Use</h3>
        <p className="mb-4">We use cookies for session management, analytics, and targeted advertising (if applicable).</p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">5.3 Control</h3>
        <p className="mb-4">You can disable cookies via your browser settings, but this may limit Site features (e.g., staying logged in or completing purchases).</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Security</h2>
        <h3 className="text-xl font-medium mt-6 mb-3">6.1 Measures</h3>
        <p className="mb-4">We use encryption, secure servers, and access controls to protect your data from unauthorized access, loss, or alteration.</p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">6.2 Limitations</h3>
        <p className="mb-4">No system is 100% secure. We cannot guarantee absolute protection against breaches but will notify you and relevant authorities if a significant breach occurs, as required by law.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">7.1 Access</h3>
        <p className="mb-4">Request a copy of the personal data we hold about you.</p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">7.2 Correction</h3>
        <p className="mb-4">Ask us to update or correct inaccurate information.</p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">7.3 Deletion</h3>
        <p className="mb-4">Request removal of your data, subject to legal retention obligations (e.g., tax records).</p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">7.4 Opt-Out</h3>
        <p className="mb-4">Unsubscribe from marketing communications at any time via the "unsubscribe" link or by contacting us.</p>
        
        <p className="mb-6">To exercise these rights, contact us at support@tisco.com.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Data Retention</h2>
        <p className="mb-4">We retain your information only as long as necessary:</p>
        <ul className="list-disc pl-8 mb-4">
          <li className="mb-2"><strong>Transaction data:</strong> For 7 years, as required by tax laws.</li>
          <li className="mb-2"><strong>Account data:</strong> Until you delete your account or request removal, unless legally required to retain it.</li>
          <li className="mb-2"><strong>Usage data:</strong> For up to 12 months for analytics purposes, then anonymized.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Third-Party Links</h2>
        <p className="mb-6">The Site may contain links to external websites (e.g., payment gateways). We are not responsible for their privacy practices. Review their policies before sharing information.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Children's Privacy</h2>
        <p className="mb-6">Our Site is not intended for users under 13. We do not knowingly collect data from children. If we discover such data, we will delete it promptly.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">11. International Transfers</h2>
        <p className="mb-6">If you order from outside or we use foreign service providers, your data may be transferred internationally. We ensure such transfers comply with applicable laws and maintain adequate safeguards.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">12. Changes to This Policy</h2>
        <p className="mb-6">We may update this Privacy Policy to reflect legal or operational changes. Updates will be posted on the Site, and significant changes will be notified via email or Site announcement. Your continued use after changes implies acceptance.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">13. Contact Us</h2>
        <p className="mb-4">For questions, concerns, or to exercise your rights, reach out to:</p>
        <ul className="list-none mb-6">
          <li><strong>Email:</strong> support@tisco.com</li>
          <li><strong>Phone:</strong> +255-XXX-XXX-XXXX</li>
          <li><strong>Address:</strong> TISCO, Dar es Salaam, Tanzania</li>
        </ul>
        
        <Separator className="my-8" />
        
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} TISCO. All rights reserved.
        </p>
      </div>
    </Layout>
  );
};

export default Privacy;
