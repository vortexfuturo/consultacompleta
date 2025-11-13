import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const hasTrackedPurchase = sessionStorage.getItem('fb_purchase_tracked');

    const urlParams = new URLSearchParams(window.location.search);
    const utmData = {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_term: urlParams.get('utm_term') || '',
      utm_content: urlParams.get('utm_content') || ''
    };

    if (!hasTrackedPurchase && typeof window.fbq === 'function') {
      window.fbq('track', 'Purchase', {
        currency: 'BRL',
        value: 50,
        ...utmData
      });
      sessionStorage.setItem('fb_purchase_tracked', 'true');
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-200 flex items-center justify-center p-4">
      <div className="w-full max-w-lg mx-auto bg-white shadow-lg">

        <div className="bg-neutral-700 px-6 py-8 text-center">
          <h1 className="text-2xl font-bold text-white uppercase tracking-wide mb-2">
            PÁGINA DE CONFIRMAÇÃO
          </h1>
          <h2 className="text-xl font-bold text-white uppercase tracking-wide">
            DE PAGAMENTO!
          </h2>
        </div>

        <div className="bg-lime-500 px-6 py-6 text-center">
          <p className="text-2xl font-bold text-white uppercase tracking-wide">
            Pagamento confirmado! 100%
          </p>
        </div>

        <div className="bg-white px-6 py-16"></div>

        <div className="bg-lime-500 px-6 py-8 text-center">
          <p className="text-3xl font-bold text-white uppercase tracking-wide leading-tight">
            PAGAMENTO
          </p>
          <p className="text-3xl font-bold text-white uppercase tracking-wide leading-tight">
            CONFIRMADO!
          </p>
        </div>

        <div className="bg-white px-6 py-16 text-center">
          <p className="text-sm text-slate-700 mb-2">
            Todos os direitos reservados - Templo Mistério Revelado 2024 ©
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;
