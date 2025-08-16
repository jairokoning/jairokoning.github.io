import React from 'react';
import { GITHUB_ICON, LINKEDIN_ICON, INSTAGRAM_ICON, WHATSAPP_ICON } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark border-t border-brand-brown/20 py-8">
            <div className="container mx-auto px-6 text-center text-brand-beige/60">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-brand-beige transition-colors">
                        <GITHUB_ICON className="w-6 h-6" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-brand-beige transition-colors">
                        <LINKEDIN_ICON className="w-6 h-6" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-brand-beige transition-colors">
                        <INSTAGRAM_ICON className="w-6 h-6" />
                    </a>
                    <a href="https://wa.me/5511998202235" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-brand-beige transition-colors">
                        <WHATSAPP_ICON className="w-6 h-6" />
                    </a>
                </div>
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Jairo Koning. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;