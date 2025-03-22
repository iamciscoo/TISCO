
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import { products } from '@/lib/products';

const LatestProducts: React.FC = () => {
  // Get 4 most recent products (for a real app, you'd sort by date)
  const latestProducts = [...products].slice(0, 4);

  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-medium tracking-tight mb-2">Latest Arrivals</h2>
            <p className="text-muted-foreground max-w-lg">
              Discover our newest items, carefully selected and recently added to our collection.
            </p>
          </div>
          <Button asChild variant="ghost" className="group">
            <Link to="/products">
              <span className="mr-2">Browse All</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
