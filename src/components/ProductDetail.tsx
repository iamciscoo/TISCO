
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/types';
import { useCurrency } from '@/contexts/CurrencyContext';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { formatPrice } = useCurrency();
  const { addItem } = useCart();
  const { toast } = useToast();

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    // Add item to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart`,
    });
    
    // Reset quantity to 1 after adding to cart
    setQuantity(1);
  };

  return (
    <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Product Images */}
        <div className="relative h-full">
          <div className="aspect-square overflow-hidden rounded-md bg-secondary/20">
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover animate-fade-in"
              key={currentImageIndex}
            />
          </div>
          
          {product.images.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              
              <div className="flex gap-2 mt-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`h-20 w-20 rounded-md overflow-hidden ${
                      index === currentImageIndex ? 'ring-2 ring-primary' : 'opacity-70'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
        
        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">{product.name}</h1>
            <p className="text-2xl mb-6">{formatPrice(product.price)}</p>
            
            <div className="h-px w-full bg-border mb-6"></div>
            
            <p className="text-muted-foreground mb-8">{product.description}</p>
            
            <div className="mb-8">
              <p className="font-medium mb-2">Quantity</p>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={increaseQuantity}
                  disabled={quantity >= product.stock}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="rounded-full w-full"
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            
            <div className="mt-8">
              <div className="flex items-center justify-between py-3 border-b">
                <span className="font-medium">Category</span>
                <span>{product.category}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b">
                <span className="font-medium">Stock</span>
                <span>{product.stock > 0 ? `${product.stock} available` : 'Out of stock'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
