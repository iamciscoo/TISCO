
import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductCategory } from '@/lib/types';

interface ProductFilterProps {
  selectedCategory: ProductCategory | null;
  onCategoryChange: (category: ProductCategory | 'All') => void;
  onResetFilters?: () => void;
}

const categories: (ProductCategory | 'All')[] = [
  'All', 
  'Electronics', 
  'Clothing', 
  'Home', 
  'Books', 
  'Beauty', 
  'Sports'
];

const priceRanges = [
  { label: 'Under $50', value: '0-50' },
  { label: '$50 - $100', value: '50-100' },
  { label: '$100 - $200', value: '100-200' },
  { label: 'Over $200', value: '200-1000' },
];

const ProductFilter: React.FC<ProductFilterProps> = ({ 
  selectedCategory,
  onCategoryChange,
  onResetFilters
}) => {
  return (
    <div className="space-y-6 border p-6 rounded-lg bg-card">
      <div>
        <h3 className="font-medium mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category || (category === 'All' && !selectedCategory) ? "default" : "ghost"}
              className="justify-start w-full"
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      
      <Accordion type="single" collapsible defaultValue="price">
        <AccordionItem value="price">
          <AccordionTrigger className="font-medium">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="pt-2 space-y-2">
              {priceRanges.map((range) => (
                <div key={range.value} className="flex items-center">
                  <input
                    type="checkbox"
                    id={range.value}
                    className="mr-2 h-4 w-4 rounded-sm border-border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  />
                  <label htmlFor={range.value} className="text-sm">
                    {range.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="availability">
          <AccordionTrigger className="font-medium">Availability</AccordionTrigger>
          <AccordionContent>
            <div className="pt-2 space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="in-stock"
                  className="mr-2 h-4 w-4 rounded-sm border-border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                />
                <label htmlFor="in-stock" className="text-sm">In Stock</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="out-of-stock"
                  className="mr-2 h-4 w-4 rounded-sm border-border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                />
                <label htmlFor="out-of-stock" className="text-sm">Out of Stock</label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <div className="pt-4">
        <Button 
          variant="outline" 
          className="w-full"
          onClick={onResetFilters}
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default ProductFilter;
