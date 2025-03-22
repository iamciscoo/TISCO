
import React, { createContext, useContext, useState, useEffect } from 'react';

type Currency = 'TZS' | 'USD' | 'KSH';

// Conversion rates (to USD)
const EXCHANGE_RATES: Record<Currency, number> = {
  USD: 1,
  TZS: 2500, // 1 USD = 2500 TZS (approximate)
  KSH: 130   // 1 USD = 130 KSH (approximate)
};

// Currency symbols
export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: '$',
  TZS: 'TSh',
  KSH: 'KSh'
};

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (priceInUSD: number) => string;
  convertPrice: (priceInUSD: number) => number;
  currencySymbol: string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>('USD');

  // Load saved currency preference if available
  useEffect(() => {
    const savedCurrency = localStorage.getItem('preferredCurrency') as Currency;
    if (savedCurrency && Object.keys(EXCHANGE_RATES).includes(savedCurrency)) {
      setCurrency(savedCurrency);
    }
  }, []);

  // Save currency preference when it changes
  useEffect(() => {
    localStorage.setItem('preferredCurrency', currency);
  }, [currency]);

  const convertPrice = (priceInUSD: number): number => {
    return priceInUSD * EXCHANGE_RATES[currency];
  };

  const formatPrice = (priceInUSD: number): string => {
    const converted = convertPrice(priceInUSD);
    
    // Format based on currency convention
    if (currency === 'USD') {
      return `$${converted.toFixed(2)}`;
    } else if (currency === 'TZS') {
      // TZS typically doesn't show decimal places
      return `TSh ${Math.round(converted).toLocaleString()}`;
    } else {
      // KSH typically shows whole numbers
      return `KSh ${Math.round(converted).toLocaleString()}`;
    }
  };

  return (
    <CurrencyContext.Provider 
      value={{ 
        currency, 
        setCurrency, 
        formatPrice, 
        convertPrice,
        currencySymbol: CURRENCY_SYMBOLS[currency] 
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
