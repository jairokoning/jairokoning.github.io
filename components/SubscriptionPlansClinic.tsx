import React from 'react';
import { Link } from 'react-router-dom';

interface Plan {
  id: string;
  name: string;
  description: string;
  features: string[];
  setupCost: string;
  monthlyCost: string;
  yearlyCost: string;
}

const SubscriptionPlansClinic: React.FC = () => {
  const plans: Plan[] = [
    {
      id: 'essencial',
      name: 'Essencial',
      description: 'Perfeito para clínicas que estão começando sua jornada digital',
      features: [
        'Site responsivo',
        'Domínio',
        'Hospedagem',
        '1 atualização mensal',
        'WhatsApp Básico'
      ],
      setupCost: 'R$ 1.200',
      monthlyCost: 'R$ 99/mês',
      yearlyCost: 'R$ 990/ano (10% de desconto)' // 10% discount
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Ideal para clínicas em crescimento que precisam de mais visibilidade',
      features: [
        'Site responsivo',
        'Domínio',
        'Hospedagem',
        '3 atualizações/mês',
        'WhatsApp com mensagens customizadas',
        'Formulário de contato (via e-mail)',
        'SEO'
      ],
      setupCost: 'R$ 2.200',
      monthlyCost: 'R$ 199/mês',
      yearlyCost: 'R$ 1.990/ano (10% de desconto)' // 10% discount
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Solução completa para clínicas que querem maximizar sua presença online',
      features: [
        'Site responsivo',
        'Domínio',
        'Hospedagem',
        '4 atualizações/mês',
        'WhatsApp com mensagens customizadas',
        'Formulário de contato (via e-mail)',
        'SEO',
        'Catálogo de serviços/produtos',
        'Integrações avançadas (Agendamento online, Pagamento Online)'
      ],
      setupCost: 'R$ 3.500',
      monthlyCost: 'R$ 299/mês',
      yearlyCost: 'R$ 2.990/ano (10% de desconto)' // 10% discount
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-brand-beige py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Planos de Assinatura para Clínicas</h1>
          <p className="text-lg text-brand-beige/80 max-w-3xl mx-auto">
            Soluções digitais completas para sua Clínica. Escolha o plano que melhor se adapta às necessidades da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-brand-dark rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${plan.id === 'pro'
                ? 'border-4 border-blue-400 ring-2 ring-blue-400/20 shadow-blue-400/20'
                : 'border border-brand-beige/20'
                }`}
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                <p className="text-brand-beige/80 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">O que inclui:</h3>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-brand-beige mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Investimento:</h3>
                  <p className="mb-2">Setup/desenvolvimento: <span className="font-bold">{plan.setupCost}</span> (pagamento único)</p>
                  <p className="mb-1">Assinatura mensal: <span className="font-bold">{plan.monthlyCost}</span></p>
                  <p>Assinatura anual: <span className="font-bold">{plan.yearlyCost}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="inline-block bg-brand-beige text-brand-dark font-semibold py-3 px-6 rounded-lg hover:bg-brand-beige/90 transition-colors duration-300"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlansClinic;
