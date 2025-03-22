
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrency } from '@/contexts/CurrencyContext';
import { useCart } from '@/contexts/CartContext';
import SearchDialog from './SearchDialog';

type Currency = 'TZS' | 'USD' | 'KSH';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();
  const { getItemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrency(newCurrency);
  };

  const currencyDisplay: Record<Currency, string> = {
    TZS: 'TZS 🇹🇿',
    USD: 'USD 🇺🇸',
    KSH: 'KSH 🇰🇪',
  };

  const goToCheckout = () => {
    navigate('/checkout');
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const itemCount = getItemCount();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3 blur-backdrop border-b' : 'py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold tracking-tighter">
              TISCO
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm font-medium hover:text-primary/70 transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-sm font-medium hover:text-primary/70 transition-colors">
                Shop
              </Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary/70 transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm font-medium hover:text-primary/70 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 px-2 font-medium text-sm">
                    {currencyDisplay[currency]}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleCurrencyChange('TZS')}>
                    TZS 🇹🇿
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleCurrencyChange('USD')}>
                    USD 🇺🇸
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleCurrencyChange('KSH')}>
                    KSH 🇰🇪
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full"
                onClick={goToCheckout}
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center">
                    {itemCount > 99 ? '99+' : itemCount}
                  </span>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-background pt-16 animate-slide-down md:hidden">
            <div className="container mx-auto px-4 py-8">
              <nav className="flex flex-col space-y-6">
                <Link 
                  to="/" 
                  className="text-xl font-medium p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/products" 
                  className="text-xl font-medium p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Shop
                </Link>
                <Link 
                  to="/about" 
                  className="text-xl font-medium p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="text-xl font-medium p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                
                <div className="p-2">
                  <p className="text-sm text-muted-foreground mb-2">Currency</p>
                  <div className="flex space-x-2">
                    {(['TZS', 'USD', 'KSH'] as Currency[]).map((curr) => (
                      <Button 
                        key={curr}
                        variant={currency === curr ? "default" : "outline"}
                        size="sm"
                        onClick={() => {
                          handleCurrencyChange(curr);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {currencyDisplay[curr]}
                      </Button>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </>
  );
};

export default Navbar;
