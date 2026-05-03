import { useEffect, useState } from 'react';

export default function SplashScreen({ onNavigate }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setVisible(true), 100);
    const nav  = setTimeout(() => onNavigate('onboarding'), 2600);
    return () => { clearTimeout(show); clearTimeout(nav); };
  }, [onNavigate]);

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%', overflow: 'hidden' }}>
      <img
        src="/default-bg.jpg"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <img
          src="/logo.png"
          alt="MedGlobal360"
          style={{
            width: 200,
            objectFit: 'contain',
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1)' : 'scale(0.75)',
            transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        />
      </div>
    </div>
  );
}
