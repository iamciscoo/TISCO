
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import BannerCarousel from '@/components/BannerCarousel';
import LatestProducts from '@/components/LatestProducts';
import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from '@/components/Categories';
import Layout from '@/components/Layout';

const Index: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "TISCO | Innovative Tech Solutions";
  }, []);

  return (
    <Layout>
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <BannerCarousel />
      </div>
      <LatestProducts />
      <FeaturedProducts />
      <Categories />
    </Layout>
  );
};

export default Index;
