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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-emerald-100">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-12 py-16 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white mb-8 shadow-lg">
              <svg className="w-14 h-14 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Pagamento Confirmado!
            </h1>
            <div className="inline-block bg-white/25 backdrop-blur-sm px-8 py-3 rounded-full">
              <p className="text-white font-semibold text-xl">✓ 100% Aprovado</p>
            </div>
          </div>

          <div className="px-12 py-16 text-center space-y-8">
            <div className="space-y-4">
              <p className="text-3xl font-semibold text-slate-800 leading-relaxed">
                Pagamento confirmado meu bem ❤
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                Pronta para começar sua leitura?
              </p>
            </div>

            <div className="pt-8">
              <div className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 px-10 py-6 rounded-2xl border-2 border-emerald-200 shadow-md">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <p className="font-semibold text-xl">
                  Retorne ao WhatsApp e vamos dar início
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-12 py-8 border-t border-slate-200">
            <p className="text-center text-slate-500 text-sm font-medium">
              Todos os direitos reservados - Vortex Futuro 2025 ©
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
