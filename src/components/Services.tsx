
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code, Layout, Smartphone, LineChart, Database } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  index: number;
}

const ServiceCard = ({ title, description, icon, href, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('reveal-visible');
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="glass-card p-6 hover-card animate-reveal"
    >
      <div className="bg-egera/10 p-3 rounded-xl w-12 h-12 flex items-center justify-center text-egera mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href={href}
        className="inline-flex items-center text-egera font-medium hover:underline"
      >
        Les mer <ArrowRight size={16} className="ml-1" />
      </a>
    </div>
  );
};

const Services = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
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
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: "Webdesign",
      description: "Moderne og brukervennlige nettsider som engasjerer besøkende og konverterer til kunder.",
      icon: <Layout />,
      href: "#webdesign"
    },
    {
      title: "App Utvikling",
      description: "Native og cross-platform mobilapplikasjoner for iOS og Android med fokus på brukeropplevelse.",
      icon: <Smartphone />,
      href: "#app-utvikling"
    },
    {
      title: "Systemutvikling",
      description: "Skreddersydde digitale løsninger og integrasjoner som effektiviserer dine arbeidsprosesser.",
      icon: <Code />,
      href: "#systemutvikling"
    },
    {
      title: "Digital Analyse",
      description: "Dataanalyse og innsikt som gir grunnlag for bedre beslutninger og optimalisering.",
      icon: <LineChart />,
      href: "#digital-analyse"
    },
    {
      title: "API Integrasjon",
      description: "Sømløs integrasjon mellom systemer og tjenester for automatisering og effektivisering.",
      icon: <Database />,
      href: "#api-integrasjon"
    },
    {
      title: "CMS & Innhold",
      description: "Brukervennlige publiseringsløsninger som gjør det enkelt å administrere innhold.",
      icon: <Layout />,
      href: "#cms-innhold"
    }
  ];

  return (
    <section id="tjenester" className="section">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 animate-reveal"
          >
            Noen av våre tjenester
          </h2>
          <p className="text-gray-600">
            Vi tilbyr skreddersydde digitale løsninger som hjelper bedrifter å vokse og oppnå sine mål i det digitale landskapet
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
