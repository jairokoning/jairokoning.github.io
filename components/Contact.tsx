import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');

  // --- CONFIGURAÇÃO DO EMAILJS ---
  // Substitua pelos seus próprios IDs do EmailJS.
  // Crie uma conta em https://www.emailjs.com/
  const SERVICE_ID = 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
  // ---------------------------------

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (SERVICE_ID === 'YOUR_SERVICE_ID' || TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      setSubmissionStatus('error');
      console.error("EmailJS não configurado. Por favor, substitua os valores de placeholder em components/Contact.tsx");
      setTimeout(() => setSubmissionStatus('idle'), 6000);
      return;
    }

    if (form.current) {
      setSubmissionStatus('loading');
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(
          () => {
            setSubmissionStatus('success');
            form.current?.reset();
            setTimeout(() => setSubmissionStatus('idle'), 5000);
          },
          (error) => {
            setSubmissionStatus('error');
            console.error('FALHA NO ENVIO...', error.text);
            setTimeout(() => setSubmissionStatus('idle'), 6000);
          },
        );
    }
  };

  const renderStatusMessage = () => {
    if (submissionStatus === 'success') {
      return (
        <div className="text-center p-4 bg-green-900/50 border border-green-700 text-green-300 rounded-lg">
          Obrigado pela sua mensagem! Responderei em breve.
        </div>
      );
    }
    if (submissionStatus === 'error') {
      return (
        <div className="text-center p-4 bg-red-900/50 border border-red-700 text-red-300 rounded-lg">
          Ocorreu um erro ao enviar a mensagem. Por favor, configure as credenciais ou tente novamente.
        </div>
      );
    }
    return null;
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-brand-dark/95">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-beige">Contato</h2>
          <p className="text-brand-beige/70 mt-4 max-w-2xl mx-auto">
            Tem um projeto em mente ou quer trocar uma ideia? Entre em contato.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          {submissionStatus === 'success' || submissionStatus === 'error' ? (
            renderStatusMessage()
          ) : (
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="sr-only">Nome</label>
                <input 
                  type="text" 
                  name="user_name" 
                  id="user_name" 
                  placeholder="Seu nome"
                  required
                  className="w-full bg-brand-brown/20 border border-brand-brown/50 rounded-md py-3 px-4 text-brand-beige placeholder-brand-beige/50 focus:outline-none focus:ring-2 focus:ring-brand-beige/50 transition-all"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="sr-only">Email</label>
                <input 
                  type="email" 
                  name="user_email" 
                  id="user_email" 
                  placeholder="Seu e-mail"
                  required
                  className="w-full bg-brand-brown/20 border border-brand-brown/50 rounded-md py-3 px-4 text-brand-beige placeholder-brand-beige/50 focus:outline-none focus:ring-2 focus:ring-brand-beige/50 transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Mensagem</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={5} 
                  placeholder="Sua mensagem"
                  required
                  className="w-full bg-brand-brown/20 border border-brand-brown/50 rounded-md py-3 px-4 text-brand-beige placeholder-brand-beige/50 focus:outline-none focus:ring-2 focus:ring-brand-beige/50 transition-all"
                ></textarea>
              </div>
              <div className="text-center">
                <button 
                  type="submit"
                  disabled={submissionStatus === 'loading'}
                  className="bg-brand-brown text-white font-bold py-3 px-12 rounded-md hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submissionStatus === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </div>
            </form>
          )}

          <div className="mt-12 p-6 bg-brand-brown/10 border border-brand-brown/30 rounded-lg text-brand-beige/70 text-sm">
            <h3 className="font-bold text-brand-beige mb-3">Como Ativar o Formulário</h3>
            <p className="mb-2">Este formulário usa <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-beige">EmailJS</a> para enviar e-mails sem backend.</p>
            <ol className="list-decimal list-inside space-y-2">
                <li>Crie uma conta gratuita no <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-beige">EmailJS</a>.</li>
                <li>Adicione um novo serviço de e-mail (ex: Gmail).</li>
                <li>Crie um template de e-mail. Use as variáveis <code>{`{{user_name}}`}</code>, <code>{`{{user_email}}`}</code>, e <code>{`{{message}}`}</code> para receber os dados.</li>
                <li>Copie seu "Service ID", "Template ID" e "Public Key".</li>
                <li>Cole essas chaves nas constantes no topo do arquivo <code>components/Contact.tsx</code>.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;