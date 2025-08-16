import React from 'react';
import { SERVICES_DATA } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-brand-dark/95">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-beige">Serviços</h2>
          <p className="text-brand-beige/70 mt-4 max-w-2xl mx-auto">
            Soluções completas para transformar suas ideias em realidade digital.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div 
              key={index}
              className="bg-brand-brown/20 p-8 rounded-lg text-center border border-brand-brown/30 transition-all duration-300 hover:border-brand-beige/50 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="flex justify-center items-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-beige mb-3">{service.title}</h3>
              <p className="text-brand-beige/80 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
