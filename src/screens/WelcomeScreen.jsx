export default function WelcomeScreen({ onNavigate }) {
  return (
    <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {/* Background photo — top ~58% */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src="/welcome-bg.jpg"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
        />
        {/* Gradient fade from photo to white at bottom */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 35%, rgba(255,255,255,0.6) 55%, white 70%)',
        }} />
      </div>

      {/* Logo top-left */}
      <div style={{ position: 'relative', zIndex: 2, padding: '56px 24px 0' }}>
        <img src="/logo.png" alt="MedGlobal360" style={{ width: 110, objectFit: 'contain' }} />
      </div>

      {/* Spacer pushes card down */}
      <div style={{ flex: 1 }} />

      {/* Bottom card */}
      <div style={{
        position: 'relative', zIndex: 2,
        padding: '32px 28px 44px',
        display: 'flex', flexDirection: 'column', gap: 20,
      }}>
        {/* Heading */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <h1 style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: 30, fontWeight: 800,
            color: '#1C1C1E',
            letterSpacing: '-0.025em',
            lineHeight: '125%',
            margin: 0,
          }}>
            Let's Personalise Your Care Journey!
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13, fontWeight: 400,
            color: '#7C7C7C',
            lineHeight: '160%',
            margin: 0,
          }}>
            Discover top doctors and hospitals, and get complete support for your treatment journey in India.
          </p>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* Get Started */}
          <button
            onClick={() => onNavigate('login')}
            type="button"
            style={{
              width: '100%', height: 52,
              background: '#3D4B6B',
              border: 'none', borderRadius: 14,
              fontFamily: "'Inter', sans-serif",
              fontSize: 15, fontWeight: 600,
              color: 'white',
              cursor: 'pointer',
              letterSpacing: '-0.01em',
              boxShadow: '0 4px 16px rgba(35,36,77,0.25)',
            }}
          >
            Get Started
          </button>

          {/* Continue as Guest */}
          <button
            onClick={() => onNavigate('home')}
            type="button"
            style={{
              width: '100%', height: 44,
              background: 'none',
              border: 'none',
              fontFamily: "'Inter', sans-serif",
              fontSize: 14, fontWeight: 500,
              color: '#7C7C7C',
              cursor: 'pointer',
              letterSpacing: '-0.01em',
            }}
          >
            Continue with Guest
          </button>
        </div>

        {/* Home indicator */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 120, height: 4, borderRadius: 2, background: '#1C1C1E', opacity: 0.15 }} />
        </div>
      </div>
    </div>
  );
}
