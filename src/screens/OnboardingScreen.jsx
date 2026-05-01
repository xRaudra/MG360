import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const slides = [
  {
    emoji: '🏥',
    title: 'World-Class Medical Care',
    subtitle: 'Access top-ranked hospitals in India — at a fraction of the cost.',
    bg: 'linear-gradient(160deg, #1B4FBF 0%, #1338A0 100%)',
    accent: '#60A5FA',
  },
  {
    emoji: '🤝',
    title: 'Your Dedicated Care Team',
    subtitle: 'From consultation to recovery — we guide every step of your journey.',
    bg: 'linear-gradient(160deg, #0D9488 0%, #0F766E 100%)',
    accent: '#5EEAD4',
  },
  {
    emoji: '✈️',
    title: 'Travel + Treatment, Simplified',
    subtitle: 'Flights, accommodation, visas, and hospital booking — all in one place.',
    bg: 'linear-gradient(160deg, #7C3AED 0%, #5B21B6 100%)',
    accent: '#C4B5FD',
  },
  {
    emoji: '🔒',
    title: 'Safe, Secure & Transparent',
    subtitle: 'JCI-accredited hospitals. Upfront costs. No hidden fees. Your trust matters.',
    bg: 'linear-gradient(160deg, #1B4FBF 0%, #0D9488 100%)',
    accent: '#6EE7B7',
  },
];

export default function OnboardingScreen({ onNavigate }) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < slides.length - 1) setCurrent(c => c + 1);
    else onNavigate('login');
  };

  const skip = () => onNavigate('login');
  const slide = slides[current];
  const isLast = current === slides.length - 1;

  return (
    <div className="flex flex-col h-full screen-enter"
      style={{ background: slide.bg, transition: 'background 0.5s ease' }}>

      {/* Decorative bg circles */}
      <div className="absolute top-0 right-0 w-56 h-56 rounded-full opacity-10"
        style={{ background: 'white', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-40 left-0 w-40 h-40 rounded-full opacity-10"
        style={{ background: 'white', transform: 'translate(-30%, 0%)' }} />

      {/* Skip button */}
      <div className="flex justify-end px-4 pt-4 relative z-10">
        <button onClick={skip}
          className="text-white/60 text-sm font-medium px-3 py-1 rounded-full border border-white/20">
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 text-center relative z-10">
        {/* Illustration */}
        <div className="w-36 h-36 rounded-full bg-white/15 backdrop-blur flex items-center justify-center mb-8"
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
          <span className="text-7xl">{slide.emoji}</span>
        </div>

        {/* Trust badges - first slide only */}
        {current === 0 && (
          <div className="flex gap-3 mb-6">
            {['JCI Accredited', 'NABL Labs', '50K+ Patients'].map(b => (
              <span key={b} className="px-2 py-1 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
                ✓ {b}
              </span>
            ))}
          </div>
        )}

        <h2 className="text-2xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: 'Nunito, sans-serif' }}>
          {slide.title}
        </h2>
        <p className="text-white/75 text-base leading-relaxed max-w-xs">
          {slide.subtitle}
        </p>
      </div>

      {/* Bottom */}
      <div className="px-4 pb-10 relative z-10">
        {/* Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, i) => (
            <div key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full cursor-pointer transition-all"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                background: i === current ? 'white' : 'rgba(255,255,255,0.35)',
              }} />
          ))}
        </div>

        <button onClick={next}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-base transition-all active:scale-95"
          style={{ background: 'white', color: '#1B4FBF', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}>
          {isLast ? 'Get Started' : 'Next'}
          <ChevronRight size={20} />
        </button>

        {!isLast && (
          <p className="text-center text-white/50 text-xs mt-4">
            Already have an account?{' '}
            <button onClick={skip} className="text-white font-medium underline">Sign In</button>
          </p>
        )}
      </div>
    </div>
  );
}
