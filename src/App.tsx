import { useEffect, useState } from 'react';
import { Check, MessageCircle } from 'lucide-react';

function App() {
  const [showContent, setShowContent] = useState(false);

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

    setTimeout(() => {
      setShowContent(true);
    }, 300);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div
        className={`w-full max-w-lg transition-all duration-700 transform ${
          showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-10 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white mb-6 shadow-lg animate-scale-in">
              <Check className="w-12 h-12 text-green-500 stroke-[3]" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">
              Pagamento Confirmado!
            </h1>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
              <p className="text-white font-semibold text-lg">100% ✓</p>
            </div>
          </div>

          <div className="px-8 py-12 text-center space-y-6">
            <div className="space-y-3">
              <p className="text-2xl font-medium text-slate-800">
                Pagamento confirmado meu bem ❤
              </p>
              <p className="text-xl text-slate-600">
                Pronta para começar sua leitura?
              </p>
            </div>

            <div className="pt-6">
              <div className="inline-flex items-center justify-center space-x-3 bg-green-50 text-green-700 px-8 py-4 rounded-xl border-2 border-green-200">
                <MessageCircle className="w-6 h-6" />
                <p className="font-semibold text-lg">
                  Retorne ao WhatsApp e vamos dar início
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 px-8 py-6 border-t border-slate-100">
            <p className="text-center text-slate-500 text-sm">
              Todos os direitos reservados - Vortex Futuro 2025 ©
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes scale-in {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out 0.3s both;
        }

        .delay-150 {
          animation-delay: 0.15s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
}

export default App;
