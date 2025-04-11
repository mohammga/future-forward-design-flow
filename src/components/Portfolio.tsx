
import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface PortfolioItemProps {
  image: string;
  title: string;
  category: string;
  description: string;
  link: string;
}

const PortfolioItem = ({ image, title, category, description, link }: PortfolioItemProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl relative hover-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <span className="text-sm font-medium text-white/80">{category}</span>
          <h3 className="text-xl font-bold mt-1">{title}</h3>
          <p className="mt-2 text-white/80 text-sm line-clamp-2">{description}</p>
          <a 
            href={link}
            className="inline-flex items-center text-white mt-3 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          >
            Se prosjektet <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const portfolioItems = [
    {
      image: "/lovable-uploads/7fc6dfe7-b86a-4e2f-bf71-54f52170440e.png",
      title: "Digital kundereise",
      category: "UX / UI Design",
      description: "Komplett redesign av kundereisen for en stor medieaktør som ga 35% økning i brukerengasjement",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800",
      title: "E-commerce plattform",
      category: "Webdesign / Utvikling",
      description: "Nettbutikkløsning med integrasjoner mot lagerstyring og betalingsløsninger",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
      title: "Booking App",
      category: "App utvikling",
      description: "Mobilapplikasjon for timebestilling med integrasjon mot kundens systemer",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1563986768817-257bf91c5f9e?q=80&w=800",
      title: "Dashboard Analytics",
      category: "Data Visualisering",
      description: "Interaktivt dashboard som gir kunden oversikt over nøkkeltall og analyse",
      link: "#"
    }
  ];
  
  return (
    <section id="arbeid" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dette er hva som skjer når vi bygger din nye nettside
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Våre prosjekter er bygget på grundig analyse, kreativ tenkning og teknisk ekspertise for å skape digitale løsninger som gir resultater
            </p>
          </div>
          <a 
            href="#alle-prosjekter" 
            className="mt-6 md:mt-0 inline-flex items-center text-egera font-medium hover:underline"
          >
            Se alle prosjekter <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              image={item.image}
              title={item.title}
              category={item.category}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
