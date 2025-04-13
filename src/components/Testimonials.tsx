
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface TestimonialProps {
  content: string;
  name: string;
  position: string;
  company: string;
  rating: number;
  image?: string;
}

const Testimonial = ({ content, name, position, company, rating, image }: TestimonialProps) => {
  return (
    <Card className="p-6 h-full flex flex-col glass-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              fill={i < rating ? "currentColor" : "none"} 
              className={i < rating ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        <Quote size={20} className="text-gray-400" />
      </div>
      <blockquote className="flex-grow">
        <p className="text-gray-700 italic mb-6">{content}</p>
      </blockquote>
      <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
            <span className="font-medium text-gray-500">{name.charAt(0)}</span>
          </div>
        )}
        <div>
          <p className="font-bold text-foreground">{name}</p>
          <p className="text-gray-500 text-sm">{position}, {company}</p>
        </div>
      </div>
    </Card>
  );
};

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      content: "Samarbeidet med Egera har gitt oss en nettside som virkelig representerer vår visjon og vårt merke. Deres kreative team har en unik evne til å forstå våre behov.",
      name: "Anna Berg",
      position: "Markedssjef",
      company: "NorTech AS",
      rating: 5
    },
    {
      content: "Egera leverte en app som overgikk alle våre forventninger. Den er ikke bare estetisk tiltalende, men også utrolig brukervennlig og funksjonell.",
      name: "Thomas Larsen",
      position: "Produktdirektør",
      company: "MobilPay",
      rating: 5
    },
    {
      content: "Vi har samarbeidet med flere byråer tidligere, men Egera utmerker seg med sin profesjonalitet, kreativitet og tekniske kompetanse.",
      name: "Ida Johansen",
      position: "Daglig leder",
      company: "DigitalVekst",
      rating: 4
    },
    {
      content: "Teamet hos Egera er eksepsjonelt dyktige og responsive. De lyttet til våre behov og leverte en digital løsning som har hjulpet oss å nå nye kunder.",
      name: "Markus Holm",
      position: "CEO",
      company: "InnoTech",
      rating: 5
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === Math.ceil(testimonials.length / 2) - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? Math.ceil(testimonials.length / 2) - 1 : prev - 1));
  };

  return (
    <section className="section bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kundevurderinger
          </h2>
          <p className="text-gray-600">
            Hva kundene våre sier om å jobbe med oss og resultatene vi leverer
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="w-full flex-none grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                {testimonials.slice(0, 2).map((testimonial, index) => (
                  <Testimonial
                    key={index}
                    content={testimonial.content}
                    name={testimonial.name}
                    position={testimonial.position}
                    company={testimonial.company}
                    rating={testimonial.rating}
                  />
                ))}
              </div>
              {testimonials.length > 2 && (
                <div className="w-full flex-none grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                  {testimonials.slice(2, 4).map((testimonial, index) => (
                    <Testimonial
                      key={index + 2}
                      content={testimonial.content}
                      name={testimonial.name}
                      position={testimonial.position}
                      company={testimonial.company}
                      rating={testimonial.rating}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:left-0 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors z-10"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:right-0 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors z-10"
            aria-label="Next testimonials"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-6">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full mx-1 transition-all",
                currentSlide === index ? "bg-black w-6" : "bg-gray-300"
              )}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
