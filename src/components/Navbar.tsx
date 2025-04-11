
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="font-heading text-2xl font-bold text-egera">Egera</span>
        </a>
        
        <nav className={cn(
          "md:flex items-center gap-8",
          isMobile ? (isMenuOpen ? "absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md p-6 shadow-md flex flex-col gap-4" : "hidden") : "flex"
        )}>
          <a href="#tjenester" className="font-medium hover:text-egera transition-colors">Tjenester</a>
          <a href="#arbeid" className="font-medium hover:text-egera transition-colors">Arbeid</a>
          <a href="#om-oss" className="font-medium hover:text-egera transition-colors">Om oss</a>
          <a href="#kontakt" className="font-medium hover:text-egera transition-colors">Kontakt</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button size="sm" className="hidden md:flex button-primary">
            Kontakt oss
          </Button>
          <button 
            className="md:hidden text-egera" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
