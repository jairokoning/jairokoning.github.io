
import React, { useState, useEffect, forwardRef } from 'react';

// Define props to be empty as we are not passing any specific props
interface HeaderProps {}

const Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: 'Sobre' },
        { href: '#services', label: 'Serviços' },
        { href: '#projects', label: 'Projetos' },
        { href: '#contact', label: 'Contato' },
    ];

    return (
        <header ref={ref} className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <a href="#hero" className="text-xl font-bold text-brand-beige hover:text-white transition-colors">
                        Jairo Koning
                    </a>
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-brand-beige hover:text-white transition-colors relative group">
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-beige group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
});

Header.displayName = 'Header';

export default Header;
