import { useEffect, useState } from 'react';

export default function SplashScreen({ onNavigate }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setVisible(true), 100);
    const nav  = setTimeout(() => onNavigate('onboarding'), 2400);
    return () => { clearTimeout(show); clearTimeout(nav); };
  }, [onNavigate]);

  return (
    <div className="flex items-center justify-center h-full w-full bg-app">
      <img
        src="/logo.png"
        alt="MedGlobal360"
        style={{
          width: 180,
          objectFit: 'contain',
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1)' : 'scale(0.85)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      />
    </div>
  );
}
