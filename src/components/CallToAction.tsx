
import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section id="kontakt" className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              La oss ta en prat
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Vi hjelper deg gjerne med å finne den beste løsningen for ditt prosjekt. Ta kontakt med oss for en uforpliktende samtale.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-egera/10 p-3 rounded-xl flex items-center justify-center text-egera mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">E-post</h3>
                  <a href="mailto:kontakt@egera.no" className="text-gray-600 hover:text-egera transition-colors">
                    kontakt@egera.no
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-egera/10 p-3 rounded-xl flex items-center justify-center text-egera mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Telefon</h3>
                  <a href="tel:+4712345678" className="text-gray-600 hover:text-egera transition-colors">
                    +47 123 45 678
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-egera/10 p-3 rounded-xl flex items-center justify-center text-egera mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Adresse</h3>
                  <address className="text-gray-600 not-italic">
                    Innovasjonsparken<br />
                    Teknologiveien 10<br />
                    0150 Oslo
                  </address>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Send oss en melding</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Navn
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-egera focus:border-transparent transition"
                    placeholder="Ditt navn"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-post
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-egera focus:border-transparent transition"
                    placeholder="din.epost@eksempel.no"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Emne
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-egera focus:border-transparent transition"
                  placeholder="Hva gjelder henvendelsen?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Melding
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-egera focus:border-transparent transition"
                  placeholder="Skriv din melding her..."
                ></textarea>
              </div>
              
              <Button className="w-full button-primary">
                Send melding <ArrowRight size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
