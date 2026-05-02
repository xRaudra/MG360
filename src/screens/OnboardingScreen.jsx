import { useState } from 'react';

const slides = [
  {
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <circle cx="36" cy="36" r="36" fill="rgba(171,196,235,0.18)" />
        <path d="M36 20a16 16 0 1 1 0 32 16 16 0 0 1 0-32zm0 4a12 12 0 1 0 0 24 12 12 0 0 0 0-24z" fill="#ABBDE9"/>
        <path d="M36 28v8l5 3" stroke="#7AA8E3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="50" cy="22" r="6" fill="#BC89ED" opacity="0.9"/>
        <path d="M48 22h4M50 20v4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    tag: 'FIND CARE',
    title: 'Discover World-Class Doctors & Hospitals',
    subtitle: 'Browse JCI-accredited hospitals and specialist doctors across India and beyond — all verified and rated by real patients.',
  },
  {
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <circle cx="36" cy="36" r="36" fill="rgba(188,169,237,0.15)" />
        <rect x="20" y="28" width="13" height="18" rx="3" fill="#ABBDE9"/>
        <rect x="36" y="22" width="13" height="24" rx="3" fill="#BC89ED"/>
        <path d="M24 44l4-4 4 4 6-8 4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tag: 'COMPARE',
    title: 'Compare Treatments & Transparent Costs',
    subtitle: 'See real pricing, success rates, and patient reviews side by side. No hidden fees — know exactly what you\'re paying for.',
  },
  {
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <circle cx="36" cy="36" r="36" fill="rgba(189,238,173,0.18)" />
        <path d="M22 36h28M36 22l14 14-14 14" stroke="#5BAD7A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="26" cy="36" r="4" fill="#BDEEAD" stroke="#5BAD7A" strokeWidth="2"/>
        <circle cx="36" cy="24" r="3" fill="#ABBDE9"/>
        <circle cx="36" cy="48" r="3" fill="#BC89ED"/>
      </svg>
    ),
    tag: 'PLAN',
    title: 'Your Full Journey, One Place',
    subtitle: 'From first consultation to travel and recovery — flights, visa guidance, accommodation, and follow-up care, all coordinated for you.',
  },
];

export default function OnboardingScreen({ onNavigate }) {
  const [current, setCurrent] = useState(0);
  const isLast = current === slides.length - 1;
  const slide = slides[current];

  const next = () => {
    if (!isLast) setCurrent(c => c + 1);
    else onNavigate('welcome');
  };

  return (
    <div className="flex flex-col h-full bg-app screen-enter">
      {/* Skip */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px 24px 0' }}>
        <button
          onClick={() => onNavigate('welcome')}
          type="button"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13, fontWeight: 500,
            color: '#94A3B8',
            background: 'none', border: 'none', padding: '4px 8px',
            cursor: 'pointer',
          }}
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 16px', gap: 28 }}>
        {/* Icon bubble */}
        <div style={{
          width: 120, height: 120,
          borderRadius: 36,
          background: 'white',
          border: '1px solid #ECEFF2',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(35,36,77,0.08)',
        }}>
          {slide.icon}
        </div>

        {/* Text */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 11, fontWeight: 600,
            letterSpacing: '0.08em',
            color: '#ABBDE9',
          }}>
            {slide.tag}
          </span>
          <h2 style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: 26, fontWeight: 800,
            color: '#23244D',
            letterSpacing: '-0.02em',
            lineHeight: '130%',
            margin: 0,
          }}>
            {slide.title}
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14, fontWeight: 400,
            color: '#7C7C7C',
            lineHeight: '160%',
            margin: 0,
          }}>
            {slide.subtitle}
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ padding: '0 16px 48px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                height: 6,
                width: i === current ? 24 : 6,
                borderRadius: 999,
                background: i === current ? '#23244D' : '#CBD5E1',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={next}
          type="button"
          style={{
            width: '100%', height: 52,
            background: '#56698F',
            border: 'none', borderRadius: 14,
            fontFamily: "'Inter', sans-serif",
            fontSize: 15, fontWeight: 600,
            color: 'white',
            cursor: 'pointer',
            letterSpacing: '-0.01em',
          }}
        >
          {isLast ? 'Get Started →' : 'Next'}
        </button>
      </div>
    </div>
  );
}
