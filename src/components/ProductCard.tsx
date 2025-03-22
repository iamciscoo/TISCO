
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/types';
import { useCurrency } from '@/contexts/CurrencyContext';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const delay = index * 100;
  const { formatPrice } = useCurrency();

  return (
    <div 
      className={`opacity-0 animate-fade-in`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div 
        className="group relative overflow-hidden rounded-md product-card-shadow"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`/product/${product.id}`}>
          <div className="aspect-[4/5] relative overflow-hidden">
            <img 
              src={product.images[0]} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-spring group-hover:scale-105"
            />
            
            {product.images.length > 1 && (
              <div 
                className={`absolute inset-0 transition-opacity duration-700 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={product.images[1]} 
                  alt={`${product.name} alternate view`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </Link>
        
        <Button 
          size="icon" 
          className="absolute bottom-4 right-4 rounded-full shadow-lg opacity-0 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="mt-4 space-y-1">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-base">{product.name}</h3>
          <p className="text-base">{formatPrice(product.price)}</p>
        </div>
        <p className="text-sm text-muted-foreground">{product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
