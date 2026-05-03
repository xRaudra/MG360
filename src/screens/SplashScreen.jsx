import { useEffect, useState } from 'react';

export default function SplashScreen({ onNavigate }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 100);
    const t2 = setTimeout(() => setPhase(2), 1600);
    const t3 = setTimeout(() => onNavigate('onboarding'), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onNavigate]);

  return (
    <div
      className="bg-app"
      style={{
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        overflow: 'hidden',
      }}
    >
      {/* Subtle background texture rings */}
      <div style={{
        position: 'absolute',
        width: 320, height: 320,
        borderRadius: '50%',
        border: '1px solid rgba(86,105,143,0.07)',
        opacity: phase >= 1 ? 1 : 0,
        transform: phase >= 1 ? 'scale(1)' : 'scale(0.6)',
        transition: 'opacity 1s ease, transform 1.2s cubic-bezier(0.34,1.2,0.64,1)',
      }} />
      <div style={{
        position: 'absolute',
        width: 220, height: 220,
        borderRadius: '50%',
        border: '1px solid rgba(86,105,143,0.10)',
        opacity: phase >= 1 ? 1 : 0,
        transform: phase >= 1 ? 'scale(1)' : 'scale(0.6)',
        transition: 'opacity 1s 0.1s ease, transform 1.2s 0.1s cubic-bezier(0.34,1.2,0.64,1)',
      }} />

      {/* Logo */}
      <img
        src="/logo.png"
        alt="MedGlobal360"
        style={{
          width: 160,
          objectFit: 'contain',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'scale(1) translateY(0)' : 'scale(0.72) translateY(8px)',
          transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      />

      {/* Tagline */}
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 13, fontWeight: 400,
        color: '#94A3B8',
        letterSpacing: '0.02em',
        margin: 0,
        opacity: phase >= 2 ? 1 : 0,
        transform: phase >= 2 ? 'translateY(0)' : 'translateY(6px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}>
        World-class care, close to home
      </p>
    </div>
  );
}
