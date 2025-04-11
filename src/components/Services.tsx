
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code, Layout, Smartphone, LineChart, Database, FileCode } from 'lucide-react';

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
      className="glass-card p-6 hover-card animate-reveal group"
    >
      <div className="relative mb-6">
        <div className="bg-gradient-to-br from-egera to-egera-accent p-3 rounded-xl w-14 h-14 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-egera/5 rounded-lg -z-10 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300"></div>
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">{title}</h3>
      <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors">{description}</p>
      <a 
        href={href}
        className="inline-flex items-center text-egera font-medium group-hover:text-egera-accent transition-colors"
      >
        <span className="relative">
          Les mer 
          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-egera-accent group-hover:w-full transition-all duration-300"></span>
        </span>
        <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

const Services = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
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
    
    [titleRef.current, subtitleRef.current].forEach(el => {
      if (el) observer.observe(el);
    });
    
    return () => {
      [titleRef.current, subtitleRef.current].forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const services = [
    {
      title: "Webdesign",
      description: "Moderne og brukervennlige nettsider som engasjerer besøkende og konverterer til kunder.",
      icon: <Layout size={24} />,
      href: "#webdesign"
    },
    {
      title: "App Utvikling",
      description: "Native og cross-platform mobilapplikasjoner for iOS og Android med fokus på brukeropplevelse.",
      icon: <Smartphone size={24} />,
      href: "#app-utvikling"
    },
    {
      title: "Systemutvikling",
      description: "Skreddersydde digitale løsninger og integrasjoner som effektiviserer dine arbeidsprosesser.",
      icon: <Code size={24} />,
      href: "#systemutvikling"
    },
    {
      title: "Digital Analyse",
      description: "Dataanalyse og innsikt som gir grunnlag for bedre beslutninger og optimalisering.",
      icon: <LineChart size={24} />,
      href: "#digital-analyse"
    },
    {
      title: "API Integrasjon",
      description: "Sømløs integrasjon mellom systemer og tjenester for automatisering og effektivisering.",
      icon: <Database size={24} />,
      href: "#api-integrasjon"
    },
    {
      title: "CMS & Innhold",
      description: "Brukervennlige publiseringsløsninger som gjør det enkelt å administrere innhold.",
      icon: <FileCode size={24} />,
      href: "#cms-innhold"
    }
  ];

  return (
    <section id="tjenester" className="section relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-gradient-radial from-egera-accent/5 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-radial from-blue-500/5 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-1 h-10 bg-gradient-to-b from-egera-accent to-transparent rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/4 w-1 h-10 bg-gradient-to-b from-egera-accent to-transparent rounded-full"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full glass-dark">
            <span className="text-sm font-medium text-egera-accent">Våre Tjenester</span>
          </div>
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 animate-reveal"
          >
            Skreddersydde <span className="text-gradient">digitale løsninger</span> for din bedrift
          </h2>
          <p 
            ref={subtitleRef}
            className="text-gray-600 animate-reveal"
          >
            Vi tilbyr skreddersydde digitale løsninger som hjelper bedrifter å vokse og oppnå sine mål i det digitale landskapet
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
