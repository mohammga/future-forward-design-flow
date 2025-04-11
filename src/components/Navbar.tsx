
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12",
        isScrolled ? "glass-nav shadow-md py-3" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center group">
          <span className="font-heading text-2xl font-bold relative">
            <span className="text-gradient">Egera</span>
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-egera to-egera-accent group-hover:w-full transition-all duration-300"></span>
          </span>
        </a>
        
        <nav className={cn(
          "md:flex items-center gap-8",
          isMobile ? (isMenuOpen ? "absolute top-full left-0 right-0 glass-nav p-6 shadow-md flex flex-col gap-4" : "hidden") : "flex"
        )}>
          {['Tjenester', 'Arbeid', 'Om oss', 'Kontakt'].map((item, index) => (
            <NavItem key={index} href={`#${item.toLowerCase().replace(' ', '-')}`} label={item} />
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <Button size="sm" className="hidden md:flex button-accent">
            Kontakt oss
          </Button>
          <button 
            className={cn(
              "md:hidden flex items-center justify-center w-10 h-10 rounded-full", 
              isScrolled ? "bg-white/20 backdrop-blur-md" : "bg-egera/10 text-egera"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <a 
      href={href} 
      className="font-medium relative group"
    >
      <span className="text-egera transition-colors group-hover:text-egera-accent">{label}</span>
      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-egera-accent group-hover:w-full transition-all duration-300"></span>
    </a>
  );
};

export default Navbar;
