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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-white mb-3">
              Pagamento Confirmado!
            </h1>

            <div className="flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
                <p className="text-white font-semibold text-lg">✓ 100% Aprovado</p>
              </div>
            </div>
          </div>

          <div className="px-8 py-12 text-center">
            <div className="mb-6">
              <p className="text-2xl font-semibold text-slate-800 mb-3">
                Pagamento confirmado meu bem ❤
              </p>
              <p className="text-lg text-slate-600">
                Pronta para começar sua leitura?
              </p>
            </div>

            <div className="flex justify-center mt-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 px-8 py-4 rounded-xl border-2 border-emerald-200 shadow-sm">
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <p className="font-semibold text-base">
                  Retorne ao WhatsApp e vamos dar início
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 px-8 py-6 border-t border-slate-200 text-center">
            <p className="text-slate-500 text-xs">
              Todos os direitos reservados - Vortex Futuro 2025 ©
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
