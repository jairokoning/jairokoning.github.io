import React from 'react';
import { Project, Service } from './types';

// SVG Icons as React Components
const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);

const DatabaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
);

const LayersIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
);

export const GITHUB_ICON = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

export const LINKEDIN_ICON = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export const EXTERNAL_LINK_ICON = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

export const INSTAGRAM_ICON = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

export const WHATSAPP_ICON = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);


export const SERVICES_DATA: Service[] = [
    {
        icon: <CodeIcon className="w-10 h-10 text-brand-beige mb-4" />,
        title: "Landing Pages e Portfólios",
        description: "Criação de páginas de destino e portfólios visualmente atraentes e otimizados para conversão, destacando sua marca ou perfil profissional."
    },
    {
        icon: <GlobeIcon className="w-10 h-10 text-brand-beige mb-4" />,
        title: "Sites Institucionais",
        description: "Desenvolvimento de sites completos que representam a identidade e os valores da sua empresa, com design responsivo e moderno."
    },
    {
        icon: <LayersIcon className="w-10 h-10 text-brand-beige mb-4" />,
        title: "Sistemas de Gestão",
        description: "Construção de sistemas web customizados para otimizar processos internos, gerenciar dados e melhorar a eficiência operacional do seu negócio."
    },
    {
        icon: <DatabaseIcon className="w-10 h-10 text-brand-beige mb-4" />,
        title: "Software como Serviço (SaaS)",
        description: "Desenvolvimento de aplicações SaaS escaláveis e robustas, desde a concepção da ideia até o lançamento e manutenção do produto."
    }
];

export const PROJECTS_DATA: Project[] = [
    {
        imageUrl: "https://picsum.photos/seed/project1/600/400",
        title: "Sistema de Gestão de Clientes",
        description: "Uma plataforma SaaS completa para gerenciamento de relacionamento com o cliente (CRM), com funil de vendas, relatórios e automações.",
        tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
        liveUrl: "#",
        repoUrl: "#"
    },
    {
        imageUrl: "https://picsum.photos/seed/project2/600/400",
        title: "Catálogo de Produtos Interativo",
        description: "Site institucional para uma marca de móveis com um catálogo de produtos interativo, permitindo visualização 3D e customização.",
        tags: ["Next.js", "Three.js", "TypeScript", "Styled Components"],
        liveUrl: "#",
        repoUrl: "#"
    },
    {
        imageUrl: "https://picsum.photos/seed/project3/600/400",
        title: "Landing Page para App Mobile",
        description: "Página de captura de leads de alta conversão para o lançamento de um novo aplicativo de fitness, integrada com Mailchimp.",
        tags: ["HTML5", "CSS3", "JavaScript", "GSAP"],
        liveUrl: "#",
        repoUrl: "#"
    },
    {
        imageUrl: "https://picsum.photos/seed/project4/600/400",
        title: "Portfolio para Fotógrafo",
        description: "Um portfólio minimalista e elegante, focado na exibição de imagens em alta qualidade, com galerias dinâmicas e blog integrado.",
        tags: ["Gatsby", "GraphQL", "Contentful", "Emotion"],
        liveUrl: "#",
        repoUrl: "#"
    }
];