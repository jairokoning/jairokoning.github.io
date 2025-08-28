# Subscription Plans Page Implementation Plan

## Overview
Create a new subscription plans page for dental clinics that is only accessible via direct URL (no links from main navigation).

## Requirements
1. Use HashRouter for GitHub Pages compatibility
2. Create a new page with three subscription plans:
   - Essencial: R$ 1.200 setup, R$ 99/mês
   - Pro: R$ 2.200 setup, R$ 199/mês
   - Premium: R$ 3.500 setup, R$ 299/mês
3. Page should only be accessible via direct URL (no navigation links)

## Implementation Steps

### 1. Install Dependencies
```bash
npm install react-router-dom
```

### 2. Create SubscriptionPlans Component
File: `components/SubscriptionPlans.tsx`

The component should include:
- Page title and description for dental clinics
- Three plan cards with details:
  * Plan name
  * What's included
  * Setup cost
  * Monthly/yearly subscription cost
- Responsive design using Tailwind CSS
- Back to home link

### 3. Update Routing Structure
File: `index.tsx`
- Import HashRouter from react-router-dom
- Wrap the application with HashRouter
- Set up routes for:
  * Main page (App component) at "/"
  * Subscription plans page at "/planos-assinatura"

### 4. Update App Component
File: `App.tsx`
- Convert to a routed component
- Keep existing structure but ensure it works with routing

### 5. Plan Details
```
Plano: Essencial
O que inclui: Site responsivo, domínio, hospedagem, 1 atualização mensal, WhatsApp Básico
Setup/desenvolvimento: R$ 1.200 (pagamento único)
Assinatura: R$ 99/mês ou R$ /ano

Plano: Pro
O que inclui: Site responsivo, domínio, hospedagem, 3 atualizações/mês, WhatsApp com mensagens customizadas, Formulário de contato (via e-mail), SEO
Setup/desenvolvimento: R$ 2.200 (pagamento único)
Assinatura: R$ 199/mês ou R$ /ano

Plano: Premium
O que inclui: Site responsivo, domínio, hospedagem, 4 atualizações/mês, WhatsApp com mensagens customizadas, Formulário de contato (via e-mail), SEO, Integrações avançadas (Agendamento online, Pagamento Online)
Setup/desenvolvimento: R$ 3.500 (pagamento único)
Assinatura: R$ 299/mês ou R$ /ano
```

## Technical Considerations
1. Use HashRouter instead of BrowserRouter for GitHub Pages compatibility
2. Ensure the subscription page is not linked from main navigation
3. Maintain existing anchor link navigation for the main page
4. Keep consistent styling with the existing site