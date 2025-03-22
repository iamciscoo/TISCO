
import React from 'react';
import Layout from '../components/Layout';
import { Separator } from '@/components/ui/separator';

const Terms: React.FC = () => {
  return (
    <Layout>
      <div className="py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="text-muted-foreground mb-6 italic">Last Updated: March 14, 2025</p>
        
        <p className="mb-6">
          Welcome to VINTAGE STORE ("we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of our website (the "Site") and your purchase of products or services through it. By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. General Provisions</h2>
        <p className="mb-2">1.1 <strong>Eligibility</strong>: You must be at least 18 years old or have the consent of a legal guardian to use this Site and make purchases.</p>
        <p className="mb-2">1.2 <strong>Acceptance</strong>: By placing an order or using the Site, you accept these Terms and our Privacy Policy, which is incorporated by reference.</p>
        <p className="mb-2">1.3 <strong>Amendments</strong>: We reserve the right to update these Terms at any time. Changes will be effective upon posting on the Site, and your continued use constitutes acceptance of the revised Terms.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Products and Services</h2>
        <p className="mb-2">2.1 <strong>Availability</strong>: All products listed are subject to availability. We may discontinue or modify items without prior notice.</p>
        <p className="mb-2">2.2 <strong>Pricing</strong>: Prices are displayed in multiple currencies and include applicable taxes unless stated otherwise. We reserve the right to adjust prices at any time, but this will not affect orders already confirmed.</p>
        <p className="mb-2">2.3 <strong>Product Descriptions</strong>: We strive to ensure accuracy in product descriptions, images, and specifications. However, we do not guarantee that all details are error-free.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Orders and Payments</h2>
        <p className="mb-2">3.1 <strong>Order Process</strong>: An order is confirmed only when you receive a confirmation email from us. We may refuse or cancel orders at our discretion (e.g., due to stock unavailability or suspected fraud).</p>
        <p className="mb-2">3.2 <strong>Payment Methods</strong>: We accept payments via mobile money (e.g., M-Pesa, Tigo Pesa, Airtel Money) and other methods listed at checkout. Cash-on-delivery (COD) is available where specified.</p>
        <p className="mb-2">3.3 <strong>Payment Security</strong>: All electronic transactions comply with the Electronic Transactions Act of 2015. You are responsible for ensuring sufficient funds in your payment account.</p>
        <p className="mb-2">3.4 <strong>Taxes</strong>: Prices include VAT or other taxes as required by the Tanzania Revenue Authority (TRA). Additional levies on mobile money transactions may apply as per current laws.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Shipping and Delivery</h2>
        <p className="mb-2">4.1 <strong>Delivery Areas</strong>: We deliver within Tanzania, subject to logistical capabilities. Delivery outside Tanzania may be arranged on a case-by-case basis.</p>
        <p className="mb-2">4.2 <strong>Delivery Time</strong>: Estimated delivery times are provided at checkout but are not guaranteed due to factors like weather, transport issues, or third-party delays.</p>
        <p className="mb-2">4.3 <strong>Shipping Costs</strong>: Costs are calculated at checkout and may vary based on location and order size.</p>
        <p className="mb-2">4.4 <strong>Risk of Loss</strong>: Ownership and risk of loss transfer to you upon delivery or handover to a designated carrier for COD orders.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Returns and Refunds</h2>
        <p className="mb-2">5.1 <strong>Return Policy</strong>: You may return products within 7 days of delivery if they are defective, damaged, or not as described. Contact us at support@vintagestore.com to initiate a return.</p>
        <p className="mb-2">5.2 <strong>Conditions</strong>: Returned items must be unused, in original packaging, and accompanied by proof of purchase (e.g., receipt or order confirmation).</p>
        <p className="mb-2">5.3 <strong>Refunds</strong>: Approved refunds will be processed within 14 days via the original payment method, excluding shipping costs unless the return is due to our error.</p>
        <p className="mb-2">5.4 <strong>Non-Returnable Items</strong>: Custom-made, perishable, or personal care items are non-returnable unless defective.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">6. User Responsibilities</h2>
        <p className="mb-2">6.1 <strong>Account Security</strong>: You are responsible for maintaining the confidentiality of your account login details and for all activities under your account.</p>
        <p className="mb-2">6.2 <strong>Accurate Information</strong>: You must provide true, complete, and current information during registration and checkout.</p>
        <p className="mb-2">6.3 <strong>Prohibited Actions</strong>: You may not use the Site to engage in illegal activities, infringe intellectual property rights, or transmit harmful content (e.g., viruses).</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Intellectual Property</h2>
        <p className="mb-2">7.1 <strong>Ownership</strong>: All content on the Site (e.g., logos, text, images) is owned by us or our licensors and protected by copyright laws.</p>
        <p className="mb-2">7.2 <strong>Limited Use</strong>: You may use the Site for personal, non-commercial purposes only. Reproduction or distribution of content without permission is prohibited.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
        <p className="mb-2">8.1 <strong>No Warranty</strong>: The Site and products are provided "as is." We disclaim warranties of merchantability or fitness for a particular purpose to the extent permitted by law.</p>
        <p className="mb-2">8.2 <strong>Liability Cap</strong>: Our liability for any claim arising from these Terms or your use of the Site is limited to the amount you paid for the product or service in question.</p>
        <p className="mb-2">8.3 <strong>Force Majeure</strong>: We are not liable for delays or failures due to events beyond our control (e.g., power outages, strikes, or natural disasters).</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Privacy</h2>
        <p className="mb-2">9.1 <strong>Data Use</strong>: Your personal information is handled per our Privacy Policy and applicable laws. We may collect data to process orders, improve services, and comply with legal obligations (e.g., tax reporting).</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law and Disputes</h2>
        <p className="mb-2">10.1 <strong>Jurisdiction</strong>: These Terms are governed by the laws of Tanzania.</p>
        <p className="mb-2">10.2 <strong>Dispute Resolution</strong>: Any disputes will be resolved through negotiation or, if necessary, in the courts of Dar es Salaam, Tanzania.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">11. Termination</h2>
        <p className="mb-2">11.1 <strong>Right to Terminate</strong>: We may suspend or terminate your access to the Site if you violate these Terms or engage in fraudulent activity.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
        <p className="mb-2">For questions, complaints, or support, reach us at:</p>
        <ul className="list-disc pl-8 mb-6">
          <li>Email: support@vintagestore.com</li>
          <li>Phone: +255-XXX-XXX-XXXX</li>
          <li>Address: Vintage Store, Dar es Salaam, Tanzania</li>
        </ul>
        
        <Separator className="my-8" />
        
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} VINTAGE STORE. All rights reserved.
        </p>
      </div>
    </Layout>
  );
};

export default Terms;
