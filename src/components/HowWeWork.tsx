
import React from 'react';
import { Search, Lightbulb, Laptop, Zap, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProcessStep = ({ 
  number, 
  title, 
  description, 
  icon, 
  isLast = false 
}: { 
  number: string; 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  isLast?: boolean;
}) => {
  return (
    <div className="flex group">
      <div className="mr-6 flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-egera text-white flex items-center justify-center font-heading font-bold text-xl shadow-lg">
          {number}
        </div>
        {!isLast && (
          <div className="w-0.5 bg-gray-200 flex-grow mt-4 group-hover:bg-egera/30 transition-colors duration-300"></div>
        )}
      </div>
      <div className="pt-2 pb-8">
        <div className="flex items-center mb-2">
          <div className="mr-3 text-egera">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowWeWork = () => {
  const steps = [
    {
      number: "1",
      title: "Analyse & utforskning",
      description: "Vi begynner med grundig analyse av dine behov, målgruppe og markedssituasjon for å sikre at løsningen treffer målet.",
      icon: <Search />
    },
    {
      number: "2",
      title: "Strategi & konsept",
      description: "Basert på innsikten utvikler vi en tydelig strategi og konsept som danner grunnlaget for designprosessen.",
      icon: <Lightbulb />
    },
    {
      number: "3",
      title: "Design & utvikling",
      description: "Vi designer og utvikler løsningen med fokus på brukeropplevelse, funksjonalitet og visuell identitet.",
      icon: <Laptop />
    },
    {
      number: "4",
      title: "Implementering & optimalisering",
      description: "Løsningen implementeres og testes grundig før lansering, og vi hjelper med kontinuerlig optimalisering.",
      icon: <Zap />,
      isLast: true
    }
  ];

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Alt er inkludert i det nye nettstedet ditt, som standard.
            </h2>
            <p className="text-gray-600 mb-8">
              Vår prosess er grundig og strukturert, men samtidig fleksibel nok til å tilpasse seg dine spesifikke behov og utfordringer. Vi jobber tett med deg gjennom hele prosjektet.
            </p>
            
            <button className="button-primary inline-flex items-center">
              Les mer om vår prosess <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isLast={step.isLast}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
