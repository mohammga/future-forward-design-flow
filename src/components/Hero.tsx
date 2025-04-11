
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl -z-10 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-6 animate-reveal"
          >
            Moderne løsninger som løfter bedriften din til neste nivå
          </h1>
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-600 mb-8 animate-reveal"
          >
            Vi bygger innovative digitale løsninger som hjelper bedrifter å nå sine mål og skape varige resultater i en digital verden
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="button-primary">
              Utforsk tjenester
              <ArrowRight className="ml-2" size={16} />
            </Button>
            <Button size="lg" variant="outline">
              Kontakt oss
            </Button>
          </div>
        </div>
        
        {/* Image grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-3 gap-2 md:gap-4 animate-reveal"
        >
          <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl shadow-lg">
            <img 
              src="/lovable-uploads/7fc6dfe7-b86a-4e2f-bf71-54f52170440e.png" 
              alt="Netflix app interface" 
              className="w-full h-full object-cover hover-card"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500" 
              alt="Modern workspace" 
              className="w-full h-full object-cover hover-card"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500" 
              alt="Data analytics" 
              className="w-full h-full object-cover hover-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
