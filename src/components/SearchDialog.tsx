
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { 
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';
import { products } from '@/lib/products';
import { ProductCategory } from '@/lib/types';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const categories: ProductCategory[] = [
  'Electronics', 
  'Clothing', 
  'Home', 
  'Books', 
  'Beauty', 
  'Sports'
];

const SearchDialog: React.FC<SearchDialogProps> = ({ open, onOpenChange }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (value: string) => {
    setSearchQuery('');
    onOpenChange(false);
    
    if (categories.includes(value as ProductCategory)) {
      navigate(`/products?category=${value}`);
    } else {
      // Check if it matches a product
      const product = products.find(p => p.name === value);
      if (product) {
        navigate(`/product/${product.id}`);
      } else {
        navigate(`/products?search=${encodeURIComponent(value)}`);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0">
        <Command className="rounded-lg border">
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <CommandInput
              value={searchQuery}
              onValueChange={setSearchQuery}
              placeholder="Search products, categories..."
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none"
            />
            {searchQuery && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setSearchQuery('')}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Categories">
              {categories.map((category) => (
                <CommandItem 
                  key={category} 
                  value={category}
                  onSelect={handleSearch}
                >
                  {category}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="Products">
              {products
                .filter(product => 
                  product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                  product.description.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .slice(0, 5)
                .map((product) => (
                  <CommandItem 
                    key={product.id} 
                    value={product.name}
                    onSelect={handleSearch}
                  >
                    {product.name}
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
