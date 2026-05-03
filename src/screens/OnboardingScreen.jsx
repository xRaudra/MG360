import { useState } from 'react';

const slides = [
  {
    bg: '/walk1-bg.jpg',
    tag: 'DISCOVER',
    title: 'Find the Best Doctors & Hospitals',
    subtitle: 'Browse verified specialists and JCI-accredited hospitals trusted by patients around the world.',
  },
  {
    bg: '/walk2-bg.jpg',
    tag: 'COMPARE',
    title: 'Know the Cost Before You Go',
    subtitle: 'See real prices, success rates, and honest reviews — no surprises, no hidden fees.',
  },
  {
    bg: '/walk3-bg.jpg',
    tag: 'YOUR JOURNEY',
    title: 'We Handle Everything for You',
    subtitle: 'From visa support to follow-up care — flights, stay, and appointments, all in one place.',
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
    <div style={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
      {/* Background images — crossfade between slides */}
      {slides.map((s, i) => (
        <div
          key={s.bg}
          style={{
            position: 'absolute', inset: 0,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        >
          <img
            src={s.bg}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>
      ))}

      {/* Gradient overlay — darkens bottom 60% for readability */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.04) 30%, rgba(15,15,35,0.72) 60%, rgba(15,15,35,0.95) 100%)',
      }} />

      {/* Skip button */}
      <button
        onClick={() => onNavigate('welcome')}
        type="button"
        style={{
          position: 'absolute', top: 52, right: 20, zIndex: 10,
          fontFamily: "'Inter', sans-serif",
          fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.65)',
          background: 'rgba(255,255,255,0.12)',
          border: '1px solid rgba(255,255,255,0.18)',
          borderRadius: 20, padding: '6px 14px',
          cursor: 'pointer', backdropFilter: 'blur(8px)',
        }}
      >
        Skip
      </button>

      {/* Bottom content */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '0 24px 48px',
        display: 'flex', flexDirection: 'column', gap: 20,
        zIndex: 10,
      }}>
        {/* Tag */}
        <div style={{ display: 'flex' }}>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 10, fontWeight: 700,
            letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.55)',
            textTransform: 'uppercase',
          }}>
            {slide.tag}
          </span>
        </div>

        {/* Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <h2 style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: 28, fontWeight: 800,
            color: 'white',
            letterSpacing: '-0.02em',
            lineHeight: '120%',
            margin: 0,
          }}>
            {slide.title}
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14, fontWeight: 400,
            color: 'rgba(255,255,255,0.70)',
            lineHeight: '160%',
            margin: 0,
          }}>
            {slide.subtitle}
          </p>
        </div>

        {/* Dots + Button row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {/* Dots */}
          <div style={{ display: 'flex', gap: 5, flex: 1 }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                type="button"
                style={{
                  height: 4,
                  width: i === current ? 24 : 6,
                  borderRadius: 999,
                  background: i === current ? 'white' : 'rgba(255,255,255,0.3)',
                  border: 'none', padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              />
            ))}
          </div>

          {/* Next / Get Started button */}
          <button
            onClick={next}
            type="button"
            style={{
              height: 52,
              padding: '0 28px',
              background: '#56698F',
              border: 'none', borderRadius: 14,
              fontFamily: "'Inter', sans-serif",
              fontSize: 15, fontWeight: 600,
              color: 'white',
              cursor: 'pointer',
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 20px rgba(86,105,143,0.5)',
              transition: 'background 0.2s ease',
            }}
          >
            {isLast ? 'Get Started' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
}
