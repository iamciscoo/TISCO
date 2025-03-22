
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface BannerSlide {
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  link: string;
}

const bannerSlides: BannerSlide[] = [
  {
    image: "https://images.unsplash.com/photo-1531303435785-3853ba035cda?w=1400&h=600&q=80",
    title: "Modern Tech Collection",
    subtitle: "Cutting-edge designs for your digital lifestyle",
    cta: "Explore Collection",
    link: "/products?category=Electronics"
  },
  {
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1400&h=600&q=80",
    title: "Contemporary Accessories",
    subtitle: "Complete your look with our minimalist accessories",
    cta: "Shop Now",
    link: "/products?category=Clothing"
  },
  {
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=1400&h=600&q=80",
    title: "Modern Electronics",
    subtitle: "Advanced functionality with sleek aesthetics",
    cta: "Discover More",
    link: "/products?category=Electronics"
  }
];

const BannerCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="relative w-full overflow-hidden rounded-md h-[400px] md:h-[500px]">
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {bannerSlides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover brightness-[0.95]" 
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="text-center px-6 max-w-2xl frosted-glass p-8 rounded-md">
                <h2 className="text-white text-3xl md:text-5xl font-light mb-4">{slide.title}</h2>
                <p className="text-white/90 text-lg md:text-xl mb-8">{slide.subtitle}</p>
                <Button asChild size="lg" className="rounded-md">
                  <Link to={slide.link}>{slide.cta}</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 border-0"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </Button>
      
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 border-0"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </Button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6' : 'bg-white/60'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
