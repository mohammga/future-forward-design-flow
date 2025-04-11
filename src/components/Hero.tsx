
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  // Set up refs for animations
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
  // Handle intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = [titleRef.current, subtitleRef.current, gridRef.current];
    elements.forEach(el => el && observer.observe(el));
    
    return () => {
      elements.forEach(el => el && observer.unobserve(el));
    };
  }, []);

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Floating gradient background elements */}
      <div className="absolute top-20 right-[10%] w-[45vw] h-[45vw] bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl -z-10 animate-blob"></div>
      <div className="absolute bottom-10 left-[15%] w-[30vw] h-[30vw] bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-egera-accent rounded-full animate-pulse"></div>
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass-dark">
            <span className="text-sm font-medium text-egera-accent animate-pulse-soft">Digital Agency • 2025</span>
          </div>
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-6 animate-reveal leading-tight"
          >
            Moderne løsninger som <span className="text-gradient">løfter bedriften</span> din til neste nivå
          </h1>
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-600 mb-8 animate-reveal"
          >
            Vi bygger innovative digitale løsninger som hjelper bedrifter å nå sine mål og skape varige resultater i en digital verden
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="button-accent group">
              Utforsk tjenester
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
            <Button size="lg" variant="outline" className="border-egera/20 hover:bg-egera/5">
              Kontakt oss
            </Button>
          </div>
        </div>
        
        {/* Image grid with improved images */}
        <div 
          ref={gridRef}
          className="grid grid-cols-3 gap-3 md:gap-5 animate-reveal"
        >
          <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl shadow-lg relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-egera/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200" 
              alt="Digital Analytics Dashboard" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-egera/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600" 
              alt="Modern workspace" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-egera/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600" 
              alt="Web development" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="flex justify-center mt-16">
          <a 
            href="#tjenester" 
            className="flex flex-col items-center text-sm text-gray-500 hover:text-egera transition-colors"
            aria-label="Scroll down"
          >
            <span className="mb-2">Scroll</span>
            <ChevronDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
