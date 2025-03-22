
import React from 'react';
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="py-10 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">About TISCO</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            At TISCO, we bring innovation to your doorstep. As a cutting-edge technology eCommerce store, 
            we specialize in providing the latest gadgets, electronics, and smart solutions designed to 
            enhance your digital lifestyle. Whether you're looking for high-performance computing devices, 
            the newest mobile accessories, or smart home innovations, TISCO is your go-to destination for 
            quality and reliability.
          </p>

          <p className="text-lg mb-8">
            Our mission is to make technology accessible, affordable, and exciting for everyone. We carefully 
            curate our product selection to ensure you get only the best, combining advanced functionality 
            with sleek design. Backed by a commitment to customer satisfaction, secure transactions, and 
            fast delivery, TISCO is more than just a store—it's a tech experience built for the modern world.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">Why Choose TISCO?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-medium mb-3">Quality Assurance</h3>
              <p>Every product in our inventory is carefully selected and tested to meet our high standards of quality and performance.</p>
            </div>
            
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-medium mb-3">Expert Support</h3>
              <p>Our tech-savvy team is always ready to help you make informed decisions and provide after-sales support.</p>
            </div>
            
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-medium mb-3">Fast Delivery</h3>
              <p>We ensure quick and secure delivery of your orders across Tanzania, with real-time tracking available.</p>
            </div>
            
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-medium mb-3">Secure Shopping</h3>
              <p>Shop with confidence knowing that your transactions and personal information are protected.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg mb-6">Welcome to TISCO – where technology meets convenience.</p>
            <Button asChild size="lg">
              <Link to="/products">Explore Our Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
