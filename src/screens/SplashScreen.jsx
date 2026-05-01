import { useEffect } from 'react';

export default function SplashScreen({ onNavigate }) {
  useEffect(() => {
    const t = setTimeout(() => onNavigate('onboarding'), 2200);
    return () => clearTimeout(t);
  }, [onNavigate]);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full"
      style={{ background: 'linear-gradient(160deg, #1B4FBF 0%, #0D9488 100%)' }}>

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10"
        style={{ background: 'white', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'white', transform: 'translate(-30%, 30%)' }} />

      <div className="relative z-10 flex flex-col items-center gap-6 fade-in">
        {/* Logo */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 rounded-3xl bg-white flex items-center justify-center shadow-2xl"
            style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.25)' }}>
            <span className="text-4xl">🌐</span>
          </div>
          <div className="text-center">
            <h1 className="text-display font-bold text-white tracking-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
              MG<span className="text-teal-300">360</span>
            </h1>
            <p className="text-white/80 text-sm mt-1 font-medium tracking-widest uppercase">
              MedGlobal360
            </p>
          </div>
        </div>

        <p className="text-white/70 text-base text-center px-8 leading-relaxed">
          World-class healthcare, within reach
        </p>

        {/* Loading dots */}
        <div className="flex gap-2 mt-4">
          {[0, 1, 2].map(i => (
            <div key={i} className="w-2 h-2 rounded-full bg-white/60"
              style={{ animation: `pulse 1.4s ease-in-out ${i * 0.2}s infinite` }} />
          ))}
        </div>
      </div>

      {/* Bottom tagline */}
      <div className="absolute bottom-10 text-white/40 text-xs text-center px-6">
        Trusted by 50,000+ patients from 80+ countries
      </div>

      <style>{`
        @keyframes pulse {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.4; }
          40% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
