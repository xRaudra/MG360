import { useState } from 'react';

const slides = [
  {
    bg: '/walk1-bg.jpg',
    tag: 'Find Care',
    title: 'Discover World-Class Doctors & Hospitals',
    subtitle: 'Browse JCI-accredited hospitals and specialist doctors across India and beyond – all verified and rated by real patients.',
  },
  {
    bg: '/walk2-bg.jpg',
    tag: 'Compare',
    title: 'Compare Treatments & Transparent Costs',
    subtitle: "See real pricing, success rates, and patients reviews side by side. No hidden fees – know exactly what you're paying for.",
  },
  {
    bg: '/walk3-bg.jpg',
    tag: 'Plan',
    title: 'Your Full Journey, One Place',
    subtitle: 'From first consultation to travel and recovery – flights, visa guidance, accommodation, and follow-up care, all coordinated for you.',
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
      {/* Background image */}
      <img
        src={slide.bg}
        alt=""
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'top center',
        }}
      />

      {/* Skip button */}
      <button
        onClick={() => onNavigate('welcome')}
        type="button"
        style={{
          position: 'absolute', top: 20, right: 20,
          background: 'white',
          border: '1px solid rgba(77,129,231,0.3)',
          borderRadius: 999,
          padding: '6px 18px',
          fontFamily: "'Inter', sans-serif",
          fontSize: 13, fontWeight: 500,
          color: '#4D81E7',
          cursor: 'pointer',
        }}
      >
        Skip
      </button>

      {/* Bottom content */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '0 24px 40px',
        display: 'flex', flexDirection: 'column', gap: 8,
      }}>
        {/* Tag */}
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 13, fontWeight: 500,
          color: '#8AABDB',
          textAlign: 'center',
          display: 'block',
        }}>
          {slide.tag}
        </span>

        {/* Heading */}
        <h2 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 26, fontWeight: 800,
          color: '#1C1C1E',
          textAlign: 'center',
          letterSpacing: '-0.02em',
          lineHeight: '130%',
          margin: 0,
        }}>
          {slide.title}
        </h2>

        {/* Subtitle */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14, fontWeight: 400,
          color: '#7C7C7C',
          textAlign: 'center',
          lineHeight: '155%',
          margin: 0,
        }}>
          {slide.subtitle}
        </p>

        {/* Spacer */}
        <div style={{ height: 20 }} />

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 4 }}>
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: 8, height: 8,
                borderRadius: 999,
                background: i === current ? '#23244D' : '#C8CCE5',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
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
            background: '#4D81E7',
            border: 'none', borderRadius: 14,
            fontFamily: "'Inter', sans-serif",
            fontSize: 15, fontWeight: 600,
            color: 'white',
            cursor: 'pointer',
            letterSpacing: '-0.01em',
          }}
        >
          {isLast ? 'Get Started' : 'Next'}
        </button>
      </div>
    </div>
  );
}
