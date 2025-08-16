import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 max-w-sm mx-auto md:max-w-none xl:max-w-sm xl:mx-auto md:mx-0 mb-12 md:mb-0">
            <img 
              src="https://avatars.githubusercontent.com/u/29260158?s=400&u=a90a20ae003280ea7f18653e194144655e8406bd&v=4" 
              alt="Jairo Koning"
              className="rounded-full shadow-2xl object-cover w-full h-auto aspect-square"
            />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-4xl font-bold text-brand-beige mb-6">Sobre Mim</h2>
            <p className="text-brand-beige/80 mb-4 leading-relaxed">
              Olá! Sou Jairo Koning, um Engenheiro de Software apaixonado por criar soluções digitais que são tanto funcionais quanto visualmente atraentes. Com experiência em desenvolvimento web, eu transformo ideias complexas em aplicações robustas e intuitivas.
            </p>
            <p className="text-brand-beige/80 mb-4 leading-relaxed">
              Meu foco está em construir produtos de alta qualidade, desde Landing Pages e sites institucionais até sistemas de gestão complexos e plataformas SaaS. Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades para entregar o melhor resultado possível para meus clientes.
            </p>
            <p className="text-brand-beige/80 leading-relaxed">
              Vamos construir algo incrível juntos?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;