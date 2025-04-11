
import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-egera text-white">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="/" className="flex items-center mb-6">
              <span className="font-heading text-2xl font-bold text-white">Egera</span>
            </a>
            <p className="text-white/80 mb-6">
              Vi hjelper bedrifter med å skape digitale løsninger som setter dem i stand til å lykkes i en digital verden.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-egera transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-egera transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-egera transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-egera transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Tjenester</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Webdesign</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">App utvikling</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Systemutvikling</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Digital strategi</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">UX/UI Design</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Lenker</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Om oss</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Prosjekter</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Blogg</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Karriere</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="text-white/80">
                Innovasjonsparken<br />
                Teknologiveien 10<br />
                0150 Oslo
              </li>
              <li><a href="tel:+4712345678" className="text-white/80 hover:text-white transition-colors">+47 123 45 678</a></li>
              <li><a href="mailto:kontakt@egera.no" className="text-white/80 hover:text-white transition-colors">kontakt@egera.no</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 mt-12 border-t border-white/20 text-white/60 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Egera. Alle rettigheter reservert.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Personvern</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Vilkår</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
