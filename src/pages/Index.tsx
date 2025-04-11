
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import HowWeWork from '../components/HowWeWork';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  // Initialize intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Track all elements with animate-reveal class
    document.querySelectorAll('.animate-reveal').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.animate-reveal').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <main className="relative">
      {/* Background gradients */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute top-[10%] right-[20%] w-[40vw] h-[40vw] rounded-full bg-gradient-radial from-blue-500/5 to-transparent blur-3xl"></div>
        <div className="absolute top-[60%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-gradient-radial from-purple-500/5 to-transparent blur-3xl"></div>
      </div>

      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Portfolio />
      <HowWeWork />
      <Team />
      <Testimonials />
      <CallToAction />
      <Footer />

      {/* Back to top button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 w-12 h-12 bg-egera text-white rounded-full shadow-lg flex items-center justify-center z-40 hover:bg-egera-light transition-colors"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </a>
    </main>
  );
};

export default Index;
