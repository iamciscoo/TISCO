
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = heroRef.current?.children;
    if (children) {
      Array.from(children).forEach(child => {
        observer.observe(child);
      });
    }

    return () => {
      if (children) {
        Array.from(children).forEach(child => {
          observer.unobserve(child);
        });
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      {/* Tech-inspired background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)]"></div>
        
        {/* Circuit board pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, #111 1px, transparent 1px),
              linear-gradient(to bottom, #111 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-32 sm:py-40">
        <div ref={heroRef} className="max-w-4xl mx-auto text-center">
          <div className="opacity-0 translate-y-4 transition-all duration-700 delay-100">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 font-medium">Technology</span> for 
              <span className="block">The Modern World</span>
            </h1>
          </div>
          
          <div className="opacity-0 translate-y-4 transition-all duration-700 delay-300">
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cutting-edge devices and innovations that transform how you live, work, and connect. Discover tomorrow's technology, today at TISCO.
            </p>
          </div>
          
          <div className="opacity-0 translate-y-4 transition-all duration-700 delay-500">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-md text-base group bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                <Link to="/products">
                  Explore Our Tech
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-md text-base border-slate-300 hover:border-slate-400">
                <Link to="/about" className="flex items-center">
                  <Cpu className="mr-2 h-4 w-4" />
                  Our Innovation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
