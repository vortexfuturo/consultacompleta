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
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '50px auto',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
      border: '1px solid #ddd',
      borderRadius: '8px'
    }}>
      <h1 style={{ color: '#4CAF50', fontSize: '28px', marginBottom: '20px' }}>
        Pagamento Confirmado!
      </h1>
      <p style={{ fontSize: '18px', color: '#333', marginBottom: '15px' }}>
        Pagamento confirmado meu bem ❤
      </p>
      <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px' }}>
        Pronta para começar sua leitura?
      </p>
      <p style={{ fontSize: '16px', color: '#4CAF50', fontWeight: 'bold' }}>
        Retorne ao WhatsApp e vamos dar início
      </p>
      <footer style={{ marginTop: '40px', fontSize: '12px', color: '#999' }}>
        Todos os direitos reservados - Vortex Futuro 2025 ©
      </footer>
    </div>
  );
}

export default App;
