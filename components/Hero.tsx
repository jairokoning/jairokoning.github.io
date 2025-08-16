import React from 'react';

const Hero: React.FC = () => {
    // photo-1550439062-609e1531270e
    // 1587560699334-cc4ff634909a
    // 1559163179-3fd017552229

    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex items-center justify-center bg-brand-dark text-center px-6 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559163387-e46e8dcb27f2?q=80&w=2070&auto=format&fit=crop')" }}
            >
            <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-sm"></div>
            <div className="relative z-10 max-w-4xl">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-brand-beige mb-4">
                    Jairo Koning
                </h1>
                <p className="text-xl md:text-2xl text-brand-beige/80 mb-8">
                    Engenheiro de Software | Desenvolvedor de Sites e Sistemas Web
                </p>
                <a 
                    href="#projects" 
                    className="inline-block bg-brand-brown text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
                >
                    Veja meus projetos
                </a>
            </div>
        </section>
    );
};

export default Hero;
